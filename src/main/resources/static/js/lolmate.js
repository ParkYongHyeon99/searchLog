/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

$(()=>{
/* ====================== 포지션 이미지 설정 ====================== */
	let position = ["pAll","Top","Mid","Support","Jungle","Bot"];
	for(let i=0; i<3; i++){
		for(p of position){
			if(p=="pAll"){
				document.getElementById(p).style.backgroundImage = "url('../img/position/Diamond-"+p+".png')";
			}else{
				document.getElementById(p).style.backgroundImage = "url('../img/position/Silver-"+p+".png')";
			}
			document.getElementById(p).style.backgroundRepeat = "no-repeat";
			document.getElementById(p).style.backgroundSize = "30px";
		}
	}
	
	


/* ====================== 리스트 가져오는 함수 실행 ====================== */
	lmAjax();
	setInterval(function(){lmAjax()},5000);		// <- 5초마다 리스트 갱신
	
})


/* ====================== 탭 변경 ====================== */
$('#lmListChoice').on('click',function(){
	alert('list');
	//$('#lmInfoChoice').css('display','inline-block')
})
$('#lmInfoChoice').on('click',function(){
	let id = document.getElementById('b_writer').value
	if(id != ""){
		
	}
})


/* ====================== gameMate,gameMode,tier 변경 체크 ====================== */
$('input[name=lm_gameMate_find],select[name=lm_gameMode_find],select[name=lm_tier_find],input[name=lm_findPosition_find]')
	.on('change',function(){
	let position = ["pAll","Top","Mid","Support","Jungle","Bot"];
	for(p of position){
		document.getElementById(p).style.backgroundImage = "url('../img/position/Silver-"+p+".png')";
	}
	let selectP = $('input[name=lm_findPosition_find]:checked')[0].id.substr(1);
	console.log('lm_findPosition: '+selectP);
	document.getElementById(selectP).style.backgroundImage = "url('../img/position/Diamond-"+selectP+".png')";
	lmAjax();
	console.log("변경");
})


/* ====================== gameMate,gameMode,tier에 따른 리스트 가져오기 ====================== */
function lmAjax(){
	$.ajax({
		method:'get',
		url: '/lolmate/lmList',
		data: {
			lm_gameMate:$('input[name=lm_gameMate_find]:checked').val(),
			lm_gameMode:$('select[name=lm_gameMode_find]').val(),
			lm_tier:$('select[name=lm_tier_find]').val(),
			lm_findPosition:$('input[name=lm_findPosition_find]:checked').val()
		},
	}).done(function(lmList){
		console.log(lmList)
		var html = '';
		let cntHtml = '';
		if(lmList.length!=0){
			var topCnt = 0;
			var jugCnt = 0;
			var midCnt = 0;
			var supCnt = 0;
			var adcCnt = 0;
			for(var lm of lmList){
				html += '<tr>';
				html += '<td>'+lm.lm_gameMode+'</td>';		// 게임 모드
				html += '<td>'+divHtml(lm.lm_tier,'emblem')+'</td>';			// 티어
				html += '<td>'+lm.lm_summonerName+'</td>';	// 작성자 게임닉
				html += '<td>'+divHtml(lm.lm_myPosition,'position')+'</td>';	// 작성자 포지션
				html += '<td>'+lm.winrate+'</td>';			// 작성자 승률
				html += '<td>'+divHtml(lm.lm_findPosition,'position')+'</td>';	// 찾는 포지션
				html += '<td>'+lm.lm_memo+'</td>';			// 작성자 메모
				html += '<td><button class="appBtn" onclick="popup(\'app\','+lm.lm_num+')" disabled>신청</button></td>';
				html += '</tr>';
				
				var fp = lm.lm_findPosition;
				if(fp.search("All")!=-1){
					topCnt+=1; jugCnt+=1; midCnt+=1; supCnt+=1; adcCnt+=1;
				}else{
					if(fp.search("top")!=-1){ topCnt+=1; }
					if(fp.search("jug")!=-1){ jugCnt+=1; }
					if(fp.search("mid")!=-1){ midCnt+=1; }
					if(fp.search("sup")!=-1){ supCnt+=1; }
					if(fp.search("adc")!=-1){ adcCnt+=1; }
				}

			}
			let cnt = [topCnt, jugCnt, midCnt, supCnt, adcCnt]
			let pKr = ['탑','정글','미드','서포터','봇(원딜)']
			let maxCnt = Math.max(...cnt)
			cntHtml += '<h3>전체 글 '+lmList.length+'개 중,</h3><br><h3>사람들이 많이 찾은 포지션은</h3><h2>&ensp;'
			for(let i=0; i<cnt.length; i++){
				if(maxCnt == cnt[i]){
					cntHtml += pKr[i];
					cntHtml += '&ensp;';
				}
			}
			cntHtml += '</h2><h3>입니다.</h3>'
		}else{
			html += '<tr><td colspan="8"><div class="lmListDiv">글이 존재하지 않습니다.</div></td></tr>';
			cntHtml += '<h3>아직 글이 존재하지 않아 사람들이 많이 찾은 포지션을 확인할 수 없습니다.</h3>';
		}
		$("#lmTbody").empty();
		$("#lmTbody").append(html);
		$("#lmNotionDiv").empty();
		$("#lmNotionDiv").append(cntHtml);
		
		let id = document.getElementById('b_writer').value
		if(id != ""){
			$('#lmInfoChoice').css('display','inline-block')
			document.getElementById('dmPBtn').disabled = false;
			document.getElementById('dmBtn').disabled = false;
			for(let i=0; i<lmList.length; i++){
				document.getElementsByClassName('appBtn')[i].disabled = false;
			}
		}
		
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
	})
}


