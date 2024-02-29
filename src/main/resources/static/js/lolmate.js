/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */


$(()=>{
/* ====================== 포지션 이미지 설정 ====================== */
	let position = ["pAll","Top","Jungle","Mid","Bot","Support"];
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
	//setInterval(function(){lmAjax()},5000);		// <- 5초마다 리스트 갱신
	
})


/* ====================== 탭 변경 ====================== */
$('#lmListChoice').on('click',function(){
	//location.href = '/lolmate/list';
	$('#lmListTab').css('display','block');
	$('#lmInfoTab').css('display','none');
})
$('#lmInfoChoice').on('click',function(){
	let id = document.getElementById('m_id').value
	if(id == ""){
		alert('로그인 후 이용 가능합니다.');
	}else{
		$('#lmListTab').css('display','none');
		$('#lmInfoTab').css('display','block');
		$("input[name=lmInfoTabChoice][value=myList]").prop("checked", true);
		infoTabMyList(id);
	}
})
$('input[name=lmInfoTabChoice]').on('change',function(){
	var infoTab = $('input[name=lmInfoTabChoice]:checked').val();
	let id = document.getElementById('m_id').value
	if(infoTab == 'myList'){
		infoTabMyList(id);
	}else if(infoTab == 'myAppList'){
		$.ajax({
			method:'get',
			url:'/lolmate/myAppList',
			data: {
				m_id:id,
			},
		}).done(function(lmAppList){
			$('#infoNoction').html('<p style="text-align:center;">리스트 클릭 시 신청한 글을 관리할 수 있습니다.</p>');
			html = '<div>'
			html += '<table id="mLAppList" style="width:80%; border: 1px solid black; padding: 1% 0 1% 0; margin: auto; text-align: center;">'
			html += '<tr><th>번호</th><th>듀오/멘토</th><th>게임 모드</th><th>주 포지션</th><th>찾는 포지션</th><th>메모</th><th>신청</th></tr>'
			if(lmAppList.length!=0){
				let num = lmAppList.length;
				for(let lm of lmAppList){
					html += '<tr onclick="myApp_Detail('+lm.lm_num+')">'
					html += '<td>'+num+'</td>'
					if(lm.lm_gameMate == 0){ html += '<td>듀오</td>' }
						else if(lm.lm_gameMate == 1){ html += '<td>멘토</td>' }
					html += '<td>'+lm.lm_gameMode+'</td>'
					html += '<td>'+divHtml(lm.lm_myPosition,'position')+'</td>'
					html += '<td>'+divHtml(lm.lm_findPosition,'position')+'</td>'
					html += '<td>'+lm.lm_memo+'</td>'
					html += '<td><button type="button" onclick="myLmAppDel('+lm.lm_num+',event)">신청 취소</button></td>'
					html += '</tr>'
					num--;
				}
			}else{
				html += '<tr><td colspan="7"><div class="lmListDiv">신청한 글이 존재하지 않습니다.</div></td></tr>'
			}
			html += '</table></div>'
			$('#lmInfoContents').html(html);
		})
	}
})
function infoTabMyList(id){
	$.ajax({
		method:'get',
		url:'/lolmate/myLmList',
		data: {
			m_id:id,
		},
	}).done(function(lmList){
		$('#infoNoction').html('<p style="text-align:center;">리스트 클릭 시 글/신청자를 관리할 수 있습니다.</p>');
		html = '<div>'
		html += '<table id="mLList" style="width:80%; border: 1px solid black; padding: 1% 0 1% 0; margin: auto; text-align: center;">'
		html += '<thead><tr><th>번호</th><th>듀오/멘토</th><th>게임 모드</th><th>주 포지션</th><th>찾는 포지션</th><th>메모</th><th>신청자 수</th><th>신청 가능 여부</th></tr></thead>'
		html += '<tbody id="lmTbody">'
		if(lmList.length!=0){
			let num = lmList.length;
			for(let lm of lmList){
				html += '<tr onclick="mL_Detail('+lm.lm_num+')">'
				html += '<td>'+num+'</td>'
				if(lm.lm_gameMate == 0){ html += '<td>듀오</td>' }
					else if(lm.lm_gameMate == 1){ html += '<td>멘토</td>' }
				html += '<td>'+lm.lm_gameMode+'</td>'
				html += '<td>'+divHtml(lm.lm_myPosition,'position')+'</td>'
				html += '<td>'+divHtml(lm.lm_findPosition,'position')+'</td>'
				html += '<td>'+lm.lm_memo+'</td>'
				if(lm.lm_app_summonerName.length<1){
					html += '<td>&ensp;-&ensp;명</td>'
				}else{
					html += '<td>'+lm.lm_app_summonerName.length+'명</td>'
				}
				if(lm.lm_end == 0){ html += '<td>신청 가능</td>' }
					else if(lm.lm_end == 1){ html += '<td>닫힘</td>' }
				html += '</tr>'
				num--;
			}
			
			html += '<div id="mLDetailDiv" style="display:none;"></div>'
			
		}else{
			html += '<tr><td colspan="8"><div class="lmListDiv">작성한 글이 존재하지 않습니다.</div></td></tr>'
		}
		html += '<tbody></table></div>'
		$('#lmInfoContents').html(html);
	})
}
function mL_Detail(lm_num){
	$('#mLList').css('display','none');
	$('#mLDetailDiv').css('display','block');
	$('#mLDetailDiv').html(lm_num+'띄울 준비중');
}
function myApp_Detail(lm_num){
	
}
function myLmAppDel(lm_num,e){
	e.stopPropagation();
	$.ajax({
		method:'get',
		url:'/lolmate/myLmList',
		data: {
			lm_num:lm_num,
			m_id:id,
		},
	}).done(function(res){
		
	})
}


