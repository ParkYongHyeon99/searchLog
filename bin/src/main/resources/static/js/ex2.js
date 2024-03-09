$(() => {
	// 주어진 문자열
//	var str = window.location.href
	// '/'를 기준으로 문자열을 자르기
//	var parts = str.split('/');
//	parts.shift();
	var championName = $('#name').val()
	var highest_pick_rate_position = $('#position').val()

	$.ajax({
		type: 'GET',
		url: '/ex/mostLine',  // 실제 서버 엔드포인트로 변경
		data: { championName: championName },   // 서버에 전달할 데이터
		success: function(mostLine) {
			var container = document.getElementById('mostdiv');
			var arr = ['Top', 'Jungle', 'Middle', 'Bottom', 'UTILITY'];
			var arr2 = ['Top', 'Jungle', 'Mid', 'Bot', 'Support'];
			for (let i = 0; i < mostLine.length; i++) {
				var childDiv = document.createElement('div');
				childDiv.setAttribute('class', 'tab')
				childDiv.onclick = function() {
					showTab('tab1')
				}
				var childimg = document.createElement('img');
				for (let j = 0; j < arr.length; j++) {
					if (mostLine[i].teamPosition == arr[j]) {
						childimg.src = '../img/position/Diamond-' + arr2[j] + '.png';
					}
				}
				var p = document.createElement('p');
				p.textContent = mostLine[i].line_percentage + '%';
				childDiv.appendChild(childimg);
				childDiv.appendChild(p);
				container.appendChild(childDiv);
			}
		},
		error: function(error) {
			// 오류 발생 시 실행할 코드
			console.error('Error:', error);
		}
	});

})