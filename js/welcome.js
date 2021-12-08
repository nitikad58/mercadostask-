firebase.auth().onAuthStateChanged((user) => {
	if (!user) {
		location.replace('index.html');
	} else {
		document.getElementById('user').innerHTML = 'Welcome, ' + user.email;
	}
});

function logout() {
	firebase.auth().signOut();
}
