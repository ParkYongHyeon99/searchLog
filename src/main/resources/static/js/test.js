// URL에서 파라미터를 가져옴
var params = new URLSearchParams(window.location.search);
var name = params.get('name');
var tag = params.get('tag');
var start = 0;
var champList = [];
var totalList = [];
var winLoss = [];

var topPick = 0;
var jgPick = 0;
var midPick = 0;
var botPick = 0;
var supPick = 0;




$(document).ready(function() {
	// AJAX 요청 실행

	LoadingWithMask()

	$.ajax({
		type: "GET",
		//url: "http://127.0.0.1:8000/summoner/search",
		url: "http://192.168.1.27:8000/summoner/search",

		data: {
			name: name,
			tag: tag,
			start: start
		},
		success: function(result) {
			name = params.get('name');
			console.log(result);
			$('#lanePick').css({
				"display": "block"
			})
			$('#mostPlayName').css({
				"display": "block"
			})
			$('.ddd').css({
				"display": "block"
			})

			for (var l = 0; l < result.total_Data_list.length; l++) {
				var championNames = []
				var championImgs = []
				var summonerNames = []
				var summonerTags = []
				var mainRunes = []
				var subRunes = []
				var mainRunesImg = []
				var subRunesImg = []
				var summoner1Ids = []
				var summoner2Ids = []
				var summoner1IdsImg = []
				var summoner2IdsImg = []
				var kill = []
				var assist = []
				var death = []
				var kda = []
				var totalDamageDealtToChampions = []
				var totalDamageTakens = []
				var visionWardsBoughtInGame = []
				var wardsPlaced = []
				var wardsKilled = []
				var cs = []
				var item0 = []
				var item1 = []
				var item2 = []
				var item3 = []
				var item4 = []
				var item5 = []
				var item6 = []

				var item0Img = []
				var item1Img = []
				var item2Img = []
				var item3Img = []
				var item4Img = []
				var item5Img = []
				var item6Img = []

				var playtime = []

				var baron = []
				var dragon = []
				var horde = []
				var riftHerald = []
				var tower = []

				var blueGold = []
				var redGold = []

				var blueKill = []
				var redKill = []

				for (var i = 0; i < 10; i++) {
					championNames.push(JSON.stringify(result.total_Data_list[l][i].championName).slice(1, -1));
					championImgs.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/" + championNames[i] + ".png");

					summonerNames.push(JSON.stringify(result.total_Data_list[l][i].summonerName).slice(1, -1));
					summonerTags.push(JSON.stringify(result.total_Data_list[l][i].riotIdTagline).slice(1, -1));

					mainRunes.push(JSON.stringify(result.total_Data_list[l][i].mainRune))
					subRunes.push(JSON.stringify(result.total_Data_list[l][i].subRune))

					mainRunesImg.push("https://cdn.lol.ps/assets/img/runes/" + mainRunes[i] + "_40.webp");
					subRunesImg.push("https://cdn.lol.ps/assets/img/runes/" + subRunes[i] + "_40.webp");

					summoner1Ids.push(JSON.stringify(result.total_Data_list[l][i].summoner1Id).slice(1, -1));
					summoner2Ids.push(JSON.stringify(result.total_Data_list[l][i].summoner2Id).slice(1, -1));

					summoner1IdsImg.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + summoner1Ids[i] + ".png");
					summoner2IdsImg.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + summoner2Ids[i] + ".png");

					kill.push(JSON.stringify(result.total_Data_list[l][i].kills))
					assist.push(JSON.stringify(result.total_Data_list[l][i].assists))
					death.push(JSON.stringify(result.total_Data_list[l][i].deaths))
					kda.push(JSON.stringify(result.total_Data_list[l][i].kda))

					totalDamageDealtToChampions.push(JSON.stringify(result.total_Data_list[l][i].totalDamageDealtToChampions))
					totalDamageTakens.push(JSON.stringify(result.total_Data_list[l][i].totalDamageTaken))

					visionWardsBoughtInGame.push(JSON.stringify(result.total_Data_list[l][i].visionWardsBoughtInGame))
					wardsPlaced.push(JSON.stringify(result.total_Data_list[l][i].wardsPlaced))
					wardsKilled.push(JSON.stringify(result.total_Data_list[l][i].wardsKilled))

					cs.push(JSON.stringify(result.total_Data_list[l][i].cs))

					item0.push(JSON.stringify(result.total_Data_list[l][i].item0));
					item1.push(JSON.stringify(result.total_Data_list[l][i].item1));
					item2.push(JSON.stringify(result.total_Data_list[l][i].item2));
					item3.push(JSON.stringify(result.total_Data_list[l][i].item3));
					item4.push(JSON.stringify(result.total_Data_list[l][i].item4));
					item5.push(JSON.stringify(result.total_Data_list[l][i].item5));
					item6.push(JSON.stringify(result.total_Data_list[l][i].item6));

					playtime.push(JSON.stringify(result.total_Data_list[l][i].playtime).slice(1, -1))

					baron.push(JSON.stringify(result.total_Data_list[l][i].baron))
					dragon.push(JSON.stringify(result.total_Data_list[l][i].dragon))
					tower.push(JSON.stringify(result.total_Data_list[l][i].tower))
					horde.push(JSON.stringify(result.total_Data_list[l][i].horde))
					riftHerald.push(JSON.stringify(result.total_Data_list[l][i].riftHerald))

					blueGold.push(JSON.stringify(result.total_Data_list[l][i].blueGold))
					redGold.push(JSON.stringify(result.total_Data_list[l][i].redGold))

					blueKill.push(JSON.stringify(result.total_Data_list[l][i].blueKill))
					redKill.push(JSON.stringify(result.total_Data_list[l][i].redKill))


					if (item0[i] != 0) {
						item0Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item0[i] + ".png");
					} else {
						item0Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item1[i] != 0) {
						item1Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item1[i] + ".png");
					} else {
						item1Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item2[i] != 0) {
						item2Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item2[i] + ".png");
					} else {
						item2Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item3[i] != 0) {
						item3Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item3[i] + ".png");
					} else {
						item3Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item4[i] != 0) {
						item4Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item4[i] + ".png");
					} else {
						item4Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item5[i] != 0) {
						item5Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item5[i] + ".png");
					} else {
						item5Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item6[i] != 0) {
						item6Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item6[i] + ".png");
					} else {
						item6Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}



					if (name == result.total_Data_list[l][i].summonerName) {
						if (JSON.stringify(result.total_Data_list[l][i].win).slice(1, -1) ==
							"True") {
							var win = '승리';

						} else {
							var win = '패배';
						}

						var I_position = JSON.stringify(result.total_Data_list[l][i].teamPosition).slice(1, -1);

						if (I_position === "TOP") {
							topPick++;
						} else if (I_position === "JUNGLE") {
							jgPick++;
						} else if (I_position === "MIDDLE") {
							midPick++;
						} else if (I_position === "BOTTOM") {
							botPick++;
						} else if (I_position === "UTILITY") {
							supPick++;
						}
						var totalPick = topPick + jgPick + midPick + botPick + supPick




						var I_summonerLevel = JSON.stringify(result.total_Data_list[l][i].champLevel)
						var I_summonerName = JSON.stringify(result.total_Data_list[l][i].summonerName).slice(1, -1);
						var I_championName = JSON.stringify(result.total_Data_list[l][i].championName).slice(1, -1);
						var I_champImg = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/" + I_championName + ".png";

						var I_summonerTag = JSON.stringify(result.total_Data_list[l][i].riotIdTagline).slice(1, -1);

						var I_mainRune = JSON.stringify(result.total_Data_list[l][i].mainRune);
						var I_subRune = JSON.stringify(result.total_Data_list[l][i].subRune);

						var I_mainRuneImg = "https://cdn.lol.ps/assets/img/runes/" +
							I_mainRune + "_40.webp";
						var I_subRuneImg = "https://cdn.lol.ps/assets/img/runes/" +
							I_subRune + "_40.webp";

						var I_kill = JSON.stringify(result.total_Data_list[l][i].kills);
						var I_assist = JSON.stringify(result.total_Data_list[l][i].assists);
						var I_death = JSON.stringify(result.total_Data_list[l][i].deaths);
						var I_kda = JSON.stringify(result.total_Data_list[l][i].kda);

						var I_item0 = JSON.stringify(result.total_Data_list[l][i].item0);
						var I_item1 = JSON.stringify(result.total_Data_list[l][i].item1);
						var I_item2 = JSON.stringify(result.total_Data_list[l][i].item2);
						var I_item3 = JSON.stringify(result.total_Data_list[l][i].item3);
						var I_item4 = JSON.stringify(result.total_Data_list[l][i].item4);
						var I_item5 = JSON.stringify(result.total_Data_list[l][i].item5);
						var I_item6 = JSON.stringify(result.total_Data_list[l][i].item6);

						var I_item0Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item0 + ".png";
						var I_item1Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item1 + ".png";
						var I_item2Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item2 + ".png";
						var I_item3Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item3 + ".png";
						var I_item4Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item4 + ".png";
						var I_item5Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item5 + ".png";
						var I_item6Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item6 + ".png";

						var I_champLevel = JSON.stringify(result.total_Data_list[l][i].champLevel);

						var I_summoner1Id = JSON.stringify(result.total_Data_list[l][i].summoner1Id).slice(1, -1);
						var I_summoner2Id = JSON.stringify(result.total_Data_list[l][i].summoner2Id).slice(1, -1);
						var I_summoner1IdImg =
							"https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + I_summoner1Id + ".png";
						var I_summoner2IdImg =
							"https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + I_summoner2Id + ".png";


						var I_visionWards = JSON.stringify(result.total_Data_list[l][i].visionWardsBoughtInGame);
						var I_totalGold = JSON.stringify(result.total_Data_list[l][i].totalGold);

						var profileIcon = JSON.stringify(result.total_Data_list[l][i].profileIcon);

						var iconImg = "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/"
							+ profileIcon + ".png"

						champList.push(JSON.stringify(result.total_Data_list[l][i].championName).slice(1, -1));
						winLoss.push(JSON.stringify(result.total_Data_list[l][i].win).slice(1, -1));

						var I_tier = JSON.stringify(result.total_Data_list[l][i].solo_tier).slice(1, -1);
						var I_rank = JSON.stringify(result.total_Data_list[l][i].solo_rank).slice(1, -1);
						var I_point = JSON.stringify(result.total_Data_list[l][i].solo_rankpoint);
						
						var I_history = JSON.stringify(result.total_Data_list[l][i].history).slice(1, -1);

					} //검색한 소환사 확인


				}
				// 10명

				$("#name").empty();
				$("#name").append(`
							<span>${I_summonerName}#${I_summonerTag}</span>
				`)


				$("#icon").empty();
				$("#icon").append(`
				 <img src="${iconImg}" alt="" width="100px" height: 100px;>
				`)


				$("#123").append(`
    <table>
     <div id="background${l}">
        <div id="background_padding">
            <div id="win">
                <span>${win}</span><br><br>
                <span>${playtime[0]}</span><br>
                <span>${I_history}</span>
            </div>

            <div id="champion_info">
                <div id="champ_img">
                    <img id="champImg" src="${I_champImg}" alt="" width="60px">
                </div>

                <div id="k_d_a">
                    ${I_kill} / ${I_death} / ${I_assist}
                    <div id="kda">
                        ${I_kda} KDA
                    </div>
                </div>

                <div id="rune_spell">
                    <div id="q" class="spell_1"><img src="${I_summoner1IdImg}" alt="" width="30px"></div>
                    <div id="q" class="rune_1"><img src="${I_mainRuneImg}" alt="" width="30px"></div>
					<div id="q" class="spell_2"><img src="${I_summoner2IdImg}" alt="" width="30px"></div>
                    <div id="q" class="rune_2"><img src="${I_subRuneImg}" alt="" width="30px"></div>
                </div>
                <div id="item" class="item">
                    <div id="w" class="item0"><img src="${I_item0Img}" alt="" width="30px"></div>
                    <div id="w" class="item1"><img src="${I_item1Img}" alt="" width="30px"></div>
                    <div id="w" class="item2"><img src="${I_item2Img}" alt="" width="30px"></div>
                    <div id="w" class="item3"><img src="${I_item3Img}" alt="" width="30px"></div>
                    <div id="w" class="item4"><img src="${I_item4Img}" alt="" width="30px"></div>
                    <div id="w" class="item5"><img src="${I_item5Img}" alt="" width="30px"></div>
                    <div id="w" class="item6"><img src="${I_item6Img}" alt="" width="30px"></div>
                </div>
            </div>
            <div id="list2">
                <span>레벨: ${I_summonerLevel}</span><br><br>
                <span>제어와드 설치: ${I_visionWards}</span><br><br>
                <span>총 골드: ${I_totalGold}</span>
            </div>
            
            <div id="user">
                <div id="blue">
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[0]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[0]}#${summonerTags[0]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[1]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[1]}#${summonerTags[1]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[2]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[2]}#${summonerTags[2]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[3]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[3]}#${summonerTags[3]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[4]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[4]}#${summonerTags[4]}</div>
                    </div>
                </div>
                
                <div id="blue">
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[5]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[5]}#${summonerTags[5]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[6]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[6]}#${summonerTags[6]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[7]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[7]}#${summonerTags[7]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[8]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[8]}#${summonerTags[8]}</div>
                    </div>
                    <div id="blueId">
                        <div id="blueImg"><img src="${championImgs[9]}" alt="" width="19px"></div>
                        <div id="blueUser">${summonerNames[9]}#${summonerTags[9]}</div>
                    </div>
                
                </div>

            </div>
            <div id="more">
                <input class="more" id="hideButton${l}" type="button"  value="자세히" style="font-size: 8px;" onclick="sibla(${l}) ">
            </div>
        </div>
    </div>
                </table>
    <div id="hidden-table${l}" style="display: none;">
     <div id="fullscreen">
        <div id="screen1" class="top">
            <div id="screen1-1" class="top_left">
                <div id="screen1-1-1">
                <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/vilemaw-100.png" alt="" width="25px" height="25px"></div>
                <div id="screen1-1-2">${horde[0]}</div>
                <div id="screen1-1-3">
                <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/baron-100.png" alt="" width="25px" height="25px"></div>
                <div id="screen1-1-4">${baron[0]}</div>
                <div id="screen1-1-5">
                <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/herald-100.png" alt="" width="25px" height="25px"></div>
                <div id="screen1-1-6">${riftHerald[0]}</div>
                <div id="screen1-1-7">
                <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/dragon-100.png" alt="" width="25px" height="25px"></div>
                <div id="screen1-1-8">${dragon[0]}</div>
                <div id="screen1-1-9">
                <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/tower-100.png" alt="" width="25px" height="25px"></div>
                <div id="screen1-1-10">${tower[0]}</div>
            </div>
            <div id="screen1-2" class="top_mid">
                <div id="screen1-2-1${l}"></div>
                <div id="screen1-2-2${l}"></div>
            </div>
            <div id="screen1-3-1">
    <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/vilemaw-200.png" alt="" width="25px" height="25px"></div>
    <div id="screen1-3-2">${horde[5]}</div>
    <div id="screen1-3-3">
    <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/baron-200.png" alt="" width="25px" height="25px"></div>
    <div id="screen1-3-4">${baron[5]}</div>
    <div id="screen1-3-5">
    <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/herald-200.png" alt="" width="25px" height="25px"></div>
    <div id="screen1-3-6">${riftHerald[5]}</div>
    <div id="screen1-3-7">
    <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/dragon-200.png" alt="" width="25px" height="25px"></div>
    <div id="screen1-3-8">${dragon[5]}</div>
    <div id="screen1-3-9">
    <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/tower-200.png" alt="" width="25px" height="25px"></div>
    <div id="screen1-3-10">${tower[5]}</div>

            <div id="screen2" style="font-size: small; text-align: center; justify-content: center; ">
                <div id="screen2-1">승리</div>
                <div id="screen2-2">블루팀</div>
                <div id="screen2-3">KDA</div>
                <div id="screen2-4">가한피해량</div>
                <div id="screen2-5">받은피해량</div>
                <div id="screen2-6">와드</div>
                <div id="screen2-7">CS</div>
                <div id="screen2-8">아이템</div>
            </div>
            <div id="screen3">
                <div id="screen3-1">
                    <div id="screen3-1-1">
                        <div id="screen3-1-1-1"><img
                                src="${championImgs[0]}" alt=""
                                width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
                        <div id="screen3-1-1-2">
                            <div id="screen3-1-1-2-1"><img
                                    src="${summoner1IdsImg[0]}"
                                    alt="" width="23px" height="23px"></div>
                            <div id="screen3-1-1-2-2"><img
                                    src="${mainRunesImg[0]}"
                                    alt="" width="23px" height="23px"></div>
                            <div id="screen3-1-1-2-3"><img
                                    src="${summoner2IdsImg[0]}"
                                    alt="" width="23px" height="23px"></div>
                            <div id="screen3-1-1-2-4"><img
                                    src="${subRunesImg[0]}"
                                    alt="" width="23px" height="23px"></div>
                        </div>
                    </div>

                    <div id="screen3-1-2">
                        <div id="screen3-1-2-1">${summonerNames[0]}</div>
                        <div id="screen3-1-2-2">${summonerTags[0]}</div>
                    </div>

                    <div id="screen3-1-3">
                        <div id="screen3-1-3-1">${kill[0]} / ${death[0]} / ${assist[0]} </div>
                        <div id="screen3-1-3-2">${kda[0]} KDA</div>
                    </div>
                    <div id="screen3-1-4">
                        ${totalDamageDealtToChampions[0]}
                    </div>

                    <div id="screen3-1-5">
                        ${totalDamageTakens[0]}
                    </div>

                    <div id="screen3-1-6">
                        <span>${visionWardsBoughtInGame[0]}</span><br>
                        <span>${wardsPlaced[0]} / ${wardsKilled[0]}</span>
                        <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>

                    </div>

                    <div id="screen3-1-7">
                        ${cs[0]}
                    </div>
                    <div id="screen3-1-8">
                        <div id="screen3-1-8-1"><img
                                src="${item0Img[0]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-2"><img
                                src="${item1Img[0]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-3"><img
                                src="${item2Img[0]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-4"><img
                                src="${item3Img[0]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-5"><img
                                src="${item4Img[0]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-6"><img
                                src="${item5Img[0]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-7"><img
                                src="${item6Img[0]}" alt=""
                                width="23px" height="23px"></div>
                       
                    </div>
                </div>
                <div id="screen3">
                <div id="screen3-1">
                    <div id="screen3-1-1">
                        <div id="screen3-1-1-1"><img
                                src="${championImgs[1]}" alt=""
                                width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
                        <div id="screen3-1-1-2">
                            <div id="screen3-1-1-2-1"><img
                                    src="${summoner1IdsImg[1]}"
                                    alt="" width="23px" height="23px"></div>
                            <div id="screen3-1-1-2-2"><img
                                    src="${mainRunesImg[1]}"
                                    alt="" width="23px" height="23px"></div>
                            <div id="screen3-1-1-2-3"><img
                                    src="${summoner2IdsImg[1]}"
                                    alt="" width="23px" height="23px"></div>
                            <div id="screen3-1-1-2-4"><img
                                    src="${subRunesImg[1]}"
                                    alt="" width="23px" height="23px"></div>
                        </div>
                    </div>

                    <div id="screen3-1-2">
                        <div id="screen3-1-2-1">${summonerNames[1]}</div>
                        <div id="screen3-1-2-2">${summonerTags[1]}</div>
                    </div>

                    <div id="screen3-1-3">
                        <div id="screen3-1-3-1">${kill[1]} / ${death[1]} / ${assist[1]} </div>
                        <div id="screen3-1-3-2">${kda[1]} KDA</div>
                    </div>
                    <div id="screen3-1-4">
                        ${totalDamageDealtToChampions[1]}
                    </div>

                    <div id="screen3-1-5">
                        ${totalDamageTakens[1]}
                    </div>

                    <div id="screen3-1-6">
                        <span>${visionWardsBoughtInGame[1]}</span><br>
                        <span>${wardsPlaced[1]} / ${wardsKilled[1]}</span>
                        <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
                    </div>

                    <div id="screen3-1-7">
                        ${cs[1]}
                    </div>
                    <div id="screen3-1-8">
                        <div id="screen3-1-8-1"><img
                                src="${item0Img[1]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-2"><img
                                src="${item1Img[1]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-3"><img
                                src="${item2Img[1]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-4"><img
                                src="${item3Img[1]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-5"><img
                                src="${item4Img[1]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-6"><img
                                src="${item5Img[1]}" alt=""
                                width="23px" height="23px"></div>
                        <div id="screen3-1-8-7"><img
                                src="${item6Img[1]}" alt=""
                                width="23px" height="23px"></div>
                       
                    </div>
                </div>

                  <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[2]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[2]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[2]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[2]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[2]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[2]}</div>
            <div id="screen3-1-2-2">${summonerTags[2]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[2]} / ${death[2]}  / ${assist[2]}</div>
            <div id="screen3-1-3-2">${kda[2]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[2]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[2]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[2]}</span><br>
            <span>${wardsPlaced[2]} / ${wardsKilled[2]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>

        </div>

        <div id="screen3-1-7">
            ${cs[2]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[2]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[2]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[2]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[2]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[2]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[2]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[2]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>

                        <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[3]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[3]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[3]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[3]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[3]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[3]}</div>
            <div id="screen3-1-2-2">${summonerTags[3]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[3]} / ${death[3]} / ${assist[3]} </div>
            <div id="screen3-1-3-2">${kda[3]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[3]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[3]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[3]}</span><br>
            <span>${wardsPlaced[3]} / ${wardsKilled[3]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
        </div>

        <div id="screen3-1-7">
            ${cs[3]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[3]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[3]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[3]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[3]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[3]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[3]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[3]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>
                            <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[4]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[4]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[4]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[4]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[4]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[4]}</div>
            <div id="screen3-1-2-2">${summonerTags[4]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[4]} / ${death[4]} / ${assist[4]} </div>
            <div id="screen3-1-3-2">${kda[4]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[4]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[4]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[4]}</span><br>
            <span>${wardsPlaced[4]} / ${wardsKilled[4]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
        </div>

        <div id="screen3-1-7">
            ${cs[4]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[4]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[4]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[4]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[4]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[4]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[4]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[4]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>

<!-- ================================================================================================================================================================= -->

                                <div id="screen22" style="font-size: small; text-align: center; justify-content: center; ">
                                    <div id="screen2-1">패배</div>
                                    <div id="screen2-2">레드팀</div>
                                    <div id="screen2-3">KDA</div>
                                    <div id="screen2-4">가한피해량</div>
                                    <div id="screen2-5">받은피해량</div>
                                    <div id="screen2-6">와드</div>
                                    <div id="screen2-7">CS</div>
                                    <div id="screen2-8">아이템</div>
                                </div>

                               <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[5]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[5]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[5]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[5]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[5]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[5]}</div>
            <div id="screen3-1-2-2">${summonerTags[5]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[5]} / ${death[5]} / ${assist[5]} </div>
            <div id="screen3-1-3-2">${kda[5]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[5]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[5]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[5]}</span><br>
            <span>${wardsPlaced[5]} / ${wardsKilled[5]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
        </div>

        <div id="screen3-1-7">
            ${cs[5]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[5]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[5]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[5]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[5]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[5]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[5]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[5]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>

                                    <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[6]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[6]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[6]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[6]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[6]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[6]}</div>
            <div id="screen3-1-2-2">${summonerTags[6]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[6]} / ${death[6]} / ${assist[6]} </div>
            <div id="screen3-1-3-2">${kda[6]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[6]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[6]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[6]}</span><br>
            <span>${wardsPlaced[6]} / ${wardsKilled[6]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
        </div>

        <div id="screen3-1-7">
            ${cs[6]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[6]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[6]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[6]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[6]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[6]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[6]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[6]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>

                                        <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[7]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[7]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[7]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[7]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[7]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[7]}</div>
            <div id="screen3-1-2-2">${summonerTags[7]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[7]}/ ${death[7]} / ${assist[7]} </div>
            <div id="screen3-1-3-2">${kda[7]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[7]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[7]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[7]}</span><br>
            <span>${wardsPlaced[7]} / ${wardsKilled[7]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
        </div>

        <div id="screen3-1-7">
            ${cs[7]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[7]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[7]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[7]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[7]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[7]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[7]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[7]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>

                                            <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[8]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[8]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[8]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[8]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[8]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[8]}</div>
            <div id="screen3-1-2-2">${summonerTags[8]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[8]} / ${death[8]} / ${assist[8]}</div>
            <div id="screen3-1-3-2">${kda[8]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[8]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[8]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[8]}</span><br>
            <span>${wardsPlaced[8]} / ${wardsKilled[8]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
        </div>

        <div id="screen3-1-7">
            ${cs[8]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[8]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[8]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[8]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[8]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[8]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[8]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[8]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>

                                               <div id="screen3">
    <div id="screen3-1">
        <div id="screen3-1-1">
            <div id="screen3-1-1-1"><img
                    src="${championImgs[9]}" alt=""
                    width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
            <div id="screen3-1-1-2">
                <div id="screen3-1-1-2-1"><img
                        src="${summoner1IdsImg[9]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-2"><img
                        src="${mainRunesImg[9]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-3"><img
                        src="${summoner2IdsImg[9]}"
                        alt="" width="23px" height="23px"></div>
                <div id="screen3-1-1-2-4"><img
                        src="${subRunesImg[9]}"
                        alt="" width="23px" height="23px"></div>
            </div>
        </div>

        <div id="screen3-1-2">
            <div id="screen3-1-2-1">${summonerNames[9]}</div>
            <div id="screen3-1-2-2">${summonerTags[9]}</div>
        </div>

        <div id="screen3-1-3">
            <div id="screen3-1-3-1">${kill[9]} / ${death[9]} / ${assist[9]} </div>
            <div id="screen3-1-3-2">${kda[9]} KDA</div>
        </div>
        <div id="screen3-1-4">
            ${totalDamageDealtToChampions[9]}
        </div>

        <div id="screen3-1-5">
            ${totalDamageTakens[9]}
        </div>

        <div id="screen3-1-6">
            <span>${visionWardsBoughtInGame[9]}</span><br>
            <span>${wardsPlaced[9]} / ${wardsKilled[9]}</span>
            <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
        </div>

        <div id="screen3-1-7">
            ${cs[9]}
        </div>
        <div id="screen3-1-8">
            <div id="screen3-1-8-1"><img
                    src="${item0Img[9]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-2"><img
                    src="${item1Img[9]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-3"><img
                    src="${item2Img[9]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-4"><img
                    src="${item3Img[9]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-5"><img
                    src="${item4Img[9]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-6"><img
                    src="${item5Img[9]}" alt=""
                    width="23px" height="23px"></div>
            <div id="screen3-1-8-7"><img
                    src="${item6Img[9]}" alt=""
                    width="23px" height="23px"></div>
           
        </div>
    </div>

                                                </div>

                                            </div>
                                            
`)

				if (win == '승리') {
					$('#background' + l).css({
						'background-color': '#6699cc',
						'width': '800px',
						'height': '100px',
						'padding': '10px',
						'margin-bottom': '5px'
					});
				} else {
					$('#background' + l).css({
						'background-color': '#ff3c38',
						'width': '800px',
						'height': '100px',
						'padding': '10px',
						'margin-bottom': '5px'
					});
				}

				value1 = blueGold[9]
				value2 = redGold[9]
				aa = `<div class="goldProgress-bar${l}">
						<div class="total-gold-label">
						${value1}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						Total&nbspGold
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						${value2}
						</div>
					<div class="goldProgress${l}"></div>
					</div>`
				$('#screen1-2-1' + l).append(aa)


				total = parseInt(value1) + parseInt(value2)

				var percentage1 = Math.round((parseInt(value1) / total) * 100 * 100) / 100;
				var percentage2 = Math.round((parseInt(value2) / total) * 100 * 100) / 100;  // 10명

				$('.goldProgress-bar' + l).css({
					"height": "16px",
					"width": "300px",
					"background-color": "#ff0000",
					"font-weight": "600",
					"font-size": ".8rem",
					"position": "relative"
				})

				$('.goldProgress' + l).css({
					"height": "16px",
					"width": percentage1 + '%',
					"padding": "0",
					"text-align": "center",
					"background-color": "#4f98ff",
					"font-weight": "600",
					"color": "#111",
					"position": "relative"


				})

				$('.total-gold-label' + l).css({
					"position": "absolute",
					"top": '0',
					"left": "0",


				})

				///////////////////////////////////////////////////////

				value11 = blueKill[9]
				value22 = redKill[9]
				aa = `<div class="goldProgress-bar${l}">
						<div class="total-kill-label">
						${value11}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						Total&nbspKill
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						${value22}
						</div>
					<div class="killProgress${l}"></div>
					</div>`
				$('#screen1-2-2' + l).append(aa)


				total = parseInt(value11) + parseInt(value22)

				var percentage11 = Math.round((parseInt(value11) / total) * 100 * 100) / 100;
				var percentage22 = Math.round((parseInt(value22) / total) * 100 * 100) / 100;  // 10명

				$('.goldProgress-bar' + l).css({
					"height": "16px",
					"width": "300px",
					"background-color": "#ff0000",
					"font-weight": "600",
					"font-size": ".8rem",
					"position": "relative"
				})

				$('.killProgress' + l).css({
					"height": "16px",
					"width": percentage11 + '%',
					"padding": "0",
					"text-align": "center",
					"background-color": "#4f98ff",
					"font-weight": "600",
					"color": "#111",
					"position": "relative"


				})

				$('.total-gold-label' + l).css({
					"position": "absolute",
					"top": '0',
					"left": "0",


				})
			} //for문 전적검색 수	

			let resulttt = champList.map((item, index) => [item, winLoss[index]]);


			let resultt = resulttt.reduce((acc, cur) => {
				let [champion, winLose] = cur;
				if (acc.hasOwnProperty(champion)) {
					acc[champion].wins = winLose === 'True' ? acc[champion].wins + 1 : acc[champion].wins;
					acc[champion].losses = winLose === 'False' ? acc[champion].losses + 1 : acc[champion].losses;
					acc[champion].winRate = (acc[champion].wins / (acc[champion].wins + acc[champion].losses)) * 100;
				} else {
					acc[champion] = { wins: winLose === 'True' ? 1 : 0, losses: winLose === 'False' ? 1 : 0, winRate: winLose === 'False' ? 0 : 100 };
				}
				return acc;
			}, {});

			let keys = Object.keys(resultt);

			for (var m = 0; m < keys.length; m++) {
				var champImgg = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/"
					+ champList[m] + ".png";

				let objectToString1 = JSON.stringify(resultt[champList[m]].wins);
				let objectToString2 = JSON.stringify(resultt[champList[m]].losses);
				let objectToString3 = Math.round(JSON.stringify(resultt[champList[m]].winRate));


				$('#chart').append(`
			<div class="champion1">
				<div class="champion1Img"><img src="${champImgg}" alt=""  width="52px" height="52px"></div>
				<div class="champion1Stat">${objectToString1}승  ${objectToString2}패, 승률: ${objectToString3}%</div>
			</div>
			
			`)
			}

			let winResult = winLoss.reduce((acc, cur) => {
				if (acc.hasOwnProperty(cur)) {
					acc[cur]++;
				} else {
					acc[cur] = 1;
				}
				return acc;
			}, {});
			let winTostring = winResult.True ? parseInt(JSON.stringify(winResult.True)) : 0;
			let lossTostring = winResult.False ? parseInt(JSON.stringify(winResult.False)) : 0;
			let win_rating = Math.round((winTostring / (winTostring + lossTostring) * 100))



			$('#winrate').append(`
			<div class="winChart">
		<div class="winChart-bar" data-deg="20%"></div>
	</div>
			`)

			$('#winrate_title').append(`
				<span style="padding-left: 20%;">${winTostring + lossTostring}전 ${winTostring}승${lossTostring}패</span>
			`)


			$('.winChart-bar').css({
				"background": "conic-gradient(#8ab4f8 " + win_rating + "%, #ff3c38 0%)"
			})

			$('#pcentage').append(`
				<span">${win_rating}%</span>
			`)

			var topPickPcentage = (((topPick / totalPick) * 100) + "%")
			var jgPickkPcentage = (((jgPick / totalPick) * 100) + "%")
			var midPickPcentage = (((midPick / totalPick) * 100) + "%")
			var botPickPcentage = (((botPick / totalPick) * 100) + "%")
			var supPickkPcentage = (((supPick / totalPick) * 100) + "%")

			$('.topPick').css({
				"height": topPickPcentage
			})
			$('.jgPick').css({
				"height": jgPickkPcentage
			})
			$('.midPick').css({
				"height": midPickPcentage
			})
			$('.botPick').css({
				"height": botPickPcentage
			})
			$('.supPick').css({
				"height": supPickkPcentage
			})


			let counts = champList.reduce((map, item) => {
				map[item] = (map[item] || 0) + 1;
				return map;
			}, {});
			let mostFrequent = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

			$('#mostPlay').append(`
				<img src="https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${mostFrequent}.png" alt="">
			`)



			if (I_tier == "unranked") {
				$('#tierImg').append(`
				<span> unranked </span>
			`)

			} else {
				$('#tierImg').append(`
				<img src="https://opgg-static.akamaized.net/images/medals_new/${I_tier}.png?image=q_auto,f_png,w_144&v=1708681571653" alt="" width="100px" height="100px">
				`)

				$('#tier').append(`
				<span>${I_tier + " " + I_rank} </span>
				`)

				$('#point').append(`
				<span>${I_point} LP</span>
				`)
			}
			closeLoadingWithMask()


		},
		error: function(result) {
			console.log(result);
			alert('없는 소환사입니다.');
			window.location.href = "/main";

		}

	});

});



