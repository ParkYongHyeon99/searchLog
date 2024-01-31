/*
	
	 =================================================================
 	================= boardUpdate.html의 javascript 파일 =================
	 =================================================================
 	
 */

 
 $('#board_content').summernote('code', '${board_data.BOARD_CONTENT}');
 
 
 
 function unUD(num,UD){
	 
	let unPwCheck={
			b_pw:document.getElementById('unBPw').value,
			b_num:num
		}
 	$.ajax({
		method:'get',
		url: '/board/unPwCheck',
		data: unPwCheck,
	}).done(function(res){
		 if(res=="ok"){
			 if(UD=="U"){
				 window.location.href = '/board/boardUpdate?b_num='+num;
			 }else if(UD==""){
				 return '/board/boardDelete?b_num='+num;
			 }
		 }else{
			 alert('비밀번호가 틀렸거나 오류가 발생했습니다.')
		 }
		 
		return res
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
		alert('오류가 발생했습니다.')
	})
 }
 