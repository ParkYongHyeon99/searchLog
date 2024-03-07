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
/* ====================== 포지션 이미지 설정 끝 ====================== */


/* ====================== 리스트 가져오는 함수 실행 ====================== */
	lmAjax();
	//setInterval(function(){lmAjax()},3000);		// <- 3초마다 리스트 갱신
/* ====================== 리스트 가져오는 함수 실행 끝 ====================== */
})



/* ====================== 내 작성 글 리스트 생성 ====================== */
function infoTabMyList(id){
	$.ajax({
		method:'get',
		url:'/lolmate/myLmList',
		data: {
			m_id:id,
		},
	}).done(function(lmList){
		$('#infoNoction').html('<p style="text-align:center;">리스트 클릭 시 글/신청자를 관리할 수 있습니다.</p>');
		
		$('#mLAppList thead').empty();
		const thRow = $('<tr>');
		let th = ['번호','듀오/멘토','게임 모드','주 포지션','찾는 포지션','메모','신청자 수','신청 가능 여부'];
		for(let i=0; i<th.length; i++){
			const thCell = $('<th>').text('  '+th[i]+'  ');
			thRow.append(thCell);
			$('#mLAppList thead').append(thRow);
		}
		
		$('#mLAppList tbody').empty();
		if(lmList.length!=0){
			let num = lmList.length;
			for(let lm of lmList){
				const newRow = $('<tr>');
				newRow.attr('id', lm.lm_num);
				newRow.attr('class', 'lmDBtn');
				if(lm.lm_end == 0){
					newRow.on('click',function(){
						mL_Detail(lm.lm_num,'0');
						const lmDModal = document.getElementById('lmDModal');
						lmDModal.style.display = 'flex';
					})
				}
				
				const numCell = $('<td>').text(num)
				const gameMateCell = $('<td>').text('');
				if(lm.lm_gameMate == 0){ gameMateCell.text('듀오') }
					else if(lm.lm_gameMate == 1){ gameMateCell.text('멘토') }
				const gameModeCell = $('<td>').text(lm.lm_gameMode)
				const myPCell = $('<td>').html(divHtml(lm.lm_myPosition,'position'))
				const findPCell = $('<td>').html(divHtml(lm.lm_findPosition,'position'))
				const memoCell = $('<td>').text(lm.lm_memo)
				const appCtnCell = $('<td>').text('');
				if(lm.lm_app.length<1){
					appCtnCell.text('  -  명');
				}else{
					appCtnCell.text('  '+lm.lm_app.length+'  명');
				}
				const endCell = $('<td>').text('');
				if(lm.lm_end == 0){ endCell.text('신청 가능'); }
					else if(lm.lm_end == 1){ endCell.text('닫힘'); }
				num--;
				
				newRow.append(numCell,gameMateCell,gameModeCell,myPCell,findPCell,memoCell,appCtnCell,endCell)
				$('#mLAppList tbody').append(newRow);
			}
		}else{
			const newRow = $('<tr>');
			const newCell = $('<td>').attr('colspan', '8').append('<div class="lmListDiv">작성한 글이 존재하지 않습니다.</div>');
			newRow.append(newCell);
			$('#mLAppList tbody').append(newRow);
		}
	})
}
/* ====================== 내 작성 글 리스트 생성 끝 ====================== */



