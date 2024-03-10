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
