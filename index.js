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
		xnr.withCredentials = true;
		xhr.open('GET', 'https://data.mongodb-api.com/app/application-0-kuunh/endpoint/articles', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
		xhr.setRequestHeader('api-key', 'kS8LnhKZj5Je7jzBXZHzLAwwR4tfulfLmjSnsOR2DNakYQ0seCaK9PnAmGQfEDuU');
		xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNhbGViIiwiaWF0IjoxNjE3MzEzNDIwLCJleHAiOjE2ODg4NDk0MjAsImF1ZCI6ImJvaWJvaS1jdWw4ciJ9.o3f8x5_0pnZGaZGwUrb6TuDoDhIzy8ZiiDDYngEYZAY');
		xhr.send();
		alert(xhr.response);
		
  
		return false;
	}
