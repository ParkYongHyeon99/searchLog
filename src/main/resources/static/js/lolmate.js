/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

$(()=>{
/* ====================== 리스트 가져오는 함수 실행 ====================== */
	lmAjax();
	setInterval(function(){lmAjax()},5000);		// <- 5초마다 리스트 갱신
	
	
/* ====================== gameMate,gameMode,tier 변경 체크 ====================== */
	$('input[name=lm_gameMate],select[name=lm_gameMode],select[name=lm_tier]').on('change',function(){
		lmAjax();
		console.log("변경");
	})
	
	$('input[name=lm_findPosition]').on('change',function(){
		let position = ["Top","Mid","Support","Jungle","Bot"];
		for(p of position){
			document.getElementById(p).style.backgroundImage = "url('../img/position/Silver-"+p+".png')";
		}
		let selectP = $('input[name=lm_findPosition]:checked').val()
		if(selectP!=pAll){
			document.getElementById(selectP).style.backgroundImage = "url('../img/position/Challenger-"+selectP+".png')";
		}
/*		let Top = document.getElementById("Top")
		let Mid = document.getElementById("Mid")
		let Sup = document.getElementById("Support")
		let Jug = document.getElementById("Jungle")
		let Adc = document.getElementById("Bot")
		let position={Top,Mid,Sup,Jug,Adc};
		for(p of position){
			p.style.backgroundImage = "url('https://i.imgur.com/PQNhCln.gif')";
		}*/
	})
})


/* ====================== gameMate,gameMode,tier에 따른 리스트 가져오기 ====================== */
function lmAjax(){
	$.ajax({
		method:'get',
		url: '/lolmate/lmList',
		data: {
			lm_gameMate:$('input[name=lm_gameMate]:checked').val(),
			lm_gameMode:$('select[name=lm_gameMode]').val(),
			lm_tier:$('select[name=lm_tier]').val()
		},
	}).done(function(lmList){
		console.log(lmList)
		if(lmList!=''){
			var html = '';
			for(var lm of lmList){
				html += '<tr>';
				html += '<td>'+lm.lm_gameMode+'</td>';		// 게임 모드
				html += '<td>'+lm.lm_tier+'</td>';			// 티어
				html += '<td>'+lm.lm_summonerName+'</td>';	// 작성자 게임닉
				html += '<td>'+lm.lm_myPosition+'</td>';	// 작성자 포지션
				html += '<td>'+lm.winrate+'</td>';			// 작성자 승률
				html += '<td>'+lm.lm_findPosition+'</td>';	// 찾는 포지션
				html += '<td>'+lm.lm_memo+'</td>';			// 작성자 메모
				html += '<td><button onclick="alert(\'할 예정!\')">신청</button></td>';
				html += '</tr>';
			}
			$("#lmTbody").empty();
			$("#lmTbody").append(html);
		}
		
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
	})
}

function popup(){
    var url = "lolmateWrite";
    var name = "lolmate popup";
    var option = "width=500, height= 500, top=200, left=800, location=no, resizable=no"
    window.open(url, name, option);
}