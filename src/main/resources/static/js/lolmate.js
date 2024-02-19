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
		if(lmList["serch"].length!=0){
			for(var lm of lmList["serch"]){
				html += '<tr>';
				html += '<td>'+lm.lm_gameMode+'</td>';		// 게임 모드
				html += '<td>'+divHtml(lm.lm_tier,'emblem')+'</td>';			// 티어
				html += '<td>'+lm.lm_summonerName+'</td>';	// 작성자 게임닉
				html += '<td>'+divHtml(lm.lm_myPosition,'position')+'</td>';	// 작성자 포지션
				html += '<td>'+lm.winrate+'</td>';			// 작성자 승률
				html += '<td>'+divHtml(lm.lm_findPosition,'position')+'</td>';	// 찾는 포지션
				html += '<td>'+lm.lm_memo+'</td>';			// 작성자 메모
				if(lm.lm_end==0){
					html += '<td><button class="appBtn" onclick="popup(\'app\','+lm.lm_num+')" disabled>신청</button></td>';
				}else if(lm.lm_end==1){
					html += '<td><button disabled>신청</button></td>'
				}
				html += '</tr>';
				
			}
			
			var topCntD = 0; var jugCntD = 0; var midCntD = 0; var supCntD = 0; var adcCntD = 0;
			var topCntM = 0; var jugCntM = 0; var midCntM = 0; var supCntM = 0; var adcCntM = 0;
			var lmD = 0; var lmM = 0;
			for(var lm of lmList["all"]){
				var fp = lm.lm_findPosition;
				if(lm.lm_gameMate == 0){
					lmD+=1;
					if(fp.search("All")!=-1){ topCntD+=1; jugCntD+=1; midCntD+=1; supCntD+=1; adcCntD+=1; }
					else{
						if(fp.search("top")!=-1){ topCntD+=1; }
						if(fp.search("jug")!=-1){ jugCntD+=1; }
						if(fp.search("mid")!=-1){ midCntD+=1; }
						if(fp.search("sup")!=-1){ supCntD+=1; }
						if(fp.search("adc")!=-1){ adcCntD+=1; }
						console.log(" - 듀오\ntop: "+topCntD+"\tjug: "+jugCntD+"\tmid: "+midCntD+"\tsup: "+supCntD+"\tadc: "+adcCntD)
					}
				}else if(lm.lm_gameMate == 1){
					lmM+=1;
					if(fp.search("All")!=-1){ topCntM+=1; jugCntM+=1; midCntM+=1; supCntM+=1; adcCntM+=1; }
					else{
						if(fp.search("top")!=-1){ topCntM+=1; }
						if(fp.search("jug")!=-1){ jugCntM+=1; }
						if(fp.search("mid")!=-1){ midCntM+=1; }
						if(fp.search("sup")!=-1){ supCntM+=1; }
						if(fp.search("adc")!=-1){ adcCntM+=1; }
						console.log(" - 멘토\ntop: "+topCntM+"\tjug: "+jugCntM+"\tmid: "+midCntM+"\tsup: "+supCntM+"\tadc: "+adcCntM)
					}
				}
			}
			let dCnt = [topCntD, jugCntD, midCntD, supCntD, adcCntD]
			let mCnt = [topCntM, jugCntM, midCntM, supCntM, adcCntM]
			let pKr = ['탑','정글','미드','서포터','봇(원딜)']
			let maxDCnt = Math.max(...dCnt)
			let maxMCnt = Math.max(...mCnt)
			cntHtml += '<h3>듀오에서 전체 글 '+lmD+'개 중, 사람들이 많이 찾은 포지션은</h3><h2>&ensp;'
			for(let i=0; i<dCnt.length; i++){
				if(maxDCnt == dCnt[i]){ cntHtml += pKr[i]+'&ensp;'; }
			}
			cntHtml += '</h2><h3>입니다.</h3><br><h3>멘토에서 전체 글 '+lmM+'개 중, 사람들이 많이 찾은 포지션은</h3><h2>&ensp;'
			for(let i=0; i<mCnt.length; i++){
				if(maxMCnt == mCnt[i]){ cntHtml += pKr[i]+'&ensp;'; }
			}
			cntHtml += '</h2><h3>입니다.</h3><br><p>- lolmate(듀오/멘토) 글 작성 및 신청은 로그인 시에만 가능합니다.</p>'
			
		}else{
			html += '<tr><td colspan="8"><div class="lmListDiv">글이 존재하지 않습니다.</div></td></tr>';
			cntHtml += '<h3>아직 글이 존재하지 않아 사람들이 많이 찾은 포지션을 확인할 수 없습니다.</h3><br>'
						+'<p>- lolmate(듀오/멘토) 글 작성 및 신청은 로그인 시에만 가능합니다.</p>';
		}
		
		$("#lmTbody").empty();
		$("#lmTbody").append(html);
		$("#lmNotionDiv").empty();
		$("#lmNotionDiv").append(cntHtml);
		
		let id = document.getElementById('b_writer').value
		if(id != ""){
			$('#lmInfoChoice').css('display','inline-block')
			document.getElementById('dmBtn').disabled = false;
			for(let i=0; i<$('.appBtn').length; i++){
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
	var divT = '<div class="tooltip tooltipImgDiv2" style="display: inline-block;"><div class="tooltip '
	var spanT = '"><span class="tooltiptext tooltip-bottom">'
	var spanTE = '</span></div></div>'
	var html = '<div class="tooltipImgDiv">'
	if(img=='emblem'){
		html += divT+tp+'" style="background-image: url(\'../img/emblem/Rank='+tp+'.png\'); width: 40px; '
		html +='padding-bottom: 40px; background-repeat: no-repeat; background-position: center; background-size : cover;'+spanT;
		if(tp.search("Iron")!=-1){ html += '아이언'}
		else if(tp.search("Bronze")!=-1){ html += '브론즈' }
		else if(tp.search("Silver")!=-1){ html += '실버' }
		else if(tp.search("Gold")!=-1){ html += '골드' }
		else if(tp.search("Diamond")!=-1){ html += '다이아몬드' }
		else if(tp.search("Emerald")!=-1){ html += '에메랄드' }
		else if(tp.search("Platinum")!=-1){ html += '플래티넘' }
		else if(tp.search("Grandmaster")!=-1){ html += '그랜드마스터' }
		else if(tp.search("Master")!=-1){ html += '마스터' }
		else if(tp.search("Challenger")!=-1){html += '챌린저'}
		html += spanTE;
	}else if(img=='position'){
		if(tp.search("All")!=-1){
			html += divT+'pAll" style="background-image: url(\'../img/position/Silver-pAll.png\');'+spanT+'모든 포지션'+spanTE;
		}else{
			if(tp.search("top")!=-1){html += divT+'Top'+spanT+'탑'+spanTE;}
			if(tp.search("jug")!=-1){html += divT+'Jungle'+spanT+'정글'+spanTE;}
			if(tp.search("mid")!=-1){html += divT+'Mid'+spanT+'미드'+spanTE;}
			if(tp.search("sup")!=-1){html += divT+'Support'+spanT+'서포터'+spanTE;}
			if(tp.search("adc")!=-1){html += divT+'Bot'+spanT+'봇(원딜)'+spanTE;}
		}
	}
	return html+"</div>";}


/* ====================== 롤메이트 글 작성 포지션 변경 체크 ====================== */
$('input[name=lm_myPosition_write]').on('change',function(){
	let myPoCheck = [];
	$('input[name=lm_myPosition_write]:checked').each(function(){
		let p = $(this).val();
		for(let i=0; i<=5; i++){
			if(p=='All'){ myPoCheck.push('pAll') }
			else if(p=='top'){ myPoCheck.push('Top') }
			else if(p=='mid'){ myPoCheck.push('Mid') }
			else if(p=='sup'){ myPoCheck.push('Support') }
			else if(p=='jug'){ myPoCheck.push('Jungle') }
			else if(p=='adc'){ myPoCheck.push('Bot') }
		}
	})
	let po = ["pAll","Top","Mid","Support","Jungle","Bot"];
	for(let i=0; i<po.length; i++){
		poImgSet('write'+po[i],'Silver',po[i]);
	}
	for(let i=0; i<myPoCheck.length; i++){
		poImgSet('write'+myPoCheck[i],'Diamond',myPoCheck[i]);
		po = po.filter((element) => element !== myPoCheck[i]);
	}
})
$('input[name=lm_myPosition_write][value=All]:checked').on(function(){
	console.log("All걸림")
	let po = ["pAll","Top","Mid","Support","Jungle","Bot"];
	for(let i=0; i<po.length; i++){
		poImgSet('write'+po[i],'Silver',po[i]);
	}
	$("input[name=lm_myPosition_write]").prop("checked",false);
	$("input[name=lm_myPosition_write][value=All]").prop("checked",true);
	poImgSet('writepAll','Diamond','pAll');
})



function poImgSet(id,sel,p){
	document.getElementById(id).style.backgroundImage = "url('../img/position/"+sel+"-"+p+".png')";
}



/* ====================== 롤메이트 글 작성 ====================== */
$('#lmWriteBtn').on('click',function(){
	var discordOn = $('#discodeOn').attr('class');
	var duo = $('#duoBtn').attr('class');
	var discord = 0;
	var dmS = 0;
	if(discordOn == 'selectBtn'){ discord=0; }else if(discordOn == 'noSelectBtn'){ discord=1; }
	if(duo == 'selectBtn'){ dmS=0; }else if(duo == 'noSelectBtn'){ dmS=1; }
	var tier = 'Gold'
	/*var lm_myPosition = $('input[name=lm_myPosition_write]:checked').val();*/
	$.ajax({
		method:'get',
		url: '/lolmate/lmWrite',
		data: {
			m_id:$('#b_writer').val(),
			lm_summonerName:$('#lm_summonerName_write').val(),
			lm_gameMate:dmS,
			lm_gameMode:$('select[name=lm_gameMode_write]').val(),
			lm_tier:tier,
			lm_myPosition:$('input[name=lm_myPosition_write]:checked').val(),
			lm_findPosition:$('input[name=lm_findPosition_write]:checked').val(),
			lm_memo:$('#lmWriteMemo').val(),
			lm_discord:discord
		},
	}).done(function(res){
		if(res=="ok"){
			Swal.fire({
				icon : "success",
				text : "작성 성공!",
			});
			$('#dmModal').hide();
			lmAjax();
		}else{
			Swal.fire({
				icon : "error",
				text : "작성 실패..",
			});
			console.log('작성완료');
			
		}
	})
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