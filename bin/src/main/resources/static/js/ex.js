$('input[name=aa]').on('change', function() {
	$.ajax({
		type: 'GET',
		url: '/test',  // 실제 서버 엔드포인트로 변경
		data: { line: $('input[name=aa]:checked').val() },   // 서버에 전달할 데이터
		success: function(champions) {
			if (champions.length != 0) {
				html = '<ul class="width100">'
				for (let i = 0; i < champions.length; i++) {
					html += '<li><a href="/ex/' + champions[i].champion_name + '">'
					html += '<img src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + champions[i].champion_name + '.png">'
					if(champions[i].champion_name_kr.length > 3){
						html += '<div class="set">'+champions[i].champion_name_kr.substring(0, 3) + '...'
					}else{
						html += '<div class="set">'+champions[i].champion_name_kr
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