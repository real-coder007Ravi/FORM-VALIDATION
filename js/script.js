let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("tel-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

function validateName() {
	let name = document.getElementById("contact-name").value;
	if (name.length == 0) {
		nameError.innerHTML = "Name is required";
		return false;
	}
	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = "Write Full Name";
		return false;
	}
	nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}
function validatePhone() {
	let phone = document.getElementById("contact-phone").value;
	if (phone.length == 0) {
		phoneError.innerHTML = "Phone No is required";
		return false;
	}
	if (phone.length !== 10) {
		phoneError.innerHTML = "Phone No should be 10 digits";
		return false;
	}
	if (!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = "Only Digits";
		return false;
	}
	phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

function validateEmail() {
	let email = document.getElementById("contact-email").value;
	if (email.length == 0) {
		emailError.innerHTML = "Email is required";
		return false;
	}
	if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
		emailError.innerHTML = "Email Invalid";
		return false;
	}
	emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}
function validateMessage() {
	let message = document.getElementById("contact-message").value;
	let required = 30;
	let left = required - message.length;
	if (left > 0) {
		messageError.innerHTML = left + "More characters required";
		return false;
	}
	messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}
function validateSubmit() {
	if (
		!validateName() ||
		!validatePhone() ||
		!validateEmail() ||
		!validateMessage()
	) {
		("block");
		submitError.innerHTML = "Please fix the error to submit";
		setTimeout(() => {
			submitError.style.display = "none";
		}, 3000);
		return false;
	}
}
