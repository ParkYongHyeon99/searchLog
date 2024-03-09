/*
	
	 =================================================================
 	================= boardUpdate.html의 javascript 파일 =================
	 =================================================================
 	
 */

/* ====================== 글 수정(작성) 가능 여부 ====================== */
 function writeCheck() {
	let title = $('#b_title').val()
	var contents = $('#summernote').summernote('code')

	if (title == '') {	// 제목 확인
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
/* ====================== 글 작성 가능 여부 끝 ====================== */


/* ====================== 썸머노트 설정 시작 ====================== */
$(()=>{
	$('#summernote').summernote({
		placeholder : '게시글을 작성해주세요.',
		tabsize : 2,
		height : 400,
		toolbar : [ [ 'style', [ 'style' ] ],
				[ 'font', [ 'bold', 'underline', 'clear' ] ],
				[ 'color', [ 'color' ] ],
				[ 'para', [ 'ul', 'ol', 'paragraph' ] ],
				[ 'insert', [ 'link'] ],	// , 'picture', 'video' 
				[ 'view', [ 'fullscreen', 'codeview', 'help' ] ] ]
	 });
	 
	$('#summernote').summernote({
		lang : 'ko-KR'
	});
})
/* ====================== 썸머노트 설정 끝 ====================== */