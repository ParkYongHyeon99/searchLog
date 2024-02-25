/*
	
	 =================================================================
 	================= login_join.html의 javascript 파일 =================
	 =================================================================
 	
 */



/* ====================== transition ====================== */
$('#frmBtn').on('click',function(){
	var btnClass = $('#frmBtn').attr('class');
	if(btnClass == 'join'){
		$('#login').css('display','none');
		$('#join').css('display','block');
		document.getElementById('frmBtn').className = 'login';
		document.getElementById('frmBtn').innerHTML = '로그인하러가기';
	}else if(btnClass == 'login'){
		$('#join,#idTip,#nickTip,#emailTip,#chPw').css('display','none');
		$('#login').css('display','block');
		document.getElementById('frmBtn').className = 'join';
		document.getElementById('frmBtn').innerHTML = '회원가입하러가기';
	}
	
	const btnChange = document.querySelector('.allBigBox');
	btnChange.classList.toggle('is-active');
})
/* ====================== transition ====================== */


let useId = false;	// id 체크용
let useNick = false;	// nick 체크용
let useEmail = false;	// email 체크용
let usePw = false;	// pw 체크용

/* ====================== 중복 체크 시작 ====================== */
$('#m_id').on('keyup blur',function(){		// 중복 아이디 체크
	let id = $('#m_id').val();
	document.getElementById("idTip").style.display = 'block';
	if (id==''){
		$('#idTip').html('아이디를 입력해주세요.').css('color','red');
		return;
	}else if(id.search(/\W|\s/g) > -1){
		$('#idTip').html('아이디에 특수문자, 공백, 한글은 입력할 수 없습니다.').css('color','red');
		return;
	}
	let chIdSend = {m_id:id};
	console.log("chIdSend: ",chIdSend);
	
	$.ajax({
		method:'get',	// post로 보낼 필요 없음
		url: '/member/idCheck',
		data: chIdSend,
	}).done(function(res){
		console.log("res: ",res);
		if(res=='ok'){
			$('#idTip').html('아이디 사용 가능!').css('color','blue');
			useId = true;
		}else{
			$('#idTip').html('아이디 사용 불가!').css('color','red');
			useId = false;
		}
		
	}).fail((err,status)=>{
	console.log("err:", err);
	console.log("status:", status);
	useId=false;
	})
});			// 중복 아이디 체크 끝
$('#m_nick').on('keyup blur',function(){		// 중복 닉네임 체크
	let nick = $('#m_nick').val();
	document.getElementById("nickTip").style.display = 'block';
	if (nick==''){
		$('#nickTip').html('닉네임을 입력해주세요.').css('color','red');
		return;
	}else if (nick.indexOf('익명')==0){
		$('#nickTip').html('닉네임에 포함할 수 없는 단어가 있습니다.').css('color','red');
		return;
	}
	let chNickSend = {m_nick:nick};
	console.log("chNickSend: ",chNickSend);
	
	$.ajax({
		method:'get',
		url: '/member/nickCheck',
		data: chNickSend,
	}).done(function(res){
		console.log("res: ",res);
		if(res=='ok'){
			$('#nickTip').html('닉네임 사용 가능!').css('color','blue');
			useNick = true;
		}else{
			$('#nickTip').html('닉네임 사용 불가!').css('color','red');
			useNick = false;
		}
		
	}).fail((err,status)=>{
	console.log("err:", err);
	console.log("status:", status);
	useId=false;
	})
});			// 중복 닉네임 체크 끝
$('#m_email').on('keyup blur',function(){		// 중복 이메일 체크
	let email = $('#m_email').val();
	document.getElementById("emailTip").style.display = 'block';
	if (email==''){
		$('#emailTip').html('이메일을 입력해주세요.').css('color','red');
		return;
	}
	let chEmailSend = {m_email:email};
	console.log("chEmailSend: ",chEmailSend);
	
	$.ajax({
		method:'get',
		url: '/member/emailCheck',
		data: chEmailSend,
	}).done(function(res){
		console.log("res: ",res);
		if(res=='ok'){
			$('#emailTip').html('이메일 사용 가능!').css('color','blue');
			useEmail = true;
		}else{
			$('#emailTip').html('이메일 사용 불가!').css('color','red');
			useEmail = false;
		}
		
	}).fail((err,status)=>{
	console.log("err:", err);
	console.log("status:", status);
	useId=false;
	})
});			// 중복 이메일 체크 끝
/* ====================== 중복 체크 끝 ====================== */


