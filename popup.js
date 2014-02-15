function login() {

	var u = username.value;
	var p = password.value;
	alert (u+p);

}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#login').addEventListener('click', login);
});
