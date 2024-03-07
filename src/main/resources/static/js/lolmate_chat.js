/*
	
	 =================================================================
 	================= lolmate.html의 javascript 파일 =================
	 =================================================================
 	
 */

/* ====================== 신청자의 채팅 ====================== */
function appChat(lm_num,id,lm_master,category){
	if(category=='1'){	// 신청버튼 클릭 시 신청부터 진행
		$.ajax({
			method:'get',
			url:'/lolmate/myLmApp',
			data: {
				lm_num:lm_num,
				lm_app_m_id:id,
				lm_app_summonerName:document.getElementById('appSName').value,
			},
		}).done(function(res){
			if(res==null){
				Swal.fire({
					icon : "error",
					text : "신청 실패..",
				});
				return;
			}else{
			}
		})
	}
	
	chat(lm_num,lm_master,'0')
}
/* ====================== 신청자의 채팅 끝 ====================== */



/* ====================== 채팅 출력 ====================== */
function chat(lm_num,lm_id,category){
	var id = document.getElementById('m_id').value
	let app_name = ''
	if(category == '1'){ app_name = lm_id }
		else{ app_name = id }
	$('#lmDMContent2').html('');
	$.ajax({
		method:'get',
		url:'/lolmate/appChatList',
		data: {
			lm_num:lm_num,
			app_name:app_name,
		},
	}).done(function(appChatList){
		var parentDiv = document.getElementById('lmDMContent2');
		var childDiv = document.createElement('div');
		if(category=='1'){
			var backBtn = document.createElement('button');
			backBtn.textContent = '  ⇐  ';
	        backBtn.setAttribute('id', 'chat-backBtn');
	        backBtn.onclick = function(){
				appList(lm_num)
			}
			childDiv.appendChild(backBtn);
		}
		var chatDiv = document.createElement('div');
        chatDiv.setAttribute('id', 'chat-div');
        
        if(appChatList.length<1){
			var chatText = document.createElement('div');
			chatText.textContent = '아직 대화 내역이 없습니다.';
			chatText.setAttribute('class','noText')				// << css 적용해야함
			chatDiv.appendChild(chatText);
		}else{
			for(let i=0; i<appChatList.length; i++){
				var chatDivBox = document.createElement('div');
				var chatText = document.createElement('div');
				var chatDate = document.createElement('h5');
				
				chatText.textContent = appChatList[i].lm_app_chat;
				chatDate.textContent = appChatList[i].lm_app_chat_date;
				if(appChatList[i].lm_app_m_id===id){
					chatDivBox.setAttribute('class','myAppendChat')
				}else{
					chatDivBox.setAttribute('class','appAppendChat')
				}
				
				chatDivBox.appendChild(chatText);
				chatDivBox.appendChild(chatDate);
				chatDiv.appendChild(chatDivBox);
			}
		}
		var appendChatDiv = document.createElement('div');
        appendChatDiv.setAttribute('id', 'chat-box');
		
		var appendChat = document.createElement('textarea');
        appendChat.setAttribute('type', 'text');
        appendChat.setAttribute('id', 'chat-text');
        appendChat.setAttribute('placeholder', '채팅을 입력하세요.');
        
        var appendChatBtn = document.createElement('button');
        appendChatBtn.textContent = '  ↲  ';
        appendChatBtn.onclick = function() {
			let lm_master=''
			if(category=='1'){ lm_master=id; }
				else{ lm_master=lm_id }
            $.ajax({
				method:'get',
				url:'/lolmate/chatAppend',
				data: {
					lm_num:lm_num,
					lm_app_m_id:id,
					lm_app_chat:$('#chat-text').val(),
					recipient_m_id:lm_id,
					lm_master:lm_master
				},
			}).done(function(res){
				console.log('res: '+res)
				if(res){
					if(category=='1'){
						chat(lm_num,lm_id,'1');
					}else{
						chat(lm_num,lm_master,'0');
					}
				}else{
					Swal.fire({
						icon : "error",
						text : "보내기 실패..",
					});
				}
			})
        };
		
		childDiv.appendChild(chatDiv);
		appendChatDiv.appendChild(appendChat);
		appendChatDiv.appendChild(appendChatBtn);
		childDiv.appendChild(appendChatDiv);
		parentDiv.appendChild(childDiv);
		
		var element = document.getElementById('chat-div');
		element.scrollTop = element.scrollHeight;
	})
}
/* ====================== 채팅 출력 끝 ====================== */


