import { GitHub } from './GitHub.js';
import { Ui } from './Ui.js';

(() => {
	const github = new GitHub();
	const ui = new Ui();
	const readyState = document.readyState;

	const init = () => {
		const searchUser = document.querySelector('.searchUser');
		searchUser.addEventListener('keyup', event => {
			const userName = event.target.value;
			github.getUser(userName).then(data => ui.showProfile(data));
		});
	};

	if (readyState === 'interactive' || readyState === 'complete') {
		init();
	} else {
		document.addEventListener('DOMContentLoaded', () => init);
	}
})();