function submitForm() {
	var params = new URLSearchParams(window.location.search);
	var name = params.get('name');
	var tag = params.get('tag');
	start += 2;
	LoadingWithMask()

	// AJAX 요청 실행
	$.ajax({
		type: "GET",
		//url: "http://127.0.0.1:8000/summoner/search",
		url: "http://192.168.1.27:8000/summoner/search",

		data: {
			name: name,
			tag: tag,
			start: start
		},
		success: function(result) {
			name = params.get('name');
			console.log(result);
			$("#chart").empty();
			$("#winrate_title").empty();
			$('#pcentage').empty();
			$('#mostPlay').empty();

			for (var l = 0; l < result.total_Data_list.length; l++) {
				var championNames = []
				var championImgs = []
				var summonerNames = []
				var summonerTags = []
				var mainRunes = []
				var subRunes = []
				var mainRunesImg = []
				var subRunesImg = []
				var summoner1Ids = []
				var summoner2Ids = []
				var summoner1IdsImg = []
				var summoner2IdsImg = []
				var kill = []
				var assist = []
				var death = []
				var kda = []
				var totalDamageDealtToChampions = []
				var totalDamageTakens = []
				var visionWardsBoughtInGame = []
				var wardsPlaced = []
				var wardsKilled = []
				var cs = []
				var item0 = []
				var item1 = []
				var item2 = []
				var item3 = []
				var item4 = []
				var item5 = []
				var item6 = []

				var item0Img = []
				var item1Img = []
				var item2Img = []
				var item3Img = []
				var item4Img = []
				var item5Img = []
				var item6Img = []

				var playtime = []

				var baron = []
				var dragon = []
				var horde = []
				var riftHerald = []
				var tower = []

				var blueGold = []
				var redGold = []

				var blueKill = []
				var redKill = []

				for (var i = 0; i < 10; i++) {
					championNames.push(JSON.stringify(result.total_Data_list[l][i].championName).slice(1, -1));
					championImgs.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/" + championNames[i] + ".png");

					summonerNames.push(JSON.stringify(result.total_Data_list[l][i].summonerName).slice(1, -1));
					summonerTags.push(JSON.stringify(result.total_Data_list[l][i].riotIdTagline).slice(1, -1));

					mainRunes.push(JSON.stringify(result.total_Data_list[l][i].mainRune))
					subRunes.push(JSON.stringify(result.total_Data_list[l][i].subRune))

					mainRunesImg.push("https://cdn.lol.ps/assets/img/runes/" + mainRunes[i] + "_40.webp");
					subRunesImg.push("https://cdn.lol.ps/assets/img/runes/" + subRunes[i] + "_40.webp");

					summoner1Ids.push(JSON.stringify(result.total_Data_list[l][i].summoner1Id).slice(1, -1));
					summoner2Ids.push(JSON.stringify(result.total_Data_list[l][i].summoner2Id).slice(1, -1));

					summoner1IdsImg.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + summoner1Ids[i] + ".png");
					summoner2IdsImg.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + summoner2Ids[i] + ".png");

					kill.push(JSON.stringify(result.total_Data_list[l][i].kills))
					assist.push(JSON.stringify(result.total_Data_list[l][i].assists))
					death.push(JSON.stringify(result.total_Data_list[l][i].deaths))
					kda.push(JSON.stringify(result.total_Data_list[l][i].kda))

					totalDamageDealtToChampions.push(JSON.stringify(result.total_Data_list[l][i].totalDamageDealtToChampions))
					totalDamageTakens.push(JSON.stringify(result.total_Data_list[l][i].totalDamageTaken))

					visionWardsBoughtInGame.push(JSON.stringify(result.total_Data_list[l][i].visionWardsBoughtInGame))
					wardsPlaced.push(JSON.stringify(result.total_Data_list[l][i].wardsPlaced))
					wardsKilled.push(JSON.stringify(result.total_Data_list[l][i].wardsKilled))

					cs.push(JSON.stringify(result.total_Data_list[l][i].cs))

					item0.push(JSON.stringify(result.total_Data_list[l][i].item0));
					item1.push(JSON.stringify(result.total_Data_list[l][i].item1));
					item2.push(JSON.stringify(result.total_Data_list[l][i].item2));
					item3.push(JSON.stringify(result.total_Data_list[l][i].item3));
					item4.push(JSON.stringify(result.total_Data_list[l][i].item4));
					item5.push(JSON.stringify(result.total_Data_list[l][i].item5));
					item6.push(JSON.stringify(result.total_Data_list[l][i].item6));

					playtime.push(JSON.stringify(result.total_Data_list[l][i].playtime).slice(1, -1))

					baron.push(JSON.stringify(result.total_Data_list[l][i].baron))
					dragon.push(JSON.stringify(result.total_Data_list[l][i].dragon))
					tower.push(JSON.stringify(result.total_Data_list[l][i].tower))
					horde.push(JSON.stringify(result.total_Data_list[l][i].horde))
					riftHerald.push(JSON.stringify(result.total_Data_list[l][i].riftHerald))

					blueGold.push(JSON.stringify(result.total_Data_list[l][i].blueGold))
					redGold.push(JSON.stringify(result.total_Data_list[l][i].redGold))

					blueKill.push(JSON.stringify(result.total_Data_list[l][i].blueKill))
					redKill.push(JSON.stringify(result.total_Data_list[l][i].redKill))



					if (item0[i] != 0) {
						item0Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item0[i] + ".png");
					} else {
						item0Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item1[i] != 0) {
						item1Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item1[i] + ".png");
					} else {
						item1Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item2[i] != 0) {
						item2Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item2[i] + ".png");
					} else {
						item2Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item3[i] != 0) {
						item3Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item3[i] + ".png");
					} else {
						item3Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item4[i] != 0) {
						item4Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item4[i] + ".png");
					} else {
						item4Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item5[i] != 0) {
						item5Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item5[i] + ".png");
					} else {
						item5Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}

					if (item6[i] != 0) {
						item6Img.push("https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" + item6[i] + ".png");
					} else {
						item6Img.push("https://www.htmlcsscolor.com/preview/gallery/4040B7.png");
					}



					if (name == result.total_Data_list[l][i].summonerName) {
						if (JSON.stringify(result.total_Data_list[l][i].win).slice(1, -1) ==
							"True") {
							var win = '승리';
						} else {
							var win = '패배';
						}
						var I_summonerLevel = JSON.stringify(result.total_Data_list[l][i].champLevel)
						var I_summonerName = JSON.stringify(result.total_Data_list[l][i].summonerName).slice(1, -1);
						var I_championName = JSON.stringify(result.total_Data_list[l][i].championName).slice(1, -1);
						var I_champImg = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/" + I_championName + ".png";

						var I_mainRune = JSON.stringify(result.total_Data_list[l][i].mainRune);
						var I_subRune = JSON.stringify(result.total_Data_list[l][i].subRune);

						var I_mainRuneImg = "https://cdn.lol.ps/assets/img/runes/" +
							I_mainRune + "_40.webp";
						var I_subRuneImg = "https://cdn.lol.ps/assets/img/runes/" +
							I_subRune + "_40.webp";

						var I_kill = JSON.stringify(result.total_Data_list[l][i].kills);
						var I_assist = JSON.stringify(result.total_Data_list[l][i].assists);
						var I_death = JSON.stringify(result.total_Data_list[l][i].deaths);
						var I_kda = JSON.stringify(result.total_Data_list[l][i].kda);

						var I_item0 = JSON.stringify(result.total_Data_list[l][i].item0);
						var I_item1 = JSON.stringify(result.total_Data_list[l][i].item1);
						var I_item2 = JSON.stringify(result.total_Data_list[l][i].item2);
						var I_item3 = JSON.stringify(result.total_Data_list[l][i].item3);
						var I_item4 = JSON.stringify(result.total_Data_list[l][i].item4);
						var I_item5 = JSON.stringify(result.total_Data_list[l][i].item5);
						var I_item6 = JSON.stringify(result.total_Data_list[l][i].item6);

						var I_item0Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item0 + ".png";
						var I_item1Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item1 + ".png";
						var I_item2Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item2 + ".png";
						var I_item3Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item3 + ".png";
						var I_item4Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item4 + ".png";
						var I_item5Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item5 + ".png";
						var I_item6Img = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/item/" +
							I_item6 + ".png";

						var I_champLevel = JSON.stringify(result.total_Data_list[l][i].champLevel);

						var I_summoner1Id = JSON.stringify(result.total_Data_list[l][i].summoner1Id).slice(1, -1);
						var I_summoner2Id = JSON.stringify(result.total_Data_list[l][i].summoner2Id).slice(1, -1);
						var I_summoner1IdImg =
							"https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + I_summoner1Id + ".png";
						var I_summoner2IdImg =
							"https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/" + I_summoner2Id + ".png";


						var I_visionWards = JSON.stringify(result.total_Data_list[l][i].visionWardsBoughtInGame);
						var I_totalGold = JSON.stringify(result.total_Data_list[l][i].totalGold);

						champList.push(JSON.stringify(result.total_Data_list[l][i].championName).slice(1, -1));
						winLoss.push(JSON.stringify(result.total_Data_list[l][i].win).slice(1, -1));

						var I_position = JSON.stringify(result.total_Data_list[l][i].teamPosition).slice(1, -1);

						if (I_position === "TOP") {
							topPick++;
						} else if (I_position === "JUNGLE") {
							jgPick++;
						} else if (I_position === "MIDDLE") {
							midPick++;
						} else if (I_position === "BOTTOM") {
							botPick++;
						} else if (I_position === "UTILITY") {
							supPick++;
						}
						var totalPick = topPick + jgPick + midPick + botPick + supPick
						var I_history = JSON.stringify(result.total_Data_list[l][i].history).slice(1, -1);


					} //검색한 소환사 확인


				}
				// 10명



				$("#123").append(`
    <table>
    <div id="background${(l + start)}">
       <div id="background_padding">
           <div id="win">
               <span>${win}</span><br><br>
               <span>${playtime[0]}</span><br>
               <span>${I_history}</span>
           </div>

           <div id="champion_info">
               <div id="champ_img">
                   <img id="champImg" src="${I_champImg}" alt="" width="60px">
               </div>

               <div id="k_d_a">
                   ${I_kill} / ${I_death} / ${I_assist}
                   <div id="kda">
                       ${I_kda} KDA
                   </div>
               </div>

               <div id="rune_spell">
                   <div id="q" class="spell_1"><img src="${I_summoner1IdImg}" alt="" width="30px"></div>
                   <div id="q" class="rune_1"><img src="${I_mainRuneImg}" alt="" width="30px"></div>
                   <div id="q" class="spell_2"><img src="${I_summoner2IdImg}" alt="" width="30px"></div>
                   <div id="q" class="rune_2"><img src="${I_subRuneImg}" alt="" width="30px"></div>
               </div>
               <div id="item" class="item">
                   <div id="w" class="item0"><img src="${I_item0Img}" alt="" width="30px"></div>
                   <div id="w" class="item1"><img src="${I_item1Img}" alt="" width="30px"></div>
                   <div id="w" class="item2"><img src="${I_item2Img}" alt="" width="30px"></div>
                   <div id="w" class="item3"><img src="${I_item3Img}" alt="" width="30px"></div>
                   <div id="w" class="item4"><img src="${I_item4Img}" alt="" width="30px"></div>
                   <div id="w" class="item5"><img src="${I_item5Img}" alt="" width="30px"></div>
                   <div id="w" class="item6"><img src="${I_item6Img}" alt="" width="30px"></div>
               </div>
           </div>
           <div id="list2">
               <span>레벨: ${I_summonerLevel}</span><br><br>
               <span>제어와드 설치: ${I_visionWards}</span><br><br>
               <span>총 골드: ${I_totalGold}</span>
           </div>
           
           <div id="user">
               <div id="blue">
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[0]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[0]}#${summonerTags[0]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[1]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[1]}#${summonerTags[1]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[2]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[2]}#${summonerTags[2]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[3]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[3]}#${summonerTags[3]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[4]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[4]}#${summonerTags[4]}</div>
                   </div>
               </div>
               
               <div id="blue">
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[5]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[5]}#${summonerTags[5]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[6]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[6]}#${summonerTags[6]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[7]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[7]}#${summonerTags[7]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[8]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[8]}#${summonerTags[8]}</div>
                   </div>
                   <div id="blueId">
                       <div id="blueImg"><img src="${championImgs[9]}" alt="" width="19px"></div>
                       <div id="blueUser">${summonerNames[9]}#${summonerTags[9]}</div>
                   </div>
               
               </div>

           </div>
           <div id="more">
               <input class="more" id="hideButton${l + start}" type="button"  value="자세히" style="font-size: 8px;" onclick="sibla(${l + start}) ">
           </div>
       </div>
   </div>
               </table>
   <div id="hidden-table${l + start}" style="display: none;">
    <div id="fullscreen">
       <div id="screen1" class="top">
           <div id="screen1-1" class="top_left">
               <div id="screen1-1-1">
               <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/vilemaw-100.png" alt="" width="25px" height="25px"></div>
               <div id="screen1-1-2">${horde[0]}</div>
               <div id="screen1-1-3">
               <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/baron-100.png" alt="" width="25px" height="25px"></div>
               <div id="screen1-1-4">${baron[0]}</div>
               <div id="screen1-1-5">
               <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/herald-100.png" alt="" width="25px" height="25px"></div>
               <div id="screen1-1-6">${riftHerald[0]}</div>
               <div id="screen1-1-7">
               <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/dragon-100.png" alt="" width="25px" height="25px"></div>
               <div id="screen1-1-8">${dragon[0]}</div>
               <div id="screen1-1-9">
               <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/tower-100.png" alt="" width="25px" height="25px"></div>
               <div id="screen1-1-10">${tower[0]}</div>
           </div>
           <div id="screen1-2" class="top_mid">
               <div id="screen1-2-1${l + start}"></div>
               <div id="screen1-2-2${l + start}"></div>
           </div>
           <div id="screen1-3-1">
   <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/vilemaw-200.png" alt="" width="25px" height="25px"></div>
   <div id="screen1-3-2">${horde[5]}</div>
   <div id="screen1-3-3">
   <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/baron-200.png" alt="" width="25px" height="25px"></div>
   <div id="screen1-3-4">${baron[5]}</div>
   <div id="screen1-3-5">
   <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/herald-200.png" alt="" width="25px" height="25px"></div>
   <div id="screen1-3-6">${riftHerald[5]}</div>
   <div id="screen1-3-7">
   <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/dragon-200.png" alt="" width="25px" height="25px"></div>
   <div id="screen1-3-8">${dragon[5]}</div>
   <div id="screen1-3-9">
   <img src="https://raw.communitydragon.org/t/latest/plugins/rcp-fe-lol-match-history/global/default/tower-200.png" alt="" width="25px" height="25px"></div>
   <div id="screen1-3-10">${tower[5]}</div>

           <div id="screen2" style="font-size: small; text-align: center; justify-content: center; ">
               <div id="screen2-1">승리</div>
               <div id="screen2-2">블루팀</div>
               <div id="screen2-3">KDA</div>
               <div id="screen2-4">가한피해량</div>
               <div id="screen2-5">받은피해량</div>
               <div id="screen2-6">와드</div>
               <div id="screen2-7">CS</div>
               <div id="screen2-8">아이템</div>
           </div>
           <div id="screen3">
               <div id="screen3-1">
                   <div id="screen3-1-1">
                       <div id="screen3-1-1-1"><img
                               src="${championImgs[0]}" alt=""
                               width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
                       <div id="screen3-1-1-2">
                           <div id="screen3-1-1-2-1"><img
                                   src="${summoner1IdsImg[0]}"
                                   alt="" width="23px" height="23px"></div>
                           <div id="screen3-1-1-2-2"><img
                                   src="${mainRunesImg[0]}"
                                   alt="" width="23px" height="23px"></div>
                           <div id="screen3-1-1-2-3"><img
                                   src="${summoner2IdsImg[0]}"
                                   alt="" width="23px" height="23px"></div>
                           <div id="screen3-1-1-2-4"><img
                                   src="${subRunesImg[0]}"
                                   alt="" width="23px" height="23px"></div>
                       </div>
                   </div>

                   <div id="screen3-1-2">
                       <div id="screen3-1-2-1">${summonerNames[0]}</div>
                       <div id="screen3-1-2-2">${summonerTags[0]}</div>
                   </div>

                   <div id="screen3-1-3">
                       <div id="screen3-1-3-1">${kill[0]} / ${death[0]} / ${assist[0]} </div>
                       <div id="screen3-1-3-2">${kda[0]} KDA</div>
                   </div>
                   <div id="screen3-1-4">
                       ${totalDamageDealtToChampions[0]}
                   </div>

                   <div id="screen3-1-5">
                       ${totalDamageTakens[0]}
                   </div>

                   <div id="screen3-1-6">
                       <span>${visionWardsBoughtInGame[0]}</span><br>
                       <span>${wardsPlaced[0]} / ${wardsKilled[0]}</span>
                       <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
                   </div>

                   <div id="screen3-1-7">
                       ${cs[0]}
                   </div>
                   <div id="screen3-1-8">
                       <div id="screen3-1-8-1"><img
                               src="${item0Img[0]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-2"><img
                               src="${item1Img[0]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-3"><img
                               src="${item2Img[0]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-4"><img
                               src="${item3Img[0]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-5"><img
                               src="${item4Img[0]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-6"><img
                               src="${item5Img[0]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-7"><img
                               src="${item6Img[0]}" alt=""
                               width="23px" height="23px"></div>
                      
                   </div>
               </div>
               <div id="screen3">
               <div id="screen3-1">
                   <div id="screen3-1-1">
                       <div id="screen3-1-1-1"><img
                               src="${championImgs[1]}" alt=""
                               width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
                       <div id="screen3-1-1-2">
                           <div id="screen3-1-1-2-1"><img
                                   src="${summoner1IdsImg[1]}"
                                   alt="" width="23px" height="23px"></div>
                           <div id="screen3-1-1-2-2"><img
                                   src="${mainRunesImg[1]}"
                                   alt="" width="23px" height="23px"></div>
                           <div id="screen3-1-1-2-3"><img
                                   src="${summoner2IdsImg[1]}"
                                   alt="" width="23px" height="23px"></div>
                           <div id="screen3-1-1-2-4"><img
                                   src="${subRunesImg[1]}"
                                   alt="" width="23px" height="23px"></div>
                       </div>
                   </div>

                   <div id="screen3-1-2">
                       <div id="screen3-1-2-1">${summonerNames[1]}</div>
                       <div id="screen3-1-2-2">${summonerTags[1]}</div>
                   </div>

                   <div id="screen3-1-3">
                       <div id="screen3-1-3-1">${kill[1]} / ${death[1]}  / ${assist[1]}</div>
                       <div id="screen3-1-3-2">${kda[1]} KDA</div>
                   </div>
                   <div id="screen3-1-4">
                       ${totalDamageDealtToChampions[1]}
                   </div>

                   <div id="screen3-1-5">
                       ${totalDamageTakens[1]}
                   </div>

                   <div id="screen3-1-6">
                       <span>${visionWardsBoughtInGame[1]}</span><br>
                       <span>${wardsPlaced[1]} / ${wardsKilled[1]}</span>
                       <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
                   </div>

                   <div id="screen3-1-7">
                       ${cs[1]}
                   </div>
                   <div id="screen3-1-8">
                       <div id="screen3-1-8-1"><img
                               src="${item0Img[1]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-2"><img
                               src="${item1Img[1]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-3"><img
                               src="${item2Img[1]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-4"><img
                               src="${item3Img[1]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-5"><img
                               src="${item4Img[1]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-6"><img
                               src="${item5Img[1]}" alt=""
                               width="23px" height="23px"></div>
                       <div id="screen3-1-8-7"><img
                               src="${item6Img[1]}" alt=""
                               width="23px" height="23px"></div>
                      
                   </div>
               </div>

                 <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[2]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[2]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[2]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[2]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[2]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[2]}</div>
           <div id="screen3-1-2-2">${summonerTags[2]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[2]} / ${death[2]} / ${assist[2]} </div>
           <div id="screen3-1-3-2">${kda[2]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[2]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[2]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[2]}</span><br>
           <span>${wardsPlaced[2]} / ${wardsKilled[2]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[2]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[2]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[2]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[2]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[2]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[2]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[2]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[2]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>

                       <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[3]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[3]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[3]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[3]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[3]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[3]}</div>
           <div id="screen3-1-2-2">${summonerTags[3]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[3]} / ${death[3]} / ${assist[3]} </div>
           <div id="screen3-1-3-2">${kda[3]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[3]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[3]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[3]}</span><br>
           <span>${wardsPlaced[3]} / ${wardsKilled[3]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[3]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[3]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[3]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[3]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[3]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[3]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[3]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[3]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>
                           <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[4]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[4]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[4]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[4]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[4]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[4]}</div>
           <div id="screen3-1-2-2">${summonerTags[4]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[4]} / ${death[4]} / ${assist[4]} </div>
           <div id="screen3-1-3-2">${kda[4]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[4]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[4]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[4]}</span><br>
           <span>${wardsPlaced[4]} / ${wardsKilled[4]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[4]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[4]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[4]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[4]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[4]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[4]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[4]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[4]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>

<!-- ================================================================================================================================================================= -->

                               <div id="screen22" style="font-size: small; text-align: center; justify-content: center; ">
                                   <div id="screen2-1">패배</div>
                                   <div id="screen2-2">레드팀</div>
                                   <div id="screen2-3">KDA</div>
                                   <div id="screen2-4">가한피해량</div>
                                   <div id="screen2-5">받은피해량</div>
                                   <div id="screen2-6">와드</div>
                                   <div id="screen2-7">CS</div>
                                   <div id="screen2-8">아이템</div>
                               </div>

                              <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[5]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[5]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[5]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[5]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[5]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[5]}</div>
           <div id="screen3-1-2-2">${summonerTags[5]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[5]} / ${death[5]} / ${assist[5]} </div>
           <div id="screen3-1-3-2">${kda[5]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[5]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[5]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[5]}</span><br>
           <span>${wardsPlaced[5]} / ${wardsKilled[5]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[5]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[5]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[5]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[5]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[5]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[5]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[5]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[5]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>

                                   <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[6]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[6]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[6]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[6]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[6]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[6]}</div>
           <div id="screen3-1-2-2">${summonerTags[6]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[6]} / ${death[6]} / ${assist[6]} </div>
           <div id="screen3-1-3-2">${kda[6]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[6]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[6]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[6]}</span><br>
           <span>${wardsPlaced[6]} / ${wardsKilled[6]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[6]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[6]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[6]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[6]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[6]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[6]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[6]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[6]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>

                                       <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[7]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[7]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[7]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[7]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[7]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[7]}</div>
           <div id="screen3-1-2-2">${summonerTags[7]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[7]} / ${death[7]} / ${assist[7]} </div>
           <div id="screen3-1-3-2">${kda[7]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[7]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[7]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[7]}</span><br>
           <span>${wardsPlaced[7]} / ${wardsKilled[7]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[7]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[7]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[7]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[7]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[7]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[7]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[7]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[7]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>

                                           <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[8]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[8]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[8]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[8]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[8]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[8]}</div>
           <div id="screen3-1-2-2">${summonerTags[8]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[8]} / ${death[8]} / ${assist[8]} </div>
           <div id="screen3-1-3-2">${kda[8]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[8]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[8]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[8]}</span><br>
           <span>${wardsPlaced[8]} / ${wardsKilled[8]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[8]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[8]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[8]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[8]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[8]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[8]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[8]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[8]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>

                                              <div id="screen3">
   <div id="screen3-1">
       <div id="screen3-1-1">
           <div id="screen3-1-1-1"><img
                   src="${championImgs[9]}" alt=""
                   width="40px" height="40px" style="flex-direction: column; margin: 5px;"></div>
           <div id="screen3-1-1-2">
               <div id="screen3-1-1-2-1"><img
                       src="${summoner1IdsImg[9]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-2"><img
                       src="${mainRunesImg[9]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-3"><img
                       src="${summoner2IdsImg[9]}"
                       alt="" width="23px" height="23px"></div>
               <div id="screen3-1-1-2-4"><img
                       src="${subRunesImg[9]}"
                       alt="" width="23px" height="23px"></div>
           </div>
       </div>

       <div id="screen3-1-2">
           <div id="screen3-1-2-1">${summonerNames[9]}</div>
           <div id="screen3-1-2-2">${summonerTags[9]}</div>
       </div>

       <div id="screen3-1-3">
           <div id="screen3-1-3-1">${kill[9]} / ${death[9]} / ${assist[9]} </div>
           <div id="screen3-1-3-2">${kda[9]} KDA</div>
       </div>
       <div id="screen3-1-4">
           ${totalDamageDealtToChampions[9]}
       </div>

       <div id="screen3-1-5">
           ${totalDamageTakens[9]}
       </div>

       <div id="screen3-1-6">
           <span>${visionWardsBoughtInGame[9]}</span><br>
           <span>${wardsPlaced[9]} / ${wardsKilled[9]}</span>
           <span class="tooltip-text">제어와드<br>와드설치/와드제거</span>
       </div>

       <div id="screen3-1-7">
           ${cs[9]}
       </div>
       <div id="screen3-1-8">
           <div id="screen3-1-8-1"><img
                   src="${item0Img[9]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-2"><img
                   src="${item1Img[9]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-3"><img
                   src="${item2Img[9]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-4"><img
                   src="${item3Img[9]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-5"><img
                   src="${item4Img[9]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-6"><img
                   src="${item5Img[9]}" alt=""
                   width="23px" height="23px"></div>
           <div id="screen3-1-8-7"><img
                   src="${item6Img[9]}" alt=""
                   width="23px" height="23px"></div>
          
       </div>
   </div>


                                               </div>

                                           </div>
                                            
				`)
				if (win == '승리') {
					$('#background' + (l + start)).css({
						'background-color': '#6699cc',
						'width': '800px',
						'height': '100px',
						'padding': '10px',
						'margin-bottom': '5px'
					});
				} else {
					$('#background' + (l + start)).css({
						'background-color': '#ff3c38',
						'width': '800px',
						'height': '100px',
						'padding': '10px',
						'margin-bottom': '5px'
					});
				}

				value1 = blueGold[9]
				value2 = redGold[9]
				aa = `<div class="goldProgress-bar${(l + start)}">
						<div class="total-gold-label">
						${value1}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						Total&nbspGold
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						${value2}
						</div>
					<div class="goldProgress${(l + start)}"></div>
					</div>`
				$('#screen1-2-1' + (l + start)).append(aa)


				total = parseInt(value1) + parseInt(value2)

				var percentage1 = Math.round((parseInt(value1) / total) * 100 * 100) / 100;
				var percentage2 = Math.round((parseInt(value2) / total) * 100 * 100) / 100;  // 10명

				$('.goldProgress-bar' + (l + start)).css({
					"height": "16px",
					"width": "300px",
					"background-color": "#ff0000",
					"font-weight": "600",
					"font-size": ".8rem",
					"position": "relative"
				})

				$('.goldProgress' + (l + start)).css({
					"height": "16px",
					"width": percentage1 + '%',
					"padding": "0",
					"text-align": "center",
					"background-color": "#4f98ff",
					"font-weight": "600",
					"color": "#111",
					"position": "relative"


				})

				$('.total-gold-label' + (l + start)).css({
					"position": "absolute",
					"top": '0',
					"left": "0",


				})

				///////////////////////////////////////////////////////

				value11 = blueKill[9]
				value22 = redKill[9]
				aa = `<div class="goldProgress-bar${(l + start)}">
						<div class="total-kill-label">
						${value11}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						Total&nbspKill
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						${value22}
						</div>
					<div class="killProgress${(l + start)}"></div>
					</div>`
				$('#screen1-2-2' + (l + start)).append(aa)


				total = parseInt(value11) + parseInt(value22)

				var percentage11 = Math.round((parseInt(value11) / total) * 100 * 100) / 100;
				var percentage22 = Math.round((parseInt(value22) / total) * 100 * 100) / 100;  // 10명

				$('.goldProgress-bar' + (l + start)).css({
					"height": "16px",
					"width": "300px",
					"background-color": "#ff0000",
					"font-weight": "600",
					"font-size": ".8rem",
					"position": "relative"
				})

				$('.killProgress' + (l + start)).css({
					"height": "16px",
					"width": percentage11 + '%',
					"padding": "0",
					"text-align": "center",
					"background-color": "#4f98ff",
					"font-weight": "600",
					"color": "#111",
					"position": "relative"


				})

				$('.total-gold-label' + (l + start)).css({
					"position": "absolute",
					"top": '0',
					"left": "0",


				})

			} //for문 전적검색 수		
			let resulttt = champList.map((item, index) => [item, winLoss[index]]);

			let resultt = resulttt.reduce((acc, cur) => {
				let [champion, winLose] = cur;
				if (acc.hasOwnProperty(champion)) {
					acc[champion].wins = winLose === 'True' ? acc[champion].wins + 1 : acc[champion].wins;
					acc[champion].losses = winLose === 'False' ? acc[champion].losses + 1 : acc[champion].losses;
					acc[champion].winRate = (acc[champion].wins / (acc[champion].wins + acc[champion].losses)) * 100;
				} else {
					acc[champion] = { wins: winLose === 'True' ? 1 : 0, losses: winLose === 'False' ? 1 : 0, winRate: winLose === 'False' ? 0 : 100 };
				}
				return acc;
			}, {});

			let keys = Object.keys(resultt);



			for (var m = 0; m < keys.length; m++) {
				var champImgg = "https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/"
					+ keys[m] + ".png";

				let objectToString1 = JSON.stringify(resultt[keys[m]].wins);
				let objectToString2 = JSON.stringify(resultt[keys[m]].losses);
				let objectToString3 = Math.round(JSON.stringify(resultt[keys[m]].winRate));



				$('#chart').append(`
			<div class="champion1">
				<div class="champion1Img"><img src="${champImgg}" alt=""  width="52px" height="52px"></div>
				<div class="champion1Stat">${objectToString1}승  ${objectToString2}패, 승률: ${objectToString3}%</div>
			</div>
			
			`)
			}
			let winResult = winLoss.reduce((acc, cur) => {
				if (acc.hasOwnProperty(cur)) {
					acc[cur]++;
				} else {
					acc[cur] = 1;
				}
				return acc;
			}, {});
			let winTostring = winResult.True ? parseInt(JSON.stringify(winResult.True)) : 0;
			let lossTostring = winResult.False ? parseInt(JSON.stringify(winResult.False)) : 0;
			let win_rating = Math.round(winTostring / (winTostring + lossTostring) * 100)


			$('#winrate_title').append(`
				<span style="padding-left: 20%;">${winTostring + lossTostring}전 ${winTostring}승${lossTostring}패</span>
			`)


			$('.winChart-bar').css({
				"background": "conic-gradient(#8ab4f8 " + win_rating + "%, #ff3c38 0%)"
			})
			$('#pcentage').append(`
				<span">${win_rating}%</span>
			`)
			var topPickPcentage = (((topPick / totalPick) * 100) + "%")
			var jgPickkPcentage = (((jgPick / totalPick) * 100) + "%")
			var midPickPcentage = (((midPick / totalPick) * 100) + "%")
			var botPickPcentage = (((botPick / totalPick) * 100) + "%")
			var supPickkPcentage = (((supPick / totalPick) * 100) + "%")

			$('.topPick').css({
				"height": topPickPcentage
			})
			$('.jgPick').css({
				"height": jgPickkPcentage
			})
			$('.midPick').css({
				"height": midPickPcentage
			})
			$('.botPick').css({
				"height": botPickPcentage
			})
			$('.supPick').css({
				"height": supPickkPcentage
			})

			let counts = champList.reduce((map, item) => {
				map[item] = (map[item] || 0) + 1;
				return map;
			}, {});
			let mostFrequent = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
			$('#mostPlay').append(`
				<img src="https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${mostFrequent}.png" alt="">
			`)
			closeLoadingWithMask()

		}

	});

};
var total = l + start

