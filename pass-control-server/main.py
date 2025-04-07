from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from google.oauth2 import id_token
from google.auth.transport import requests
from jose import JWTError, jwt
from pydantic import BaseModel
import os

app = FastAPI()

# Настройки CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
GOOGLE_CLIENT_ID = "ВАШ_GOOGLE_CLIENT_ID"
SECRET_KEY = "ваш-секретный-ключ-для-jwt"
ALGORITHM = "HS256"



class TokenData(BaseModel):
    token: str

# Валидация Google токена
async def verify_google_token(token: str):
    try:
        idinfo = id_token.verify_oauth2_token(
            token, 
            requests.Request(),
            env
        )
        
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError("Неверный издатель токена")
            
        return idinfo
    except ValueError:
        raise HTTPException(status_code=401, detail="Невалидный токен")

# Генерация JWT
def create_jwt_token(data: dict):
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)

# Эндпоинт для аутентификации
@app.post("/api/auth/google")
async def auth_google(token_data: TokenData):
    user_info = await verify_google_token(token_data.token)
    
    # Здесь можно сохранить пользователя в БД
    # Пример: создание JWT токена
    jwt_token = create_jwt_token({
        "sub": user_info["sub"],
        "email": user_info["email"],
        "name": user_info.get("name", "")
    })
    
    return {"access_token": jwt_token, "token_type": "bearer"}

# Защищенный эндпоинт
@app.get("/api/protected")
async def protected_route(token: str = Depends(lambda: jwt.decode(
    token, SECRET_KEY, algorithms=[ALGORITHM]
))):
    return {"message": "Доступ разрешен", "user": token}