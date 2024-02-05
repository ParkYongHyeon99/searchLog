/*
	
	 =================================================================
 	================= boardDetail.html의 javascript 파일 =================
	 =================================================================
 	
 */

/* ====================== 게시글 수정/삭제 시 비번 체크 ====================== */
function unUD(num,UD){
	console.log("num:",num,"/ UD:",UD)
	let unPwCheck={
			b_pw:document.getElementById('unBPw').value,
			b_num:num
		}
 	$.ajax({
		method:'get',
		url: '/board/unPwCheck',
		data: unPwCheck,
	}).done(function(res){
		console.log("res: ",res)
		if(res=="ok"){
			if(UD=="U"){
				window.location.href = '/board/boardUpdate?b_num='+num;
			}else if(UD=="D"){
				return true
			}
		}else{
			alert('비밀번호가 틀렸거나 오류가 발생했습니다.')
		}
		
		return false
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
		alert('오류가 발생했습니다.')
		return false
	})
}
/* ====================== 게시글 수정/삭제 시 비번 체크 끝 ====================== */


/* ====================== 댓글 작성 후 불러오기 ====================== */
/*$.ajax({
	method:'get',
	url:'/board/commentList',
	data: {b_num:[[${bDto.b_num}]]},
}).done(function(res){
	console.log(res)
}).fail((err,status)=>{
	console.log("err:", err);
	console.log("status:", status);
	alert('오류가 발생했습니다.')
	return false
})*/
/* ====================== 댓글 작성 후 불러오기 끝 ====================== */
