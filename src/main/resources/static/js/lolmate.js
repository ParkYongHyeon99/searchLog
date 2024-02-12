/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

 
$(()=>{
	$.ajax({
		method:'get',
		url: '/lolmate/list',
		data: chIdSend,
	}).done(function(res){
		console.log()
	}).fail((err,status)=>{
	console.log("err:", err);
	console.log("status:", status);
	})
}

$('input[name=lm_gameMate]').change(function(){
	var test = $("input[name='payment']:checked").val();
	alert(test);			
})

$('select[name=lm_gameMode]').on('change',function(){
  let lm_gameMode = $(this).val()); //value값 가져오기
})
$('select[name=tier]').change(function(){
  let lm_tier = $(this).val()); //value값 가져오기
})

/*	https://oneriverjj.tistory.com/13
	https://myhappyman.tistory.com/61
	https://rgba22202551.tistory.com/11
	*/