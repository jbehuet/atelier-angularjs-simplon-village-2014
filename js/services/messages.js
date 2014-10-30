function messagesService(){
	
	var service = {
		messages : [ {user:'Jérôme', content:'First !'}, {user:'Eric', content:'Salut'} ],
		get : function(){
			return service.messages;
		},
		add: function(message){
			service.messages.push(message);
		},
		delete: function(id){
			service.messages.splice(id, 1);
		}
	};

	return service;
}