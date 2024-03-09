function search(position) {
	console.log("ajax start")
	let championName = $("#championName").val()
	let teamPosition = $('input[name=teamPosition]:checked').val()

	console.log(championName)
	console.log(teamPosition)
	//	alert("지금 선택한 포지션은 " + position + " 입니다.");

	var data = {
		"championName": championName,
		"teamPosition": teamPosition,
		"myteamPosition": position
	}



	$.ajax({
		method: 'get',
		url: 'getData',
		data: data
	}).done(function(result) {
		let i = 0;
		console.log(result)
		const temp = document.createElement("tbody")

		$.each(result, function(index, match, champions) {

			const championName = match.championName === 'FiddleSticks' ? 'Fiddlesticks' : match.championName;
			i++
			console.log(match)
			const html = document.createElement("tr")
			html.classList.add("result-body")
			html.innerHTML = `<td class="body-text number">${i}</td>
            <td class="body-text"><a href="" class="champ"><div class="champ-box"><img src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${match.championName}.png'></div><strong>${match.championName_KR}</strong></a></td>
            <td class="body-text chart"><div class="chart-mother"><div class="chart-child" style="width:${match.win_ratio}%"></div></div><strong>${match.win_ratio}%<strong></td>
            <td class="body-text">${match.total_count}</td>`
			temp.append(html)
		})
		$('#result').next().remove();
		$('#result').after(temp);
		$('#loading').hide();
	})


}

function displayInput(event) {
	var championName = document.getElementById("championName").value;

	// 챔피언 이름을 사용하여 이미지 URL 생성
	var imageUrl = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/' + championName + '.png';

	// 이미지 요소 생성
	var imgElement = document.createElement("img");
	imgElement.src = imageUrl;
	imgElement.alt = championName + " 이미지";
	imgElement.style.width = "150px";

	// 이미지를 표시할 div에 추가
	var outputDiv = document.getElementById("outputImage");
	outputDiv.innerHTML = ""; // 기존 이미지를 지우고 새로운 이미지로 대체
	outputDiv.appendChild(imgElement);

}

function showImage(button) {
	var selectedTextParagraph = document.getElementById('selectedText');
	var selectedImageParagraph = document.getElementById('selectedImage');
	var contentText = "";
	var imagePath = "";
	switch (button.value) {
		case "top":
			contentText = "탑";
			imagePath = "/img/position/Diamond-Top.png";
			break;
		case "jug":
			contentText = "정글";
			imagePath = "/img/position/Diamond-Jungle.png";
			break;
		case "mid":
			contentText = "미드";
			imagePath = "/img/position/Diamond-Mid.png";
			break;
		case "adc":
			contentText = "원딜";
			imagePath = "/img/position/Diamond-Bot.png";
			break;
		case "sup":
			contentText = "서폿";
			imagePath = "/img/position/Diamond-Support.png";
			break;
		default:
			imagePath = "";
	}
	selectedTextParagraph.textContent = "선택 라인: " + contentText;
	selectedImageParagraph.innerHTML = "<img src='" + imagePath + "' alt='" + button.value + "'>";
}


//function displayChampionName(radio) {
//	
//    var championName = $(radio).val();
//    // 여기에 선택된 챔피언 이름을 사용하는 코드를 추가할 수 있습니다.
//    console.log("선택된 챔피언: " + championName);
//    $('.champion-img').removeClass('selected');
//    $(radio).siblings('label').find('.champion-img').addClass('selected');
//    
//    
//}
function selectRadioButton(index) {
	document.getElementById('championName_' + index).checked = true;
}

//$(document).ready(function(){
//        // 라디오 버튼 변경 이벤트를 감지하여 선택된 값을 변수에 저장
//        $('input[name="teamPosition"]').change(function(){
//            let teamPosition = $('input[name="teamPosition"]:checked').val();
//            console.log("선택된 팀 포지션:", teamPosition);
//            // 이후 여기에 필요한 로직을 추가하면 됩니다.
//        });
//    });

//시너지 챔피언 포지션 검색 버튼
function handleClick(event) {
	const target = event.target.closest("button[id='myteamPosition']");
	if (target) {
		target.click();
	}

}

const positionBtns = document.querySelectorAll("#myteamPosition");
positionBtns.forEach(positionBtn => {
	positionBtn.addEventListener("click", function(event) {


		positionBtns.forEach(btn => {
			btn.classList.remove("show")
		})
		event.target.classList.add("show")
	})
})

$('input[name=aa]').on('change', function() {
	$.ajax({
		type: 'GET',
		url: '/test',  // 실제 서버 엔드포인트로 변경
		data: { line: $('input[name=aa]:checked').val() },   // 서버에 전달할 데이터
		success: function(champions) {
			if (champions.length != 0) {
				html = '<ul class="width100">'
				for (let i = 0; i < champions.length; i++) {
					html += '<li>'
					html += '<input type="radio" name="championName" id="championName_' + i + '" value="' + champions[i].championName + '" onclick="displayChampionName(this)">'
					html += '<label for="championName_' + i + '">'
					html += '<img src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + champions[i].championName + '.png">'
					if (champions[i].championName_kr.length > 3) {
						html += '<div class="set">' + champions[i].championName_kr.substring(0, 3) + '...</div>'
					} else {
						html += '<div class="set">' + champions[i].championName_kr + '</div>'
					}
					html += '</label></li>'
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

/* ====================== gameMate,gameMode,tier 변경 체크 ====================== */
$('input[name=teamPosition]').on('change', function() {
	let position = ["Top", "Jungle", "Mid", "Bot", "Support"];
	for (p of position) {
		document.getElementById(p).style.backgroundImage = "url('../img/position/Silver-" + p + ".png')";
	}
	let selectP = $('input[name=teamPosition]:checked')[0].id.substr(1);
	console.log('lm_findPosition: ' + selectP);
	document.getElementById(selectP).style.backgroundImage = "url('../img/position/Diamond-" + selectP + ".png')";
	console.log("변경");
})

$(() => {
	/* ====================== 포지션 이미지 설정 ====================== */
	let position = ["Top", "Jungle", "Mid", "Bot", "Support"];
	for (let i = 0; i < 3; i++) {
		for (p of position) {
			document.getElementById(p).style.backgroundImage = "url('../img/position/Silver-" + p + ".png')";
			document.getElementById(p).style.backgroundRepeat = "no-repeat";
			document.getElementById(p).style.backgroundSize = "50px";
		}
	}
})
