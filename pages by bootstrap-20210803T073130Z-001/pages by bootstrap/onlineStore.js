//var text = `<div class="col-4 card"><img class = "img-thumbnail" src = "https://www.w3schools.com/bootstrap4/img_avatar3.png" style = "width:350px" /><div class="card-body text-center "><h4 class="card-title">${}</h4> <p class="card-text">price:90</p> <a href="#" class="btn btn-primary">add to cart</a></div></div >`;

var text = '';

function getAllUsers() {


	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		//.then(json =>alert(JSON.stringify(json)));
		.then(json => {

			var userContainer= document.getElementById("user-list");
		


			for (let user of json) {
				text = `<div class="col-4 card"><img class = "img-thumbnail" src = "https://www.w3schools.com/bootstrap4/img_avatar3.png" style = "width:350px" /><div class="card-body text-center "><h4 class="card-title">${user.username}</h4><p class="card-text">${user.id}</p><p class="card-text">${user.address.city}</p> <p class="card-text">${user.phone}</p> <a href="#" class="btn btn-primary">user profile</a></div></div >`;

				userContainer.innerHTML = userContainer.innerHTML + text;

            }
			

		}).catch(function () {
			alert("error");
		});
	

}

//var text = "<div class="col card">< img class="img - thumbnail" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFlemEZiQtkvgF-taeDL1K6OEs5NnYnABpCA&usqp=CAU" style = "width:350px" /><div class="card-body text-center "><h4 class="card-title">chiar</h4> <p class="card-text">price:90</p> <a href="#" class="btn btn-primary">add to cart</a></div></div >";



getAllUsers()



//function gejson(response) {

//	//var x = response.json();
//	//return x;
//	return response.json();
//}




function getUserById() {

	//search-input
	var userId=document.getElementById("search-input").value;

	fetch('https://jsonplaceholder.typicode.com/users/'+userId)
		.then(response => response.json())
		//.then(json =>alert(JSON.stringify(json)));
		.then(user => {

			var userContainer = document.getElementById("user-list");

			text = `<div class="col-4 card"><img class = "img-thumbnail" src = "https://www.w3schools.com/bootstrap4/img_avatar3.png" style = "width:350px" /><div class="card-body text-center "><h4 class="card-title">${user.username}</h4><p class="card-text">${user.id}</p><p class="card-text">${user.address.city}</p> <p class="card-text">${user.phone}</p> <a href="#" class="btn btn-primary">user profile</a></div></div >`;


			

				userContainer.innerHTML =  text;

			


		});


}



var z;

function getMyName(x) 

{
let myName="Mohammed";

return myName;


}