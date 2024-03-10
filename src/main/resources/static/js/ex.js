$('input[name=aa]').on('change', function() {
	$.ajax({
		type: 'GET',
		url: '/tabKr',  // 실제 서버 엔드포인트로 변경
		data: { highest_pick_rate_position: $('input[name=aa]:checked').val() },   // 서버에 전달할 데이터
		success: function(champions) {
			if (champions.length != 0) {
				html = '<ul class="width100">'
				for (let i = 0; i < champions.length; i++) {
					html += '<li><a href="/ex/' + champions[i].championName + '/' + champions[i].highest_pick_rate_position + '">'
					html += '<img src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + champions[i].championName + '.png">'
					if (champions[i].championName_kr.length > 3) {
						html += '<div class="set">' + champions[i].championName_kr.substring(0, 3) + '...'
					} else {
						html += '<div class="set">' + champions[i].championName_kr
					}
					html += '</div></a></li>'
				}
				html += '</ul>'
				$('#tabKr').empty();
				$('#tabKr').append(html);
			}
		},
		error: function(error) {
			// 오류 발생 시 실행할 코드
			console.error('Error:', error);
		}
	});
});
// -------------------------------------------------------------------------------- //

$('input[name=aaa]').on('change', function() {
	$.ajax({
		type: 'GET',
		url: '/tabWin',
		data: { highest_pick_rate_position: $('input[name=aaa]:checked').val() },
		success: function(championList) {
			if (championList.length != 0) {
				var html = '';

				for (let i = 0; i < championList.length; i++) {
					html += '<tr>';
					html += '<td>' + (i + 1) + '</td>';
					html += '<td class="flex">';
					html += '<a href="/ex/' + championList[i].championName + '/' + championList[i].highest_pick_rate_position + '">';
					html += '<img src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + championList[i].championName + '.png" alt="초상화">';
					html += '<strong class="strong">' + championList[i].championName_kr + '</strong>';
					html += '</a>';
					html += '</td>';
					html += '<td>티어</td>';
					html += '<td>';
					// 이미지 소스를 동적으로 설정
					html += '<img src="' + getPositionImage(championList[i].highest_pick_rate_position) + '" style="width: 30px; height:30px">';
					html += '</td>';
					html += '<td>' + championList[i].winrate + '%</td>';
					html += '<td>' + championList[i].pickrate + '%</td>';
					html += '<td>' + championList[i].banrate + '%</td>';
					html += '<td>';
					html += '<div>';
					html += '<span>카운터</span>';
					html += '</div>';
					html += '</td>';
					html += '</tr>';
				}

				// 행을 추가할 때 한 번에 비워주고 추가합니다.
				$('#tabWin').empty().append(html);
			}
			console.log(championList)
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});
});

// 티어에 따른 이미지 소스 반환하는 함수
function getPositionImage(position) {
	switch (position) {
		case 'top':
			return '../img/position/Diamond-Top.png';
		case 'jungle':
			return '../img/position/Diamond-Jungle.png';
		case 'middle':
			return '../img/position/Diamond-Mid.png';
		case 'bottom':
			return '../img/position/Diamond-Bot.png';
		case 'UTILITY':
			return '../img/position/Diamond-Support.png';
		default:
			return ''; // 필요에 따라 기본값 설정
	}
}



// -------------------------------------------------------------------------------- //
$('#searchInput').on('input', function() {
	var searchText = $(this).val();

	$.ajax({
		type: 'GET',
		url: '/searchBar',  // 실제 서버 엔드포인트로 변경
		data: { searchText: searchText },
		success: function(champions) {
			updateChampionList(champions);
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});
});

// 검색창 이벤트 처리
$('#searchInput').on('input', function() {
	var searchText = $(this).val();

	$.ajax({
		type: 'GET',
		url: '/searchBar',  // 실제 서버 엔드포인트로 변경
		data: { searchText: searchText },
		success: function(champions) {
			updateChampionList(champions);
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});
});

// 챔피언 목록 업데이트 함수
function updateChampionList(champions) {
	if (champions.length != 0) {
		var html = ''; // 여기서 변수 초기화

		for (let i = 0; i < champions.length; i++) {
			html += '<li><a href="/ex/' + champions[i].championName + '/' + champions[i].highest_pick_rate_position + '">';
			html += '<img src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + champions[i].championName + '.png">';

			if (champions[i].championName_kr.length > 3) {
				html += '<div class="set">' + champions[i].championName_kr.substring(0, 3) + '...</div>';
			} else {
				html += '<div class="set">' + champions[i].championName_kr + '</div>';
			}

			html += '</a></li>';
		}

		$('#searchBar').empty().append(html);
	}
}
