export class GitHub {
	constructor() {
		this.clientId = 'Ov23lieLpC6X4CfjAN1i';
		this.clientSecret = '38bdef8b2e0a9ba6ff5362df6428fac2b78802ae';
	}

	async getUser(userName) {
		try {
			const data = await fetch(
				`https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
			);
			return await data.json();
		} catch (error) {
			throw new Error(error);
		}
	}
}
