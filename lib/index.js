export async function fetchJoke() {
	const response = await fetch('https://icanhazdadjoke.com', {
		headers: {
			Accept: 'Application/json',
		}
	});
	const data = await response.json();
	return data;
}
