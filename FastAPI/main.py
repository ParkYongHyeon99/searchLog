from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from router.test1 import router

app = FastAPI()

#CORS설정
origins = [
    'http://localhost:63342',
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,    #["*"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class SummonerList(BaseModel):
    name: str = ''
    tag: str = ''


@app.get('/')
def root():
    return {"hello": "world"}


app.include_router(router, tags=['summoner/search'])


if __name__ == '__main__':
    app.run(port=8000)

# uvicorn main:app --reload
# uvicorn main:app --reload --host=192.168.1.27 --port=8000
# uvicorn main:app --reload --host=192.168.206.59 --port=8000

# 192.168.206.59