/* ====================== lmList 포지션 div 설정 ====================== */
function divHtml(tp,img){
	var divT = '<div class="tooltip positionImgDiv2" style="display: inline-block;"><div class="tooltip '
	var spanT = '"><span class="tooltiptext tooltip-bottom">'
	var spanTE = '</span></div></div>'
	var html = '<div class="positionImgDiv">'
	if(img=='emblem'){
		html += divT+tp+spanT+tp+spanTE;
	}else if(img=='position'){
		if(tp.search("All")!=-1){
			html += divT+'Top'+spanT+'탑'+spanTE;
			html += divT+'Jungle'+spanT+'정글'+spanTE;
			html += divT+'Mid'+spanT+'미드'+spanTE;
			html += divT+'Support'+spanT+'서폿'+spanTE;
			html += divT+'Bot'+spanT+'봇(원딜)'+spanTE;
		}else{
			if(tp.search("top")!=-1){html += divT+'Top'+spanT+'탑'+spanTE;}
			if(tp.search("jug")!=-1){html += divT+'Jungle'+spanT+'정글'+spanTE;}
			if(tp.search("mid")!=-1){html += divT+'Mid'+spanT+'미드'+spanTE;}
			if(tp.search("sup")!=-1){html += divT+'Support'+spanT+'서포터'+spanTE;}
			if(tp.search("adc")!=-1){html += divT+'Bot'+spanT+'봇(원딜)'+spanTE;}
		}
	}
	return html+"</div>";}

/*html+divT+dClass+'Top'+spanT+'탑+spanTE+"</div>"

	<div class="positionImgDiv">
		<div class="tooltip positionImgDiv2">
			<div class="tooltip Top"><span class="tooltiptext tooltip-bottom">탑</span></div>
		</div>
	</div>

*/


$('#lmWriteBtn').on('click',function(){
	alert('아직 준비 중');
})










/* ====================== 팝업창 띄우기 ====================== */
function popup(menu,lm_num){
	// https://w94dev.tistory.com/45
	if(menu=="find"){
	    var url = "write";
	}else if(menu=="app"){
	    var url = "detail";
	}
    var name = "lolmate popup";
    var option = "width=500, height= 500, top=200, left=800, location=no, resizable=no"
    window.open(url, name, option);
}