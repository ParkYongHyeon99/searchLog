/*
	
	 =================================================================
 	================= boardUpdate.html의 javascript 파일 =================
	 =================================================================
 	
 */

 
 $('#board_content').summernote('code', '${board_data.BOARD_CONTENT}');
 
 
 function unPwCheck(num){
	let unPwCheck={
			b_pw:$('#unBPw').val(),
			b_num:num
		}
	alert('비번체크중')
 	$.ajax({
		method:'get',
		url: '/board/unPwCheck',
		data: unPwCheck,
	}).done(function(res){
		console.log("res: ",res);
		if (res=="ok"){
			return true
		}else{
			return false
		}
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
		return false
	})
 }
 
 function unUD(num,UD){
	 if(unPwCheck(num)){
		 alert('성공')
		 if(UD=="U"){
			 
		 }else if(UD=="D"){
			 
		 }
	 }else{
		 alert('비밀번호가 틀렸거나 오류가 발생했습니다.')
	 }
 }
 