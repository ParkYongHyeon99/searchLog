/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

/* ====================== 모달 띄우기 ====================== */
//모달 열기
const dmModal = document.getElementById('dmModal')
const dmBtn = document.getElementById('dmBtn')
dmBtn.addEventListener('click', e =>{
	dmModal.style.display = 'flex'
})
const lmDModal = document.getElementById('lmDModal')

//모달 닫기
const dmModalcloseBtn = dmModal.querySelector('.close-area')
dmModalcloseBtn.addEventListener('click', e => {
	dmModal.style.display = 'none'
	end()
})
const lmDModalcloseBtn = lmDModal.querySelector('.close-area')
lmDModalcloseBtn.addEventListener('click', e => {
	lmDModal.style.display = 'none'
	//end()
})

/* 외부영역 클릭시 모달 닫기 */
/*$(document).mouseup(function (e){
	if($('#dmModal').has(e.target).length === 0){ $('#dmModal').hide(); }
});*/

/* ESC 키 누를시 팝업 닫기 */
$(document).keydown(function(e){
    var code = e.keyCode || e.which;	//keyCode 구 브라우저, which 현재 브라우저
    if (code == 27) {	// 27 = ESC 키번호
        $('#dmModal').hide();
        $('#lmDModal').hide();
        end()
    }
});



/* ---------------------------------------------------------------- */


function end(){
	$("input[name=lm_myPosition_write]").prop("checked", false);
	$("input[name=lm_myPosition_write][value=All]").prop("checked", true);
	$("input[name=lm_findPosition_write]").prop("checked", false);
	$("input[name=lm_findPosition_write][value=All]").prop("checked", true);
	poImgSet2('writemypAll','pAll');	poImgSet2('writemy','position');
	poImgSet2('writefindpAll','pAll');	poImgSet2('writefind','position');
	document.getElementById('discodeOn').className = 'noSelectBtn';
	document.getElementById('discodeOff').className = 'selectBtn';
	document.forms['lmWriteFrm'].reset();
	
	document.getElementById('dOn').className = 'noSelectBtn';
	document.getElementById('dOff').className = 'selectBtn';
	
}

function poImgSet2(id,p){
	if(p=='pAll'){
		document.getElementById(id).style.backgroundImage = "url('../img/position/Diamond-"+p+".png')";
	}else{
		let po = ["Top","Jungle","Mid","Bot","Support"];
		for (let i=0; i<po.length; i++){
			document.getElementById(id+po[i]).style.backgroundImage = "url('../img/position/Silver-"+po[i]+".png')";
		}
	}
}