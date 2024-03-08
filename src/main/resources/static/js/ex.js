$('input[name=aa]').on('change', function() {
	$.ajax({
		type: 'GET',
		url: '/tabKr',  // 실제 서버 엔드포인트로 변경
		data: { line: $('input[name=aa]:checked').val() },   // 서버에 전달할 데이터
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
				$('#test').empty();
				$('#test').append(html);
			}
		},
		error: function(error) {
			// 오류 발생 시 실행할 코드
			console.error('Error:', error);
		}
	});
});

document.addEventListener("DOMContentLoaded", function() {
	// select 요소에서 현재 선택된 값을 가져옴
	const selectedValue = document.getElementById("dropDown").value;

	// URL에 파라미터를 추가하여 새로운 URL을 만듦
	const newUrl = updateQueryStringParameter(window.location.href, 'tier1', selectedValue);

	// 새로운 URL로 페이지를 리로드
	window.location.href = newUrl;
});

// URL에 파라미터를 추가 또는 업데이트하는 함수
function updateQueryStringParameter(uri, key, value) {
	const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	const separator = uri.indexOf('?') !== -1 ? "&" : "?";
	if (uri.match(re)) {
		return uri.replace(re, '$1' + key + "=" + value + '$2');
	} else {
		return uri + separator + key + "=" + value;
	}
}