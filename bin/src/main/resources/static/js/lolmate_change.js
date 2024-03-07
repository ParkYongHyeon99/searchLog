/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

/* ====================== 탭 변경 ====================== */
$('#lmListChoice').on('click',function(){
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
		infoTabMyAppList(id);
	}
})
/* ====================== 탭 변경 끝 ====================== */



/* ====================== 이미지 변경 함수 ====================== */
function poImgSet(id,sel,p){
	document.getElementById(id).style.backgroundImage = "url('../img/position/"+sel+"-"+p+".png')";
}
/* ====================== 이미지 변경 함수 끝 ====================== */



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
/* ====================== gameMate,gameMode,tier 변경 체크 끝 ====================== */



/* ====================== 롤메이트 글 작성 선택 변경 체크 ====================== */
/* ====================== 내 포지션 변경 ====================== */
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
    } else {	// "All"을 선택하지 않은 경우
        if (myPoCheck.length === po.length) {	// 선택된 항목의 수가 전체 항목 수와 같은 경우
            $("input[name=lm_myPosition_write]").not(this).prop("checked", false);
            $("input[name=lm_myPosition_write][value=All]").prop("checked", true);
            po = ['pAll']
        } else {	// 선택된 항목의 수가 전체 항목 수와 같지 않은 경우
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
/* ====================== 찾는 포지션 변경 ====================== */
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
    } else {	// "All"을 선택하지 않은 경우
        if (fiPoCheck.length === po.length) {	// 선택된 항목의 수가 전체 항목 수와 같은 경우
            $("input[name=lm_findPosition_write]").not(this).prop("checked", false);
            $("input[name=lm_findPosition_write][value=All]").prop("checked", true);
            po = ['pAll']
        } else {	// 선택된 항목의 수가 전체 항목 수와 같지 않은 경우
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

/* ====================== 디스코드 여부 변경 ====================== */
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

/* ====================== 듀오/멘토 선택 변경 ====================== */
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
/* ====================== 롤메이트 글 작성 선택 변경 체크 끝 ====================== */




