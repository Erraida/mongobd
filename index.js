function getRandomInt() {
  		return Math.floor(Math.random() * 1000000);
	}
	document.forms['formdata'].onsubmit = function(){

		let title = document.getElementById('name').value;
		let text = document.getElementById('address').value;
		let id = getRandomInt()
		let data = {
			'id' : id,
			'title' : title,
			'text' : text
		}
		console.log(data);


		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://data.mongodb-api.com/app/application-0-kuunh/endpoint/articles');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader('apiKey', 'kS8LnhKZj5Je7jzBXZHzLAwwR4tfulfLmjSnsOR2DNakYQ0seCaK9PnAmGQfEDuU');
		xhr.setRequestHeader('api-key', 'kS8LnhKZj5Je7jzBXZHzLAwwR4tfulfLmjSnsOR2DNakYQ0seCaK9PnAmGQfEDuU');
		xhr.send();
		alert(xhr.response);
		
  
		return false;
	}