/* ====================== 공란 체크 시작 ====================== */
$('#m_email').on('blur',function(){		// 이메일 공란 체크
	let con = document.getElementById("emailTip");
	con.style.display = 'block';
	if($('#m_email').val()=='')	$('#emailTip').html("이메일을 입력해주세요.").css("color",'red');
})		// 이메일 공란 체크 끝
$('#m_pw').on('blur',function(){		// 비밀번호 공란 체크
	let con = document.getElementById("chPw");
	con.style.display = 'block';
	if($('#m_pw').val()=='')$('#chPw').html("비밀번호를 입력해주세요.").css("color",'red');
})		// 비밀번호 공란 체크
$('#chM_pw').blur(function(){		// 비밀번호 확인 공란 체크
	let pw = $('#m_pw').val();
	let chPw = $('#chM_pw').val();
	let con = document.getElementById("chPw");
	con.style.display = 'block';
	if (pw!='' && chPw==''){
		$('#chPw').html("비밀번호 확인 칸은 비워둘 수 없습니다.").css("color",'red');
		return;
	}
})		// 비밀번호 확인 공란 체크 끝
/* ====================== 공란 체크 끝 ====================== */


$('#chM_pw').on('click',function(){	// 비밀번호보다 먼저 비밀번호 확인란 클릭 시 체크
	let pw = $('#m_pw').val();
	let con = document.getElementById("chPw");
	con.style.display = 'block';
	if (pw==''){
		$('#chPw').html("비밀번호를 먼저 입력해주세요.").css("color",'red');
		$('#m_pw').focus();
		return;
	}	// 비밀번호보다 먼저 비밀번호 확인란 클릭 시 체크 끝
})


$('#joinPwDiv').on('keyup blur', function(){		// 비밀번호 체크
	let pw = $('#m_pw').val();
	let chPw = $('#chM_pw').val();
	let con = document.getElementById("chPw");
	con.style.display = 'block';
	if (pw!=''){
		if(pw.length<=20 && pw.length>=8){
			$('#chPw').html("");
		}else if(pw.search(/\W|\s/g) > -1){
			$('#chPw').html('비밀번호에 특수문자, 공백, 한글은 입력할 수 없습니다.').css('color','red');
			return;
		}else if(pw.length>20 || pw.length<8){
			$('#chPw').html("비밀번호의 길이는 8~20로 정해주세요.").css("color",'red');
			return;
		}
		
		if(chPw!='' && pw!=chPw){
			$('#chPw').html("비밀번호가 다릅니다.").css("color",'red');
		}else if(pw==chPw){
			usePw = true;
			con.style.display = 'none';
		}
		return;
	}
	usePw = false;
});			// 비밀번호 체크 끝


function joinCheck(){	// 회원가입 가능 체크
	if (!useId){
		alert("아이디를 확인해주세요.");
		$('#m_id').focus();
		return false;
	}else if(!useNick){
		alert("닉네임을 확인해주세요.");
		$('#m_nick').focus();
		return false;
	}else if(!useEmail){
		alert("이메일을 확인해주세요.");
		$('#m_email').focus();
		return false;
	}else if(!usePw){
		alert("비밀번호를 확인해주세요.");
		$('#m_pw').focus();
		return false;
	}
	//alert("회원가입 성공!")
	return true;
}	// 회원가입 가능 체크 끝

