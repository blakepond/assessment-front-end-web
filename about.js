console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted Successfully")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let compliment = document.getElementById("cat")

compliment.addEventListener("mouseover", function (event){
	alert("You're beauitful :')")
})