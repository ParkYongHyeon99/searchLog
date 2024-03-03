import asyncio
import aiohttp
import sys
from tqdm import tqdm

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.json()

async def main(nickName, tag):
    gameC = 10
    api_key = "RGAPI-ce7cf6ab-9d88-4c86-8cab-646bcca2fddd"

    async with aiohttp.ClientSession() as session:
        url1 = f'https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{nickName}/{tag}?api_key={api_key}'
        res1 = await fetch(session, url1)
        puuid = res1['puuid']
        url2 = f'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?queue=420&type=ranked&start=0&count={gameC}&api_key={api_key}'
        match_ids = await fetch(session, url2)

        matches = []
        for match_id in tqdm(match_ids):
            url4 = f'https://asia.api.riotgames.com/lol/match/v5/matches/{match_id}?api_key={api_key}'
            res4 = await fetch(session, url4)
            matches.append(res4)

        total = []
        game_list = []
        for data in tqdm(matches):
            for i in range(10):
                if data['info']['participants'][i]['summonerName'] == nickName:
                    summoner_id = data['info']['participants'][i]['summonerId']
                    url3 = f'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/{summoner_id}?api_key={api_key}'
                    res3 = await fetch(session, url3)
                    match_data = []
                    solo_tier = 'unranked'
                    solo_rank = 'unrakned'
                    solo_rankpoint = 0

                    flex_tier = 'unranked'
                    flex_rank = 'unranked'
                    flex_rankpoint = 0

                    for league in res3:
                        if league['queueType'] == 'RANKED_SOLO_5x5':
                            solo_tier = league['tier']
                            solo_rank = league['rank']
                            solo_rankpoint = league['leaguePoints']
                        elif league['queueType'] == 'RANKED_FLEX_SR':
                            flex_tier = league['tier']
                            flex_rank = league['rank']
                            flex_rankpoint = league['leaguePoints']
                        else:
                            pass

                    win = data['info']['participants'][i]['win']
                    total.append(win)
                else:
                    pass

        game_list.append(total)
        game_list.append(solo_tier)

        game_list[0] = list(map(lambda x: 1 if x else 0, game_list[0]))
        winC = sum(game_list[0])
        game_list[0] = (float(winC) / float(gameC)) * 100

    return game_list

def gList(params):
    sn = params.split("#")
    nickName = sn[0]
    tag = sn[1]

    # 이벤트 루프 생성
    loop = asyncio.get_event_loop()

    # main 함수를 비동기적으로 호출하고 결과를 받음
    game_list = loop.run_until_complete(main(nickName, tag))

    return game_list

if __name__ == "__main__":
    # 파라미터를 변경하고 변경된 값을 출력한다.
    params = sys.argv[1]
    game_list = gList(params)

    for param in game_list:
        print(param)
