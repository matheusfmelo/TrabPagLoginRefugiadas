const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim usado para remover os espaços em branco
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const senhaValue = senha.value.trim();
	const senha2Value = senha2.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Usuário não pode estar vazio');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email não pode estar vazio');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'O email não é válido');
	} else {
		setSuccessFor(email);
	}
	
	if(senhaValue === '') {
		setErrorFor(senha, 'Senha não pode estar vazio');
	} else {
		setSuccessFor(senha);
	}
	
	if(senha2Value === '') {
		setErrorFor(senha2, 'Senha não pode estar vazio');
	} else if(senhaValue !== senha2Value) {
		setErrorFor(senha2, 'As senhas não coincidem');
	} else{
		setSuccessFor(senha2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-controle error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-controle success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}