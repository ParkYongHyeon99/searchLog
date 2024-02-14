/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

$(()=>{
/* ====================== 포지션 이미지 설정 ====================== */
	document.getElementById('pAll').style.backgroundImage = "url('../img/position/angle-square-up.png')";
	document.getElementById('pAll').style.backgroundRepeat = "no-repeat";
	document.getElementById('pAll').style.backgroundSize = "30px";
	let position = ["Top","Mid","Support","Jungle","Bot"];
	for(p of position){
		document.getElementById(p).style.backgroundImage = "url('../img/position/Silver-"+p+".png')";
		document.getElementById(p).style.backgroundRepeat = "no-repeat";
		document.getElementById(p).style.backgroundSize = "30px";
	}
	
/* ====================== 리스트 가져오는 함수 실행 ====================== */
	lmAjax();
	setInterval(function(){lmAjax()},5000);		// <- 5초마다 리스트 갱신
	
	
/* ====================== gameMate,gameMode,tier 변경 체크 ====================== */
$('input[name=lm_gameMate],select[name=lm_gameMode],select[name=lm_tier],input[name=lm_findPosition]').on('change',function(){
		let position = ["Top","Mid","Support","Jungle","Bot"];
		for(p of position){
			document.getElementById(p).style.backgroundImage = "url('../img/position/Silver-"+p+".png')";
		}
		let selectP = $('input[name=lm_findPosition]:checked')[0].id.substr(1);
		console.log(selectP);
		if(selectP!="pAll"){
			document.getElementById(selectP).style.backgroundImage = "url('../img/position/Diamond-"+selectP+".png')";
		}
		lmAjax();
		console.log("변경");
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
			lm_tier:$('select[name=lm_tier]').val(),
			lm_findPosition:$('input[name=lm_findPosition]:checked').val()
		},
	}).done(function(lmList){
		console.log(lmList)
		var html = '';
		if(lmList.length!=0){
			for(var lm of lmList){
				html += '<tr>';
				html += '<td>'+lm.lm_gameMode+'</td>';		// 게임 모드
				html += '<td>'+divHtml(lm.lm_tier,'emblem')+'</td>';			// 티어
				html += '<td>'+lm.lm_summonerName+'</td>';	// 작성자 게임닉
				html += '<td>'+lm.lm_myPosition+'</td>';	// 작성자 포지션
				html += '<td>'+lm.winrate+'</td>';			// 작성자 승률
				html += '<td>'+divHtml(lm.lm_findPosition,'position')+'</td>';	// 찾는 포지션
				html += '<td>'+lm.lm_memo+'</td>';			// 작성자 메모
				html += '<td><button onclick="popup(\'app\''+lm.lm_num+')">신청</button></td>';
				html += '</tr>';
				imgSet(lm.lm_tier,lm.lm_findPosition);
			}
		let element = document.getElementById('태그의 id 값');
		}else{
			html += '<tr><td colspan="8"><div class="lmListDiv">글이 존재하지 않습니다.</div></td></tr>';
		}
			$("#lmTbody").empty();
			$("#lmTbody").append(html);
		
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
	})
}


/* ====================== 포지션 div 설정 ====================== */
function divHtml(tp,img){
	var divClass = '<div class="'
	var close = '"></div>'
	var html = ''
	if(img=='emblem'){
		console.log("emblem")
		html += divClass+tp;
	}else if(img=='position'){
		if(tp.search("All")!=-1){
			console.log("position")
			html += divClass+'Top';
			html += divClass+'Jungle';
			html += divClass+'Mid';
			html += divClass+'Support';
			html += divClass+'Bot';
		}else{
			if(tp.search("top")!=-1){console.log("top");html += divClass+'Top';}
			if(tp.search("jug")!=-1){console.log("jug");html += divClass+'Jungle';}
			if(tp.search("mid")!=-1){console.log("mid");html += divClass+'Mid';}
			if(tp.search("sup")!=-1){console.log("sup");html += divClass+'Support';}
			if(tp.search("adc")!=-1){console.log("adc");html += divClass+'Bot';}
		}
	}
	return html+close;
}
/* ====================== 포지션 div img 설정 ====================== */
/* ====================== ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~해야함~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ====================== */
function imgSet(tier,findPosition){
	const tierList = ['top','jug','mid','sup','adc'];
	const tierChange = ['Top','Jungle','Mid','Support','Bot'];
	if(findPosition.search("top")!=-1){}
	if(findPosition.search("jug")!=-1){}
	if(findPosition.search("mid")!=-1){}
	if(findPosition.search("sup")!=-1){}
	if(findPosition.search("adc")!=-1){}
}



/* ====================== 팝업창 띄우기 ====================== */
function popup(menu,lm_num){
	// https://w94dev.tistory.com/45
	if(menu=="find"){
	    var url = "write";
	}else if(menu=="app"){
	    var url = "detail?num="+lm_num;
	}
    var name = "lolmate popup";
    var option = "width=500, height= 500, top=200, left=800, location=no, resizable=no"
    window.open(url, name, option);
}