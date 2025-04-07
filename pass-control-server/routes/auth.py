from fastapi import APIRouter, HTTPException


router  = APIRouter(
    prefix="/auth",
    tags=['Items']
)


fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}]