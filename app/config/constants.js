app.constant('CONSTANTS', (function(){ 
	var root = 'https://realstackunderflow.firebaseio.com/';

	var questions = root + 'questionList/'
	var tags = root + 'tags/' 
	return {
		fbRef: root,
		questions: questions,
		tags: tags
	};
}()));