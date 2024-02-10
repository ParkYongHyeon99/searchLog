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
		    let form = document.createElement('form');	// form 태그 생성
		    let input;
		    input = document.createElement('input');	// input 태그 생성
		    input.setAttribute('type', 'hidden');	// input 태그의 타입을 hidden으로 설정
		    input.setAttribute('name', 'b_num');	// input 태그의 name 설정
		    input.setAttribute('value', num);	// input 태그의 값 설정
			if(UD=="U"){
				//window.location.href = '/board/boardUpdate?b_num='+num;	< GetMapping
			    form.setAttribute('action', '/board/boardUpdate');
			}else if(UD=="D"){
			    form.setAttribute('action', '/board/boardDelete');
			}
		    form.appendChild(input);	// input 태그를 form 태그 안에 종속
		    form.setAttribute('method', 'post');	// PostMapping
		    document.body.appendChild(form);	// body에 form 태그 종속
		    form.submit();	// form submit
		}else{
			alert('비밀번호가 틀렸거나 오류가 발생했습니다.')
			document.getElementById('unBPw').value=null
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