/* ====================== 내 신청글 리스트 생성 ====================== */
function infoTabMyAppList(id){
	$.ajax({
		method:'get',
		url:'/lolmate/myAppList',
		data: {
			m_id:id,
		},
	}).done(function(lmAppList){
		$('#infoNoction').html('<p style="text-align:center;">리스트 클릭 시 신청한 글을 관리할 수 있습니다.</p>');
		
		$('#mLAppList thead').empty();
		const thRow = $('<tr>');
		let th = ['번호','듀오/멘토','게임 모드','소환사 명','주 포지션','찾는 포지션','메모','신청'];
		for(let i=0; i<th.length; i++){
			const thCell = $('<th>').text('  '+th[i]+'  ');
			thRow.append(thCell);
			$('#mLAppList thead').append(thRow);
		}
		
		$('#mLAppList tbody').empty();
		if(lmAppList.length!=0){
			let num = lmAppList.length;
			for(let lm of lmAppList){
				const newRow = $('<tr>');
				newRow.on('click',function(){
					myApp_Detail(lm.lm_num);
					const lmDModal = document.getElementById('lmDModal');
					lmDModal.style.display = 'flex';
				})
				
				const numCell = $('<td>').text(num)
				const gameMateCell = $('<td>');
				if(lm.lm_gameMate == 0){ gameMateCell.text('듀오') }
					else if(lm.lm_gameMate == 1){ gameMateCell.text('멘토') }
				const gameModeCell = $('<td>').text(lm.lm_gameMode)
				const summonerNameCell = $('<td>').text(lm.lm_summonerName)
				const myPCell = $('<td>').html(divHtml(lm.lm_myPosition,'position'))
				const findPCell = $('<td>').html(divHtml(lm.lm_findPosition,'position'))
				const memoCell = $('<td>').text(lm.lm_memo)
				const btnCell = $('<td>').append($('<button>').attr('type', 'button').text('  신청 취소  ').on('click', function(event) {myAppDel(lm.lm_num, id, event);}));
				
				newRow.append(numCell,gameMateCell,gameModeCell,summonerNameCell,myPCell,findPCell,memoCell,btnCell)
				num--;
				$('#mLAppList tbody').append(newRow);
			}
		}else{
			const newRow = $('<tr>');
			const newCell = $('<td>').attr('colspan', '8').append('<div class="lmListDiv">신청한 글이 존재하지 않습니다.</div>');
			newRow.append(newCell);
			$('#mLAppList tbody').append(newRow);
		}
	})
}
/* ====================== 내 신청글 리스트 생성 끝 ====================== */



/* ====================== 글 모달 Div 상세 요소 생성 ====================== */
function mL_Detail(lm_num,division){
	let id = document.getElementById('m_id').value;
	$.ajax({
		method:'get',
		url:'/lolmate/lmDetail',
		data: {
			lm_num:lm_num,
		},
	}).done(function(lm){
		$('#lm_detailT').html(lm.lm_summonerName+'님의 lolmate 상세 페이지');
		let html = ''
		
		html += '<div><h5 class="lmWrite_h5">소환사 닉네임</h5><input class="lm_summonerName" type="text" value="'+lm.lm_summonerName+'" disabled></div><br>'
		html += '<div class="floatLeft"><h5 class="lmWrite_h5">티어</h5><input type="text" value="'+lm.lm_tier+'" disabled></div>'
		html += '<div><h5 class="lmWrite_h5">승률</h5><input type="text" value="'+lm.lm_winrate+'%" disabled></div><br>'
		
		html += '<div class="btn-group floatLeft"><h5 class="lmWrite_h5">디스코드 여부</h5>'
		if(lm.lm_discord==0){
			html += '<button type="button" id="dOn" class="selectBtn">on</button><button type="button" id="dOff" class="noSelectBtn">off</button></div></div>'
		}else{
			html += '<button type="button" id="dOn" class="noSelectBtn">on</button><button type="button" id="dOff" class="selectBtn">off</button></div></div>'
		}
		html += '<div class="btn-group floatLeft"><h5 class="lmWrite_h5">lolmate</h5>'
		if(lm.lm_gameMate==0){
			html += '<button type="button" id="duoBtn" class="selectBtn">듀오</button><button type="button" id="mentoBtn" class="noSelectBtn">멘토</button></div>'
		}else{
			html += '<button type="button" id="duoBtn" class="noSelectBtn">듀오</button><button type="button" id="mentoBtn" class="selectBtn">멘토</button></div>'
		}
		html += '<div class="lm_serchSelectDiv"><h5 class="lmWrite_h5">게임모드</h5><input type="text" value="'+lm.lm_gameMode+'" disabled></div><br>'
		
		html += '<div class="positionSelect"><div class="myPoDivSelect"><h5>내 포지션</h5>'
		html += positionHtml('myPoRadio',lm.lm_myPosition)+'</div>'
		html += '<div class="findPoDivSelect"><h5>찾는 포지션</h5>'
		html += positionHtml('findPoRadio',lm.lm_findPosition)+'</div></div>'
		
		html += '<div class="lmMemoDiv"><textarea id="lmWriteMemo" rows="6%" cols="78%" disabled>'+lm.lm_memo+'</textarea></div>'
		
		$('#lmDMContent').html(html);
		
		$('#lmDMContent2').html('');
		if(division == '0'){
			// 확인(작성자)
			appList(lm_num);
		}else if(division == '1'){
			// 신청
			var al = lm.lm_app;
			var idOk = false;
			al.forEach(function(item) {
			    if (item.lm_app_m_id === id) {
					idOk = true;
			    }
			});
			if(idOk){
				// 한 상태
				appChat(lm_num,id,lm.m_id,'0');
			}else{
				// 안 한 상태
				var container = document.getElementById('lmDMContent2');
				const appSName = Object.assign(document.createElement('input'), { type: 'text', id: 'appSName', placeholder:'닉네임#태그' });
				const appBtn = document.createElement('button');
				appBtn.textContent = '  신청  ';
				appBtn.addEventListener('click', () => appChat(lm_num,id,lm.m_id,'1'));
				container.appendChild(appSName);
				container.appendChild(appBtn);
			}
		}
	})
}
/* ====================== 글 모달 Div 상세 요소 생성 끝 ====================== */