/* ====================== gameMate,gameMode,tier 변경 체크 ====================== */
$('input[name=lm_gameMate_find],select[name=lm_gameMode_find],select[name=lm_tier_find],input[name=lm_findPosition_find]')
	.on('change',function(){
	let position = ["pAll","Top","Jungle","Mid","Bot","Support"];
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
		if(lmList["all"].length!=0){
			if(lmList["serch"].length!=0){
				for(var lm of lmList["serch"]){
					html += '<tr>';
					html += '<td>'+lm.lm_gameMode+'</td>';		// 게임 모드
					html += '<td>'+divHtml(lm.lm_tier,'emblem')+'</td>';			// 티어
					html += '<td>'+lm.lm_summonerName+'</td>';	// 작성자 게임닉
					html += '<td>'+divHtml(lm.lm_myPosition,'position')+'</td>';	// 작성자 포지션
					html += '<td>'+lm.lm_winrate+'</td>';			// 작성자 승률
					html += '<td>'+divHtml(lm.lm_findPosition,'position')+'</td>';	// 찾는 포지션
					html += '<td>'+lm.lm_memo+'</td>';			// 작성자 메모
					if(lm.m_id == document.getElementById('m_id').value){
						if(lm.lm_end==0){
							html += '<td><button class="appBtn" onclick="popup(\'app\','+lm.lm_num+')">확인</button></td>';
						}else if(lm.lm_end==1){
							html += '<td><button disabled>확인</button></td>'
						}
					}else{
						if(lm.lm_end==0){
							html += '<td><button class="appBtn" onclick="popup(\'app\','+lm.lm_num+')" disabled>신청</button></td>';
						}else if(lm.lm_end==1){
							html += '<td><button disabled>닫힘</button></td>'
						}
					}
					html += '</tr>';
				}
			}else{
				html += '<tr><td colspan="8"><div class="lmListDiv">글이 존재하지 않습니다.</div></td></tr>';
			}
			
			var topCntD = 0; var jugCntD = 0; var midCntD = 0; var supCntD = 0; var adcCntD = 0;
			var topCntM = 0; var jugCntM = 0; var midCntM = 0; var supCntM = 0; var adcCntM = 0;
			var lmD = 0; var lmM = 0;
			for(var lm of lmList["all"]){
				var fp = lm.lm_findPosition;
				if(lm.lm_gameMate == 0){
					lmD+=1;
					if(fp.search("All")!=-1){ topCntD+=1; jugCntD+=1; midCntD+=1; adcCntD+=1; supCntD+=1; }
					else{
						if(fp.search("top")!=-1){ topCntD+=1; }
						if(fp.search("jug")!=-1){ jugCntD+=1; }
						if(fp.search("mid")!=-1){ midCntD+=1; }
						if(fp.search("adc")!=-1){ adcCntD+=1; }
						if(fp.search("sup")!=-1){ supCntD+=1; }
						console.log(" - 듀오\ntop: "+topCntD+"\tjug: "+jugCntD+"\tmid: "+midCntD+"\tadc: "+adcCntD+"\tsup: "+supCntD)
					}
				}else if(lm.lm_gameMate == 1){
					lmM+=1;
					if(fp.search("All")!=-1){ topCntM+=1; jugCntM+=1; midCntM+=1; adcCntM+=1; supCntM+=1; }
					else{
						if(fp.search("top")!=-1){ topCntM+=1; }
						if(fp.search("jug")!=-1){ jugCntM+=1; }
						if(fp.search("mid")!=-1){ midCntM+=1; }
						if(fp.search("adc")!=-1){ adcCntM+=1; }
						if(fp.search("sup")!=-1){ supCntM+=1; }
						console.log(" - 멘토\ntop: "+topCntM+"\tjug: "+jugCntM+"\tmid: "+midCntM+"\tadc: "+adcCntM+"\tsup: "+supCntM)
					}
				}
			}
			let dCnt = [topCntD, jugCntD, midCntD, adcCntD, supCntD]
			let mCnt = [topCntM, jugCntM, midCntM, adcCntM, supCntM]
			let pKr = ['탑','정글','미드','봇(원딜)','서포터']
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
		
		let id = document.getElementById('m_id').value
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
		if(tp.search("unranked")!=-1){
			html += divT+tp+'">'+tp+'</div></div>'
		}else{
			html += divT+tp+'" style="background-image: url(\'../img/emblem/Rank='+tp+'.png\'); width:40px; '
			html +='padding-bottom:40px; background-repeat: no-repeat; background-position: center; background-size : cover;'+spanT;
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
		}
		
	}else if(img=='position'){
		if(tp.search("All")!=-1){
			html += divT+'pAll" style="background-image: url(\'../img/position/Silver-pAll.png\');'+spanT+'모든 포지션'+spanTE;
		}else{
			if(tp.search("top")!=-1){html += divT+'Top'+spanT+'탑'+spanTE;}
			if(tp.search("jug")!=-1){html += divT+'Jungle'+spanT+'정글'+spanTE;}
			if(tp.search("mid")!=-1){html += divT+'Mid'+spanT+'미드'+spanTE;}
			if(tp.search("adc")!=-1){html += divT+'Bot'+spanT+'봇(원딜)'+spanTE;}
			if(tp.search("sup")!=-1){html += divT+'Support'+spanT+'서포터'+spanTE;}
		}
	}
	return html+"</div>";
}


/* ====================== 롤메이트 글 작성 포지션 변경 체크 ====================== */
$('input[name=lm_myPosition_write]').on('change', function() {
    let po = ["Top","Jungle","Mid","Bot","Support"];
    let myPoCheck = [];
    
    // 모든 포지션 포함 다른 포지션들을 실버로 변경
    for(let i=0; i<po.length; i++) { poImgSet('writemy'+po[i],'Silver',po[i]); }
    poImgSet('writemypAll','Silver','pAll');

    // 선택된 모든 항목을 배열에 추가
    $('input[name=lm_myPosition_write]:checked').each(function() {
        myPoCheck.push($(this).val());
    });

    // "All"을 선택한 경우
    if ($(this).val() === 'All' && $(this).prop('checked')) {
        poImgSet('writemypAll','Diamond','pAll');
        $("input[name=lm_myPosition_write]").not(this).prop("checked", false);
        console.log('select Position: pAll')
    } else {
        // "All"을 선택하지 않은 경우
        // 선택된 항목의 수가 전체 항목 수와 같은 경우
        if (myPoCheck.length === po.length) {
            $("input[name=lm_myPosition_write]").not(this).prop("checked", false);
            $("input[name=lm_myPosition_write][value=All]").prop("checked", true);
            po = ['pAll']
        } else {
			po = []
            $("input[name=lm_myPosition_write][value=All]").prop("checked", false);
            for(let i=0; i<myPoCheck.length; i++) {
                if(myPoCheck[i] === 'top'){ po.push('Top') }
                else if(myPoCheck[i] === 'jug'){ po.push('Jungle') }
                else if(myPoCheck[i] === 'mid'){ po.push('Mid') }
                else if(myPoCheck[i] === 'adc'){ po.push('Bot') }
                else if(myPoCheck[i] === 'sup'){ po.push('Support') }
            }
        }
        for(let i=0; i<po.length; i++) {
            poImgSet('writemy'+po[i],'Diamond',po[i]);
        }
        console.log('select Position: '+po)
    }
});
$('input[name=lm_findPosition_write]').on('change', function() {
    let po = ["Top","Jungle","Mid","Bot","Support"];
    let fiPoCheck = [];
    
    // 모든 포지션 포함 다른 포지션들을 실버로 변경
    for(let i=0; i<po.length; i++) { poImgSet('writefind'+po[i],'Silver',po[i]); }
    poImgSet('writefindpAll','Silver','pAll');

    // 선택된 모든 항목을 배열에 추가
    $('input[name=lm_findPosition_write]:checked').each(function() {
        fiPoCheck.push($(this).val());
    });

    // "All"을 선택한 경우
    if ($(this).val() === 'All' && $(this).prop('checked')) {
        poImgSet('writefindpAll','Diamond','pAll');
        $("input[name=lm_findPosition_write]").not(this).prop("checked", false);
        console.log('select Position: pAll')
    } else {
        // "All"을 선택하지 않은 경우
        // 선택된 항목의 수가 전체 항목 수와 같은 경우
        if (fiPoCheck.length === po.length) {
            $("input[name=lm_findPosition_write]").not(this).prop("checked", false);
            $("input[name=lm_findPosition_write][value=All]").prop("checked", true);
            po = ['pAll']
        } else {
			po = []
            $("input[name=lm_findPosition_write][value=All]").prop("checked", false);
            for(let i=0; i<fiPoCheck.length; i++) {
                if(fiPoCheck[i] === 'top'){ po.push('Top') }
                else if(fiPoCheck[i] === 'jug'){ po.push('Jungle') }
                else if(fiPoCheck[i] === 'mid'){ po.push('Mid') }
                else if(fiPoCheck[i] === 'adc'){ po.push('Bot') }
                else if(fiPoCheck[i] === 'sup'){ po.push('Support') }
            }
        }
        for(let i=0; i<po.length; i++) {
            poImgSet('writefind'+po[i],'Diamond',po[i]);
        }
        console.log('select Position: '+po)
    }
});
$('.discordDiv').on('click',function(){
	let on = document.getElementById('discodeOn')
	let off = document.getElementById('discodeOff')
	if(on.className=='selectBtn'){
		on.className = 'noSelectBtn';
		off.className = 'selectBtn';
	}else if(on.className=='noSelectBtn'){
		on.className = 'selectBtn';
		off.className = 'noSelectBtn';
	}
})
$('.gamemateDiv').on('click',function(){
	let duo = document.getElementById('duoBtn')
	let mento = document.getElementById('mentoBtn')
	if(duo.className=='selectBtn'){
		duo.className = 'noSelectBtn';
		mento.className = 'selectBtn';
	}else if(duo.className=='noSelectBtn'){
		duo.className = 'selectBtn';
		mento.className = 'noSelectBtn';
	}
})
/* ====================== 롤메이트 글 작성 포지션 변경 체크 끝 ====================== */



/* ====================== 이미지 변경 함수 ====================== */
function poImgSet(id,sel,p){
	document.getElementById(id).style.backgroundImage = "url('../img/position/"+sel+"-"+p+".png')";
}
/* ====================== 이미지 변경 함수 끝 ====================== */



/* ====================== 롤메이트 글 작성 ====================== */
$('#lmWriteBtn').on('click',function(){
	let sName = $('.lm_summonerName_write').val();
/*	if(sName.search("#")==-1){
		Swal.fire({
			icon : "error",
			text : "닉네임 형식이 맞는지 확인해주세요.",
		});
		return
	}*/
	
	var discordOn = $('#discodeOn').attr('class');
	var gameMateSelect = $('#duoBtn').attr('class');
	var discord = 0;
	var gameMate = 0;
	if(discordOn == 'selectBtn'){ discord=0; }else if(discordOn == 'noSelectBtn'){ discord=1; }
	if(gameMateSelect == 'selectBtn'){ gameMate=0; }else if(gameMateSelect == 'noSelectBtn'){ gameMate=1; }
	// 선택된 목록 가져오기
	const mpSel = document.querySelectorAll('input[name=lm_myPosition_write]:checked');
	const fpSel = document.querySelectorAll('input[name=lm_findPosition_write]:checked');
	let mpVal = '';	let fpVal = '';		// 선택된 목록에서 value 찾기
	mpSel.forEach((el) => {mpVal += el.value + ' ';});
	fpSel.forEach((el) => {fpVal += el.value + ' ';});
	console.log('myPosition: ',mpVal,'\tfindPosition: ',fpVal)
	$.ajax({
		method:'get',
		url: '/lolmate/lmWrite',
		data: {
			m_id:$('#m_id').val(),
			lm_summonerName:sName,
			lm_gameMate:gameMate,
			lm_gameMode:$('select[name=lm_gameMode_write]').val(),
			lm_myPosition:mpVal,
			lm_findPosition:fpVal,
			lm_memo:$('#lmWriteMemo').val(),
			lm_discord:discord
		},
	}).done(function(res){
		if(res=="ok"){
			Swal.fire({
				icon : "success",
				title : "작성 성공!",
			});
			$('.lm_summonerName_write').val('');
			document.getElementById('discodeOn').className = 'selectBtn';
			document.getElementById('discodeOff').className = 'noSelectBtn';
			document.getElementById('duoBtn').className = 'selectBtn';
			document.getElementById('mentoBtn').className = 'noSelectBtn';
			$("input[name=lm_myPosition_write][value=All]").prop("checked", true);
			$("input[name=lm_findPosition_write][value=All]").prop("checked", true);
			$('#lmWriteMemo').val('');
			$('#dmModal').hide();
			lmAjax();
		}else{
			Swal.fire({
				icon : "error",
				title : "작성 실패..",
				text : "닉네임을 제대로 작성하셨는지 확인해주세요",
			});
		}
	})
})
/* ====================== 롤메이트 글 작성 끝 ====================== */









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