from pydantic import BaseModel
from typing import List


class DataInfo(BaseModel):
    matchId: str
    championName: str
    kills: int
    deaths: int
    assists: int
    win: str
    teamId: int
    teamPosition: str
    totalMinionsKilled: int
    neutralMinionsKilled: int
    totalDamageDealtToChampions: int
    totalDamageTaken: int
    wardsKilled: int
    wardsPlaced: int
    visionWardsBoughtInGame: int
    summonerName: str
    riotIdTagline: str
    summoner1Id: str
    summoner2Id: str
    champLevel: int
    item0: int
    item1: int
    item2: int
    item3: int
    item4: int
    item5: int
    item6: int
    kda: float
    cs: int
    mainRune: int
    subRune: int
    baron: int
    dragon: int
    horde: int
    riftHerald: int
    tower: int
    gameDuration: int
    playtime:str
    totalGold: int
    blueGold:int
    redGold:int
    blueKill:int
    redKill:int
    profileIcon:int
    solo_tier: str
    solo_rank: str
    solo_rankpoint: int
    history:str


class DataListInfo(BaseModel):
    total_Data_list: List[List[DataInfo]]
