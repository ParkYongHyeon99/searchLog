/*
	
	 =================================================================
 	================= boardWrite.html의 javascript 파일 =================
	 =================================================================
 	
 */

let ano = false
let anoPw = false


/* ====================== 회원일 시 익명 닉네임, 비밀번호 input 태그 가림 ====================== */
$(()=>{
	let id = document.getElementById('writerId').value
	if(id != ""){
		$('#b_writerNick').css('display','none')
		$('#b_pw').css('display','none')
		ano = true
		anoPw = true
	}
})
/* ====================== 회원일 시 익명 닉네임, 비밀번호 input 태그 가림 ====================== */


/* ====================== 회원의 게시글 공개/익명 선택 버튼 ====================== */
function anonymousChange(){
	let nick = document.getElementById('nicknameBTN')
	let anony = document.getElementById('anonymousBTN')
	
	if(nick.className=='btn btn-primary'){
		nick.className = 'btn btn-outline-primary';
		anony.className = 'btn btn-primary';
		$('#b_writerNick').css('display','block')
		ano = false
	}else{
		nick.className = 'btn btn-primary';
		anony.className = 'btn btn-outline-primary';
		$('#b_writerNick').css('display','none')
		document.getElementById('b_writerNick').value="";
		ano = true
	}
}
/* ====================== 회원의 게시글 공개/익명 선택 버튼 끝 ====================== */


/* ====================== 익명게시글 닉네임이 회원 닉네임 중에 있는지 체크 ====================== */
$('#b_writerNick').on('keyup',function(){
	let nick = $('#b_writerNick').val()
	let unNickCheck={b_writerNick:nick}
	if(nick==""){
		$('#unNickCheckTip').html('닉네임은 비울 수 없습니다.').css('color','red')
		ano=false
		return
	}else if(nick=="admin" || nick=="익명"){
		$('#unNickCheckTip').html('닉네임에 사용할 수 없는 단어가 포함되어 있습니다.').css('color','red')
		ano=false
		return
	}
 	$.ajax({
		method:'get',
		url: '/board/unNickCheck',
		data: unNickCheck,
	}).done(function(res){
		console.log("res: ",res);
		if (res!="ok"){
			$('#unNickCheckTip').html('회원가입 되어있는 닉네임은 사용할 수 없습니다.').css('color','red')
			ano=false
		}else{
			$('#unNickCheckTip').html('')
			ano=true
		}
	}).fail((err,status)=>{
		console.log("err:", err);
		console.log("status:", status);
		ano=false
	})
})
/* ====================== 익명게시글 닉네임이 회원 닉네임 중에 있는지 체크 끝 ====================== */


/* ====================== 비밀번호 관련 체크 ====================== */
// 닉네임보다 비밀번호 먼저 적으려는지 확인
$('#b_pw').on('click', function(){
	if (!ano){
		$('#unNickCheckTip').html("닉네임을 먼저 확인해주세요.").css("color",'red');
		$('#b_writerNick').focus();
	}
})

// 비밀번호 확인
$('#b_pw').on('keyup', function(){
	let pw = $('#b_pw').val()
	if(pw==""){
		$('#unNickCheckTip').html('비밀번호는 비울 수 없습니다.').css('color','red')
		anoPw=false
	}else if(pw.length<=2){
		$('#unNickCheckTip').html('비밀번호의 길이는 2자 이상으로 해주세요.').css('color','red')
		anoPw=false
	}else{
		anoPw=true
		$('#unNickCheckTip').html('')
	}
})
/* ====================== 비밀번호 관련 체크 ====================== */


/* ====================== 게시글 올리기 전 체크 ====================== */
function writeCheck() {
	let title = $('#b_title').val()
	var contents = $('#summernote').summernote('code')
	if (!ano){	// 닉네임 확인
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "닉네임을 확인해주세요.",
		});
		return false
	}else if(!anoPw){	// 비밀번호 확인
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "비밀번호를 확인해주세요.",
		});
		return false
	}else if (title == '') {	// 제목 확인
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "제목은 비워둘 수 없습니다.",
		});
		return false
	} else if (title.length > 15) {	// 제목 길이 확인
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "제목은 15글자까지 작성할 수 있습니다.",
		});
		return false
	} else if (contents == '<p><br></p>') {	// 내용 확인
		Swal.fire({
			icon : "error",
			title : "Oops...",
			text : "내용은 비워둘 수 없습니다.",
		});
		return false
	}
	return true
}
/* ====================== 게시글 올리기 전 체크 끝 ====================== */



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