/* ====================== 내 글 신청자 리스트 생성 ====================== */
function appList(lm_num){
	$('#lmDMContent2').html('');
	$.ajax({
		method:'get',
		url:'/lolmate/lmAppList',
		data:{lm_num:lm_num},
	}).done(function(lm){
		console.log(lm)
		var container = document.getElementById('lmDMContent2');
		if(lm.lm_app.length<1){
			const textDiv = document.createElement('div');
			textDiv.setAttribute('class', 'textDiv');
			textDiv.textContent = '아직 신청자가 없습니다.'
			container.appendChild(textDiv);
		}else{
			var childDiv = document.createElement('div');
			childDiv.setAttribute('id','lmAppList')
			for(let i=0; i<lm.lm_app.length; i++){
				var appDiv = document.createElement('div');
				var sNameText = document.createElement('div');
				var chatText = document.createElement('div');
				var chatDate = document.createElement('h5');
				
				appDiv.setAttribute('class','lmAppDiv')
				appDiv.onclick = function(){ chat(lm_num,lm.lm_app[i].lm_app_m_id,'1') }
				
				sNameText.textContent = lm.lm_app[i].lm_app_summonerName;
				sNameText.setAttribute('class','sNameText')
				if(lm.lm_app_chat[i]==null){
					chatText.textContent = '상대방이 아직 채팅을 작성하지 않았습니다.';
				}else{
					let chat = lm.lm_app_chat[i].lm_app_chat;
					if(chat.length>10){
						chatText.textContent = chat.substr(start[0, 10]);
					}else{
						chatText.textContent = chat;
					}
					chatDate.textContent = lm.lm_app_chat[i].lm_app_chat_date;
				}
				
				chatText.setAttribute('class', 'chatTextDiv');
				appDiv.appendChild(sNameText);
				appDiv.appendChild(chatText);
				if(lm.lm_app_chat[i]!=null){ appDiv.appendChild(chatDate); }
				childDiv.appendChild(appDiv);
			}
			
			var childDiv2 = document.createElement('div');
			childDiv2.setAttribute('id','lmCDBtnDiv')
			var closeBtn = document.createElement('button');
			closeBtn.textContent = '  닫기  ';
	        closeBtn.setAttribute('class', 'closeBtn');
	        closeBtn.onclick = function(){
				$.ajax({ url:"/lolmate/close", data:{lm_num:lm_num} }).done(function(res){ 
					if(res){
						Swal.fire({
							icon : "success",
							text : "닫기 성공!",
						});
						location.reload();
					}else{
						Swal.fire({
							icon : "error",
							text : "닫기 실패..",
						});
						return;
					} })
			}
			var deleteBtn = document.createElement('button');
			deleteBtn.textContent = '  삭제  ';
	        deleteBtn.setAttribute('class', 'deleteBtn');
	        deleteBtn.onclick = function(){
				$.ajax({ url:"/lolmate/delete", data:{lm_num:lm_num} }).done(function(res){ 
					if(res){ 
						Swal.fire({
							icon : "success",
							text : "삭제 성공!",
						});
						location.reload();
					}else{
						Swal.fire({
							icon : "error",
							text : "삭제 실패..",
						});
						return;
					} })
			}
			childDiv2.appendChild(closeBtn);
			childDiv2.appendChild(deleteBtn);
			container.appendChild(childDiv);
			container.appendChild(childDiv2);
		}
	})
}
/* ====================== 내 글 신청자 리스트 생성 끝 ====================== */



