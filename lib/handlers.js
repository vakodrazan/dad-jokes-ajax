import { fetchJoke } from './index.js';
import { randomIntemFromArray } from './utils.js';
import { jokeButton, jokeHolder} from '../lib/elements.js';
import buttonText from '../data/buttonText.js'
 
export async function handleClick() {
	const { joke } = await fetchJoke();
	jokeHolder.textContent = joke;
	jokeButton.textContent = randomIntemFromArray(buttonText, jokeButton.textContent);
}