function sibla(total) {
	var line1 = document.getElementById("hidden-table" + total);
	line1.style.display = ((line1.style.display != 'none') ? 'none' : 'block');

	var button = document.getElementById(`hideButton${total}`);
	var value = button.value;
	if (value === "자세히") {
		button.value = "간단히";
	} else {
		button.value = "자세히";
	}
}

function LoadingWithMask() {
	var maskHeight = $(document).height();
	var maskWidth = window.document.body.clientWidth;
	var mask = `
		"<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'>
		<div id='loadingImg'>
		<img src='https://tistory2.daumcdn.net/tistory/1898109/skin/images/Spinner.gif' alt='' 
		style=
		'position: absolute; 
		display: block; 
		margin: 0px auto; 
		width='900px' 
		right='300px'>
		</div>
		</div>";
	`

	$('body').append(mask)
	$('#mask').css({
		'width': maskWidth,
		'height': maskHeight,
		'justify-content': 'center',
		'opacity': '0.3'
	}); //마스크 표시   
	$('#loadingImg img').css({
		'position': 'fixed',
		'left': '900px',
		'top': '300px'
	}); //마스크 표시  
	$('#mask').show(); //로딩중 이미지 표시    

}

function closeLoadingWithMask() {
	$('#mask').hide();
	$('#mask').remove();
}
