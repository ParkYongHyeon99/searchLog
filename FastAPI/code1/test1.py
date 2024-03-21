import requests
import pandas as pd
from zzz_def import *
from model.test1 import DataInfo, DataListInfo
from datetime import datetime
from db.lol import insert_data_mysql, connect_mysql

# name = '패드립박는기계'
# tag = 'KR1'


def get_data(matchId, championName, kills, deaths, assists, win, teamId, teamPosition, totalMinionsKilled, neutralMinionsKilled,
             totalDamageDealtToChampions, totalDamageTaken, wardsKilled, wardsPlaced, visionWardsBoughtInGame, summonerName,
              riotIdTagline, summoner1Id, summoner2Id, champLevel, item0, item1, item2, item3, item4, item5,
             item6, kda, cs, mainRune, subRune, baron, dragon, horde, riftHerald, tower, gameDuration, playtime, totalGold,
             blueGold, redGold, blueKill, redKill, profileIcon, solo_tier, solo_rank, solo_rankpoint, history) -> DataInfo:
    return DataInfo(
        matchId = matchId,
        championName = championName,
        kills = kills,
        deaths = deaths,
        assists = assists,
        # perks = perks,
        win = win,
        teamId = teamId,
        teamPosition = teamPosition,
        totalMinionsKilled = totalMinionsKilled,
        neutralMinionsKilled = neutralMinionsKilled,
        totalDamageDealtToChampions = totalDamageDealtToChampions,
        totalDamageTaken = totalDamageTaken,
        wardsKilled = wardsKilled,
        wardsPlaced = wardsPlaced,
        visionWardsBoughtInGame = visionWardsBoughtInGame,
        summonerName = summonerName,
        riotIdTagline = riotIdTagline,
        summoner1Id = summoner1Id,
        summoner2Id = summoner2Id,
        champLevel = champLevel,
        item0 = item0,
        item1 = item1,
        item2 = item2,
        item3 = item3,
        item4 = item4,
        item5 = item5,
        item6 = item6,
        kda = kda,
        cs = cs,
        mainRune = mainRune,
        subRune = subRune,
        baron = baron,
        dragon = dragon,
        horde = horde,
        riftHerald = riftHerald,
        tower = tower,
        gameDuration = gameDuration,
        playtime = playtime,
        totalGold = totalGold,
        blueGold = blueGold,
        redGold = redGold,
        blueKill = blueKill,
        redKill = redKill,
        profileIcon = profileIcon,
        solo_tier = solo_tier,
        solo_rank = solo_rank,
        solo_rankpoint = solo_rankpoint,
        history = history
    )


