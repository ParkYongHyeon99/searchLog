function showTab(tabId) {
	// 모든 탭의 내용을 감춤
	document.querySelectorAll('.tab-content').forEach(function(tabContent) {
		tabContent.style.display = 'none';
	});
	// 선택한 탭의 내용을 보이게 함
	document.getElementById(tabId + '-content').style.display = 'block';
}