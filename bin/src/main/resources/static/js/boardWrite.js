/*
	
	 =================================================================
 	================= boardWrite.html의 javascript 파일 =================
	 =================================================================
 	
 */

$('#b_writerNick').on('keyup',function(){		// 익명게시글 닉네임이 회원 닉네임 중에 있는지 체크
	let anony = document.getElementById('anonymousBTN')
	let ano = false
	let nick = $('#b_writerNick').val()
	let unNickCheck={b_writerNick:nick}
	if(nick=="admin" || nick=="익명"){
			$('#unNickCheckTip').html('닉네임에 사용할 수 없는 단어가 포함되어 있습니다.').css('color','red')
			return false
	}
 	$.ajax({
		method:'get',
		url: '/board/unNickCheck',
		data: unNickCheck,
	}).done(function(res){
		console.log("res: ",res);
		if (res!="ok"){
			$('#unNickCheckTip').html('회원가입 되어있는 닉네임은 사용할 수 없습니다.').css('color','red')
			return false
		}
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
		return false
	})
	$('#unNickCheckTip').html('')
	ano=true
})		// 익명게시글 닉네임이 회원 닉네임 중에 있는지 체크 끝


function anonymousChange(){
	let nick = document.getElementById('nicknameBTN')
	let anony = document.getElementById('anonymousBTN')
	if(nick.className=='btn btn-primary'){
		nick.className = 'btn btn-outline-primary';
		anony.className = 'btn btn-primary';
		$('#b_writerNick').css('display','block')
	}else{
		nick.className = 'btn btn-primary';
		anony.className = 'btn btn-outline-primary';
		$('#b_writerNick').css('display','none')
		document.getElementById('b_writerNick').value="";
	}
}


function writeCheck() {		// 게시글 올리기 전 체크
	let title = $('#b_title').val()
	var contents = $('#summernote').summernote('code')
	
	/*if('<%=(String)session.getAttribute("member")%>'!="" && $('#b_writerNick').val()==""){
		ano=true
	}*/
	
	
	if (title == '') {
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "제목은 비워둘 수 없습니다.",
		});
		return false
	} else if (title.length > 15) {
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "제목은 15글자까지 작성할 수 있습니다.",
		});
		return false
	} else if (contents == '<p><br></p>') {
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "내용은 비워둘 수 없습니다.",
		});
		return false
	} else if (!ano){
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "회원가입된 닉네임입니다.",
		});
		return false
	}
	return true
}		// 게시글 올리기 전 체크 끝



/* ====================== 썸머노트 설정 시작 ====================== */
$(document).ready(function() {
	$('#summernote').summernote({
		lang : 'ko-KR' // default: 'en-US'
	});
});

$('#summernote').summernote({
	placeholder : '게시글을 작성해주세요.',
	tabsize : 2,
	height : 400,
	toolbar : [ [ 'style', [ 'style' ] ],
			[ 'font', [ 'bold', 'underline', 'clear' ] ],
			[ 'color', [ 'color' ] ],
			[ 'para', [ 'ul', 'ol', 'paragraph' ] ],
			[ 'table', [ 'table' ] ],
			[ 'insert', [ 'link', 'picture', 'video' ] ],
			[ 'view', [ 'fullscreen', 'codeview', 'help' ] ] ]
});
/* ====================== 썸머노트 설정 끝 ====================== */