def search(name: str,
           tag: str, start: int) -> DataListInfo:
    api_key = 'RGAPI-0300002f-3e1a-4328-9896-460be62b0c34'
    api_key2 = 'RGAPI-bccf97c3-21e7-4d65-a55c-a424d6a97533'

    url1 = f'https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{name}/{tag}?api_key={api_key2}'
    res1 = requests.get(url1).json()
    puuid = res1['puuid']
                                                                                                                   # 시작          끝
    url2 = f'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?queue=420&type=ranked&start={start}&count={2}&api_key={api_key2}'
    match_ids = requests.get(url2).json()

    matches = []
    timelines = []
    for match_id in match_ids:
        url3 = f'https://asia.api.riotgames.com/lol/match/v5/matches/{match_id}/timeline?api_key={api_key}'
        res3 = requests.get(url3).json()
        timelines.append(res3['info']['frames'])

        url4 = f'https://asia.api.riotgames.com/lol/match/v5/matches/{match_id}?api_key={api_key}'
        res4 = requests.get(url4).json()
        matches.append(res4)


    game_list = []
    for data, timeline in zip(matches, timelines):
        match_data = []
        blueGold = 0
        redGold = 0
        blueKill = 0
        redKill = 0
        for i in range(10):
            total = []
            matchId = data['metadata']['matchId']
            championName = data['info']['participants'][i]['championName']
            kills = data['info']['participants'][i]['kills']
            deaths = data['info']['participants'][i]['deaths']
            assists = data['info']['participants'][i]['assists']
            win = data['info']['participants'][i]['win']
            teamId = data['info']['participants'][i]['teamId']
            teamPosition = data['info']['participants'][i]['teamPosition']
            totalMinionsKilled = data['info']['participants'][i]['totalMinionsKilled']
            neutralMinionsKilled = data['info']['participants'][i]['neutralMinionsKilled']
            totalDamageDealtToChampions = data['info']['participants'][i]['totalDamageDealtToChampions']
            totalDamageTaken = data['info']['participants'][i]['totalDamageTaken']
            wardsKilled = data['info']['participants'][i]['wardsKilled']
            wardsPlaced = data['info']['participants'][i]['wardsPlaced']
            visionWardsBoughtInGame = data['info']['participants'][i]['visionWardsBoughtInGame']
            summonerName = data['info']['participants'][i]['summonerName']
            riotIdTagline = data['info']['participants'][i]['riotIdTagline']
            summoner1Id = spell_change(data['info']['participants'][i]['summoner1Id'])
            summoner2Id = spell_change(data['info']['participants'][i]['summoner2Id'])
            champLevel = data['info']['participants'][i]['champLevel']
            item0 = data['info']['participants'][i]['item0']
            item1 = data['info']['participants'][i]['item1']
            item2 = data['info']['participants'][i]['item2']
            item3 = data['info']['participants'][i]['item3']
            item4 = data['info']['participants'][i]['item4']
            item5 = data['info']['participants'][i]['item5']
            item6 = data['info']['participants'][i]['item6']
            kda = round((data['info']['participants'][i]['kills'] + data['info']['participants'][i]['assists']) / max(1, data['info']['participants'][i]['deaths']), 1)
            cs = data['info']['participants'][i]['totalMinionsKilled'] + data['info']['participants'][i]['neutralMinionsKilled']

            mainRune = data['info']['participants'][i]['perks']['styles'][0]['style']
            subRune = data['info']['participants'][i]['perks']['styles'][1]['style']

            if i < 5:
                baron = data['info']['teams'][0]['objectives']['baron']['kills']
                dragon = data['info']['teams'][0]['objectives']['dragon']['kills']
                horde = data['info']['teams'][0]['objectives']['horde']['kills']
                riftHerald = data['info']['teams'][0]['objectives']['riftHerald']['kills']
                tower = data['info']['teams'][0]['objectives']['tower']['kills']
            else:
                baron = data['info']['teams'][1]['objectives']['baron']['kills']
                dragon = data['info']['teams'][1]['objectives']['dragon']['kills']
                horde = data['info']['teams'][1]['objectives']['horde']['kills']
                riftHerald = data['info']['teams'][1]['objectives']['riftHerald']['kills']
                tower = data['info']['teams'][1]['objectives']['tower']['kills']
            gameDuration = data['info']['gameDuration']

            now = datetime.now()

            start = data['info']['gameStartTimestamp']
            end = data['info']['gameEndTimestamp']

            start1 = start / 1000
            start_datetime = datetime.fromtimestamp(start1)

            # end 타임스탬프
            end1 = end / 1000
            end_datetime = datetime.fromtimestamp(end1)

            delta = now - end_datetime
            days = delta.days
            if days != 0:
                history = str(days) + '일 전'
            else:
                delta = now - end_datetime
                hours_diff = round(delta.total_seconds() // 3600)
                if hours_diff != 0:
                    history = str(hours_diff) + '시간 전'
                else:
                    minutes_diff = round(delta.total_seconds() // 60)
                    history = str(minutes_diff) + '분 전'

            # 차이 계산
            difference = end_datetime - start_datetime

            # 차이를 분 단위와 초 단위로 변환
            minutes = difference.seconds // 60
            seconds = difference.seconds % 60

            # 분 단위가 60보다 작으면 그대로 출력, 60보다 크면 1을 빼고 출력
            if minutes < 60:
                playtime = (f"{minutes}:{seconds:02d}")
            else:
                playtime = (f"{minutes - 1}:{seconds:02d}")

            totalGold = timeline[-1]['participantFrames'][str(i + 1)]['totalGold']

            if i < 5:
                blueGold += int(timeline[-1]['participantFrames'][str(i + 1)]['totalGold'])
            else:
                redGold += int(timeline[-1]['participantFrames'][str(i + 1)]['totalGold'])

            if i < 5:
                blueKill += int(data['info']['participants'][i]['kills'])
            else:
                redKill += int(data['info']['participants'][i]['kills'])

            profileIcon = data['info']['participants'][i]['profileIcon']

            solo_tier = 'unranked'
            solo_rank = 0
            solo_rankpoint = 0
            if data['info']['participants'][i]['riotIdGameName'] == name:
                summoner_id = data['info']['participants'][i]['summonerId']
                url5 = f'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/{summoner_id}?api_key={api_key}'
                res5 = requests.get(url5).json()

                for league in res5:
                    if league['queueType'] == 'RANKED_SOLO_5x5':
                        solo_tier = league['tier']
                        if league['rank'] == "I":
                            solo_rank = 1
                        elif league['rank'] == "II":
                            solo_rank = 2
                        elif league['rank'] == "III":
                            solo_rank = 3
                        elif league['rank'] == "IV":
                            solo_rank = 4
                        else:
                            0
                        solo_rankpoint = league['leaguePoints']




            total = get_data(matchId, championName, kills, deaths, assists, win, teamId, teamPosition, totalMinionsKilled,
                             neutralMinionsKilled, totalDamageDealtToChampions, totalDamageTaken, wardsKilled, wardsPlaced,
                             visionWardsBoughtInGame, summonerName, riotIdTagline, summoner1Id, summoner2Id,
                             champLevel, item0, item1, item2, item3, item4, item5, item6, kda, cs, mainRune, subRune,
                             baron, dragon, horde, riftHerald, tower, gameDuration, playtime, totalGold,
                             blueGold, redGold, blueKill, redKill, profileIcon,
                             solo_tier, solo_rank, solo_rankpoint, history)

            match_data.append(total)

            # conn = connect_mysql()
            # insert_data_mysql(total, conn)
            # conn.commit()
            # conn.close()

        game_list.append(match_data)
    return DataListInfo(
        total_Data_list=game_list
    )
