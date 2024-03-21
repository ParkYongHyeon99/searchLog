def spell_change(id):
    if id == 1:
        return 'SummonerBoost'
    elif id == 3:
        return 'SummonerExhaust'
    elif id == 4:
        return 'SummonerFlash'
    elif id == 6:
        return 'SummonerHaste'
    elif id == 7:
        return 'SummonerHeal'
    elif id == 11:
        return 'SummonerSmite'
    elif id == 12:
        return 'SummonerTeleport'
    elif id == 13:
        return 'SummonerMana'
    elif id == 14:
        return 'SummonerDot'
    elif id == 21:
        return 'SummonerBarrier'
    else:
        return 0

def get_champion_name(id):
    if id == 1 or id == 'Annie' :
        kr_name = '애니'
        return kr_name
    elif id == 2 or id == 'Olaf':
        kr_name = '올라프'
        return kr_name
    elif id == 3 or id == 'Galio':
        kr_name = '갈리오'
        return kr_name
    elif id == 4 or id == 'TwistedFate':
        kr_name = '트위스티드 페이트'
        return kr_name
    elif id == 5 or id == 'XinZhao':
        kr_name = '신짜오'
        return kr_name
    elif id == 6 or id == 'Urgot':
        kr_name = '우르곳'
        return kr_name
    elif id == 7 or id == 'Leblanc':
        kr_name = '르블랑'
        return kr_name
    elif id == 8 or id == 'Vladimir':
        kr_name = '블라디미르'
        return kr_name
    elif id == 9 or id == 'FiddleSticks':
        kr_name = '피들스틱'
        return kr_name
    elif id == 10 or id == 'Kayle':
        kr_name = '케일'
        return kr_name
    elif id == 11 or id == 'MasterYi':
        kr_name = '마스터 이'
        return kr_name
    elif id == 12 or id == 'Alistar':
        kr_name = '알리스타'
        return kr_name
    elif id == 13 or id == 'Ryze':
        kr_name = '라이즈'
        return kr_name
    elif id == 14 or id == 'Sion':
        kr_name = '사이온'
        return kr_name
    elif id == 15 or id == 'Sivir':
        kr_name = '시비르'
        return kr_name
    elif id == 16 or id == 'Soraka':
        kr_name = '소라카'
        return kr_name
    elif id == 17 or id == 'Teemo':
        return '티모'
    elif id == 18 or id == 'Tristana':
        return '트리스타나'
    elif id == 19 or id == 'Warwick':
        return '워윅'
    elif id == 20 or id == 'Nunu':
        return '누누와 윌럼프'
    elif id == 21 or id == 'MissFortune':
        return '미스 포츈'
    elif id == 22 or id == 'Ashe':
        return '애쉬'
    elif id == 23 or id == 'Tryndamere':
        return '트린다미어'
    elif id == 24 or id == 'Jax':
        return '잭스'
    elif id == 25 or id == 'Morgana':
        return '모르가나'
    elif id == 26 or id == 'Zilean':
        return '질리언'
    elif id == 27 or id == 'Singed':
        return '신지드'
    elif id == 28 or id == 'Evelynn':
        return '이블린'
    elif id == 29 or id == 'Twitch':
        return '트위치'
    elif id == 30 or id == 'Karthus':
        return '카서스'
    elif id == 31 or id == 'Chogath':
        return '초가스'
    elif id == 32 or id == 'Amumu':
        return '아무무'
    elif id == 33 or id == 'Rammus':
        return '람머스'
    elif id == 34 or id == 'Anivia':
        return '애니비아'
    elif id == 35 or id == 'Shaco':
        return '샤코'
    elif id == 36 or id == 'DrMundo':
        return '문도 박사'
    elif id == 37 or id == 'Sona':
        return '소나'
    elif id == 38 or id == 'Kassadin':
        return '카사딘'
    elif id == 39 or id == 'Irelia':
        return '이렐리아'
    elif id == 40 or id == 'Janna':
        return '잔나'
    elif id == 41 or id == 'Gangplank':
        return '갱플랭크'
    elif id == 42 or id == 'Corki':
        return '코르키'
    elif id == 43 or id == 'Karma':
        return '카르마'
    elif id == 44 or id == 'Taric':
        return '타릭'
    elif id == 45 or id == 'Veigar':
        return '베이가'
    elif id == 48 or id == 'Trundle':
        return '트런들'
    elif id == 50 or id == 'Swain':
        return '스웨인'
    elif id == 51 or id == 'Caitlyn':
        return '케이틀린'
    elif id == 53 or id == 'Blitzcrank':
        return '블리츠크랭크'
    elif id == 54 or id == 'Malphite':
        return '말파이트'
    elif id == 55 or id == 'Katarina':
        return '카타리나'
    elif id == 56 or id == 'Nocturne':
        return '녹턴'
    elif id == 57 or id == 'Maokai':
        return '마오카이'
    elif id == 58 or id == 'Renekton':
        return '레넥톤'
    elif id == 59 or id == 'JarvanIV':
        return '자르반 4세'
    elif id == 60 or id == 'Elise':
        return '엘리스'
    elif id == 61 or id == 'Orianna':
        return '오리아나'
    elif id == 62 or id == 'MonkeyKing':
        return '오공'
    elif id == 63 or id == 'Brand':
        return '브랜드'
    elif id == 64 or id == 'LeeSin':
        return '리 신'
    elif id == 67 or id == 'Vayne':
        return '베인'
    elif id == 68 or id == 'Rumble':
        return '럼블'
    elif id == 69 or id == 'Cassiopeia':
        return '카시오페아'
    elif id == 72 or id == 'Skarner':
        return '스카너'
    elif id == 74 or id == 'Heimerdinger':
        return '하이머딩거'
    elif id == 75 or id == 'Nasus':
        return '나서스'
    elif id == 76 or id == 'Nidalee':
        return '니달리'
    elif id == 77 or id == 'Udyr':
        return '우디르'
    elif id == 78 or id == 'Poppy':
        return '뽀삐'
    elif id == 79 or id == 'Gragas':
        return '그라가스'
    elif id == 80 or id == 'Pantheon':
        return '판테온'
    elif id == 81 or id == 'Ezreal':
        return '이즈리얼'
    elif id == 82 or id == 'Mordekaiser':
        return '모데카이저'
    elif id == 83 or id == 'Yorick':
        return '요릭'
    elif id == 84 or id == 'Akali':
        return '아칼리'
    elif id == 85 or id == 'Kennen':
        return '케넨'
    elif id == 86 or id == 'Garen':
        return '가렌'
    elif id == 89 or id == 'Leona':
        return '레오나'
    elif id == 90 or id == 'Malzahar':
        return '말자하'
    elif id == 91 or id == 'Talon':
        return '탈론'
    elif id == 92 or id == 'Riven':
        return '리븐'
    elif id == 96 or id == 'KogMaw':
        return '코그모'
    elif id == 98 or id == 'Shen':
        return '쉔'
    elif id == 99 or id == 'Lux':
        return '럭스'
    elif id == 101 or id == 'Xerath':
        return '제라스'
    elif id == 102 or id == 'Shyvana':
        return '쉬바나'
    elif id == 103 or id == 'Ahri':
        return '아리'
    elif id == 104 or id == 'Graves':
        return '그레이브즈'
    elif id == 105 or id == 'Fizz':
        return '피즈'
    elif id == 106 or id == 'Volibear':
        return '볼리베어'
    elif id == 107 or id == 'Rengar':
        return '렝가'
    elif id == 110 or id == 'Varus':
        return '바루스'
    elif id == 111 or id == 'Nautilus':
        return '노틸러스'
    elif id == 112 or id == 'Viktor':
        return '빅토르'
    elif id == 113 or id == 'Sejuani':
        return '세주아니'
    elif id == 114 or id == 'Fiora':
        return '피오라'
    elif id == 115 or id == 'Ziggs':
        return '직스'
    elif id == 117 or id == 'Lulu':
        return '룰루'
    elif id == 119 or id == 'Draven':
        return '드레이븐'
    elif id == 120 or id == 'Hecarim':
        return '헤카림'
    elif id == 121 or id == 'Khazix':
        return '카직스'
    elif id == 122 or id == 'Darius':
        return '다리우스'
    elif id == 126 or id == 'Jayce':
        return '제이스'
    elif id == 127 or id == 'Lissandra':
        return '리산드라'
    elif id == 131 or id == 'Diana':
        return '다이애나'
    elif id == 133 or id == 'Quinn':
        return '퀸'
    elif id == 134 or id == 'Syndra':
        return '신드라'
    elif id == 136 or id == 'AurelionSol':
        return '아우렐리온'
    elif id == 141 or id == 'Kayn':
        return '케인'
    elif id == 142 or id == 'Zoe':
        return '조이'
    elif id == 143 or id == 'Zyra':
        return '자이라'
    elif id == 145 or id == 'Kaisa':
        return '카이사'
    elif id == 147 or id == 'Seraphine':
        return '세라핀'
    elif id == 150 or id == 'Gnar':
        return '나르'
    elif id == 154 or id == 'Zac':
        return '자크'
    elif id == 157 or id == 'Yasuo':
        return '야스오'
    elif id == 161 or id == 'Velkoz':
        return '벨코즈'
    elif id == 163 or id == 'Taliyah':
        return '탈리야'
    elif id == 164 or id == 'Camille':
        return '카밀'
    elif id == 166 or id == 'Akshan':
        return '아크샨'
    elif id == 200 or id == 'Belveth':
        return '벨베스'
    elif id == 201 or id == 'Braum':
        return '브라움'
    elif id == 202 or id == 'Jhin':
        return '진'
    elif id == 203 or id == 'Kindred':
        return '킨드레드'
    elif id == 221 or id == 'Zeri':
        return '제리'
    elif id == 222 or id == 'Jinx':
        return '징크스'
    elif id == 223 or id == 'TahmKench':
        return '탐 켄치'
    elif id == 233 or id == 'Briar':
        return '브라이어'
    elif id == 234 or id == 'Viego':
        return '비에고'
    elif id == 235 or id == 'Senna':
        return '세나'
    elif id == 236 or id == 'Lucian':
        return '루시안'
    elif id == 238 or id == 'Zed':
        return '제드'
    elif id == 240 or id == 'Kled':
        return '클레드'
    elif id == 245 or id == 'Ekko':
        return '에코'
    elif id == 246 or id == 'Qiyana':
        return '키아나'
    elif id == 254 or id == 'Vi':
        return '바이'
    elif id == 266 or id == 'Aatrox':
        return '아트록스'
    elif id == 267 or id == 'Nami':
        return '나미'
    elif id == 268 or id == 'Azir':
        return '아지르'
    elif id == 350 or id == 'Yuumi':
        return '유미'
    elif id == 360 or id == 'Samira':
        return '사미라'
    elif id == 412 or id == 'Thresh':
        return '쓰레쉬'
    elif id == 420 or id == 'Illaoi':
        return '일라오이'
    elif id == 421 or id == 'RekSai':
        return '렉사이'
    elif id == 427 or id == 'Ivern':
        return '아이번'
    elif id == 429 or id == 'Kalista':
        return '칼리스타'
    elif id == 432 or id == 'Bard':
        return '바드'
    elif id == 497 or id == 'Rakan':
        return '라칸'
    elif id == 498 or id == 'Xayah':
        return '자야'
    elif id == 516 or id == 'Ornn':
        return '오른'
    elif id == 517 or id == 'Sylas':
        return '사일러스'
    elif id == 518 or id == 'Neeko':
        return '니코'
    elif id == 523 or id == 'Aphelios':
        return '아펠리오스'
    elif id == 526 or id == 'Rell':
        return '렐'
    elif id == 555 or id == 'Pyke':
        return '파이크'
    elif id == 711 or id == 'Vex':
        return '벡스'
    elif id == 777 or id == 'Yone':
        return '요네'
    elif id == 875 or id == 'Sett':
        return '세트'
    elif id == 876 or id == 'Lillia':
        return '릴리아'
    elif id == 887 or id == 'Gwen':
        return '그웬'
    elif id == 888 or id == 'Renata':
        return '레나타 글라스크'
    elif id == 895 or id == 'Nilah':
        return '닐라'
    elif id == 897 or id == 'KSante':
        return '크산테'
    elif id == 901 or id == 'Smolder':
        return '스몰더'
    elif id == 902 or id == 'Milio':
        return '밀리오'
    elif id == 910 or id == 'Hwei':
        return '흐웨이'
    elif id == 950 or id == 'Naafiri':
        return '나피리'
    else:
        return 0


def tier_change(id):
    if id == 'IRON':
        return '아이언'
    elif id == 'BRONZE':
        return '브론즈'
    elif id == 'SILVER':
        return '실버'
    elif id == 'GOLD':
        return '골드'
    elif id == 'PLATINUM':
        return '플래티넘'
    elif id == 'EMERALD':
        return '에메랄드'
    elif id == 'DIAMOND':
        return '다이아몬드'
    elif id == 'MASTER':
        return '마스터'
    elif id == 'GRANDMASTER':
        return '그랜드마스터'
    elif id == 'CHALLENGER':
        return '챌린저'
    else:
        return 'unranked'
