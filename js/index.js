document.getElementById('loginForm').addEventListener('submit', (event) => {
	event.preventDefault();
});

//   firebase.auth().onAuthStateChanged((user) => {
// 	  if (user) {
// 		  location.replace('welcome.html');
// 	  }
//   });

function login() {
	console.log('login called');
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			document.getElementById('error').innerHTML = error.message;
		});
}

function register() {
	console.log('register called');
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			document.getElementById('error').innerHTML = error.message;
		});
}