/* ====================== 내 신청글 모달 Div 상세 요소 생성 ====================== */
function myApp_Detail(lm_num){
	mL_Detail(lm_num,'1');
	const lmDModal = document.getElementById('lmDModal');
	lmDModal.style.display = 'flex';
}
/* ====================== 내 신청글 모달 Div 상세 요소 생성 끝 ====================== */



/* ====================== 롤메이트 글 작성 ====================== */
$('#lmWriteBtn').on('click',function(){
	let sName = $('.lm_summonerName_write').val();
	
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



/* ====================== 글 삭제 ====================== */
function myAppDel(lm_num,id,e){	// 
	e.stopPropagation();
	$.ajax({
		method:'get',
		url:'/lolmate/myAppDel',
		data: {
			lm_num:lm_num,
			m_id:id,
		},
	}).done(function(res){
		if(res=='ok'){
			Swal.fire({
				icon : "success",
				title : "취소 성공!",
			});
			infoTabMyAppList(id);
			return;
		}
	})
	Swal.fire({
		icon : "error",
		text : "취소 실패..",
	});
}
/* ====================== 글 삭제 끝 ====================== */



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
		let id = document.getElementById('m_id').value;
		if(lmList["all"].length!=0){
			if(lmList["serch"].length!=0){
				$('#lmListT tbody').empty();
				for(let lm of lmList["serch"]){
					let newRow = $('<tr>');
					const gameModeCell = $('<td>').text(lm.lm_gameMode) // 게임 모드
					const tierCell = $('<td>').html(divHtml(lm.lm_tier,'emblem')) // 티어
					const summonerNameCell = $('<td>').text(lm.lm_summonerName) // 작성자 게임닉
					const myPCell = $('<td>').html(divHtml(lm.lm_myPosition,'position')) // 작성자 포지션
					const winrateCell = $('<td>').text(lm.lm_winrate) // 작성자 승률
					const findPCell = $('<td>').html(divHtml(lm.lm_findPosition,'position')) // 찾는 포지션
					const memoCell = $('<td>').text(lm.lm_memo) // 작성자 메모
					
					const btnCell = $('<td>');
					if(lm.m_id == id){
						if(lm.lm_end==0){
							btnCell.append($('<button>').attr('type', 'button').text('  확인  ').on('click', function() {
										mL_Detail(lm.lm_num,'0');
										const lmDModal = document.getElementById('lmDModal');
										lmDModal.style.display = 'flex';
									}));
						}else if(lm.lm_end==1){
							btnCell.append($('<button>').attr('type', 'button').prop('disabled', true).text('  닫힘  '));
						}
					}else{
						if(lm.lm_end==0){
							btnCell.append($('<button>').attr('type', 'button').attr('class', 'appBtn').text('  신청  ').on('click', function() {
										mL_Detail(lm.lm_num,'1');
										const lmDModal = document.getElementById('lmDModal');
										lmDModal.style.display = 'flex';
									}).prop('disabled', true));
						}else if(lm.lm_end==1){
							btnCell.append($('<button>').attr('type', 'button').prop('disabled', true).text('  닫힘  '));
						}
					}
					
					newRow.append(gameModeCell,tierCell,summonerNameCell,myPCell,winrateCell,findPCell,memoCell,btnCell)
					
					$('#lmListT #lmTbody').append(newRow);
				}
			}else{
				const newRow = $('<tr>');
				const newCell = $('<td>').attr('colspan', '8').append('<div class="lmListDiv">글이 존재하지 않습니다.</div>');
				newRow.append(newCell);
				$('#lmListT #lmTbody').append(newRow);
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
		
		$("#lmNotionDiv").empty();
		$("#lmNotionDiv").append(cntHtml);
		
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
/* ====================== gameMate,gameMode,tier에 따른 리스트 가져오기 끝 ====================== */



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
			if(tp.search("Iron")!=-1 || tp.search("IRON")!=-1){ html += '아이언'}
			else if(tp.search("Bronze")!=-1 || tp.search("BRONZE")!=-1){ html += '브론즈' }
			else if(tp.search("Silver")!=-1 || tp.search("SILVER")!=-1){ html += '실버' }
			else if(tp.search("Gold")!=-1 || tp.search("GOLD")!=-1){ html += '골드' }
			else if(tp.search("Platinum")!=-1 || tp.search("PLATINUM")!=-1){ html += '플래티넘' }
			else if(tp.search("Emerald")!=-1 || tp.search("EMERALD")!=-1){ html += '에메랄드' }
			else if(tp.search("Diamond")!=-1 || tp.search("DIAMOND")!=-1){ html += '다이아몬드' }
			else if(tp.search("Master")!=-1 || tp.search("MASTER")!=-1){ html += '마스터' }
			else if(tp.search("Grandmaster")!=-1 || tp.search("GRANDMASTER")!=-1){ html += '그랜드마스터' }
			else if(tp.search("Challenger")!=-1 || tp.search("CHALLENGER")!=-1){html += '챌린저'}
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
/* ====================== lmList 포지션 div 설정 끝 ====================== */



/* ====================== 포지션 이미지/툴팁 생성 ====================== */
function positionHtml(clName, selP) {
    console.log(selP);
    let po = ['top', 'jug', 'mid', 'adc', 'sup'];	let poKr = ['탑', '정글', '미드', '원딜(봇)', '서포터'];
    let po1 = ["Top", "Jungle", "Mid", "Bot", "Support"];	let po2 = ["selTop", "selJungle", "selMid", "selBot", "selSupport"];
    
    let html = '';
    if (selP === "All ") {
        html += '<label class="positionImg tooltip pAll" id="' + clName + 'pAll">';
        html += '<input type="checkbox" class="' + clName + '" name="' + clName + '"></input>';
        html += '<span class="tooltiptext tooltip-bottom">전체 라인</span></label>';
        for (let i = 0; i < po.length; i++) {
            html += '<label class="positionImg tooltip ' + po1[i] + '" id="' + clName + 'pAll">';
            html += '<input type="checkbox" class="' + clName + '" name="' + clName + '"></input>';
            html += '<span class="tooltiptext tooltip-bottom">' + poKr[i] + '</span></label>';
        }
    } else {
        let selectedPositions = selP.split(" ");
        html += '<label class="positionImg tooltip npAll" id="' + clName + 'pAll">';
        html += '<input type="checkbox" class="' + clName + '" name="' + clName + '"></input>';
        html += '<span class="tooltiptext tooltip-bottom">전체 라인</span></label>';
        for (let i = 0; i < po.length; i++) {
            let positionFound = false;
            for (let j = 0; j < selectedPositions.length; j++) {
                if (po[i] === selectedPositions[j]) {
                    html += '<label class="positionImg tooltip ' + po2[i] + '" id="' + clName + 'pAll">';
                    html += '<input type="checkbox" class="' + clName + '" name="' + clName + '"></input>';
                    html += '<span class="tooltiptext tooltip-bottom">' + poKr[i] + '</span></label>';
                    positionFound = true;
                    break;
                }
            }
            if (!positionFound) {
                html += '<label class="positionImg tooltip ' + po1[i] + '" id="' + clName + 'pAll">';
                html += '<input type="checkbox" class="' + clName + '" name="' + clName + '"></input>';
                html += '<span class="tooltiptext tooltip-bottom">' + poKr[i] + '</span></label>';
            }
        }
    }
    return html;
}
/* ====================== 포지션 이미지/툴팁 생성 끝 ====================== */


