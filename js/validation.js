var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
	var name = document.getElementById('contact-name').value;

	if(name.length == 0){
		nameError.innerHTML = 'Name is required';
		return false;
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
		nameError.innerHTML = 'Write full name';
		return false;
	}
	nameError.innerHtml = '<img src="img/check-coin.jpg">';
	return true;
}

function validatePhone(){

	var phone = document.getElementById('contact-phone').value;

	if(phone.length == 0){
		phoneError.innerHTML = 'Phone number is required';
		return false;
	}
	if(phone.length !== 10){
		phoneError.innerHtml = 'Phone number should be 10 digits';
		return false;
	}
	if(phone.match(/^[0-9]{10}$/)){
		phoneError.innerHtml = 'Phone number is required';
		return false;
	}
	phoneError.innerHTML = '<i class="bi bi-check-circle"></i>';
	return true;
}



