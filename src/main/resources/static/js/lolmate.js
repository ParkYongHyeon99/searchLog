/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

 
$(()=>{
/*	$.ajax({
		method:'get',
		url: '/lolmate/list',
		data: chIdSend,
	}).done(function(res){
		console.log()
	}).fail((err,status)=>{
	console.log("err:", err);
	console.log("status:", status);
	})*/
	
	
	$('input[name=lm_gameMate]').on('change',function(){
		var lm_gameMate = $('input[name=lm_gameMate]:checked').val();
		console.log(lm_gameMate)
	})
	
	$('select[name=lm_gameMode]').on('change',function(){
		let lm_gameMode = $(this).val(); //value값 가져오기
		console.log(lm_gameMode)
	})
	$('select[name=tier]').on('change',function(){
		let lm_tier = $(this).val();
		console.log(lm_tier)
	})
})