/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

 
/* ====================== 모달 띄우기 ====================== */
//모달 열기
const modal = document.getElementById('modal')
const btn_modal = document.getElementById('btn-modal')
btn_modal.addEventListener('click', e => {
	modal.style.display = 'flex'
})
const dmModal = document.getElementById('dmModal')
const dmBtn = document.getElementById('dmBtn')
dmBtn.addEventListener('click', e =>{
	dmModal.style.display = 'flex'
})
//모달 닫기
const closeBtn = modal.querySelector('.close-area')
closeBtn.addEventListener('click', e => {
	modal.style.display = 'none'
})
const dmModalcloseBtn = dmModal.querySelector('.close-area')
dmModalcloseBtn.addEventListener('click', e => {
	dmModal.style.display = 'none'
})
/* 외부영역 클릭시 모달 닫기 */
$(document).mouseup(function (e){
	if($('#modal').has(e.target).length === 0){ $('#modal').hide(); }
	if($('#dmModal').has(e.target).length === 0){ $('#dmModal').hide(); }
});
/* ESC 키 누를시 팝업 닫기 */
$(document).keydown(function(e){
    var code = e.keyCode || e.which;	//keyCode 구 브라우저, which 현재 브라우저
    if (code == 27) {	// 27 = ESC 키번호
        $('#modal').hide();
        $('#dmModal').hide();
    }
});