from code1.test1 import search
from model.test1 import DataListInfo
from fastapi import APIRouter

router = APIRouter(prefix='/summoner')


@router.get(
    path='/search',
    response_model=DataListInfo
)
def summoner_data(
        name: str,
        tag: str,
        start: int
) -> DataListInfo:
    return search(name=name, tag=tag, start=start)
