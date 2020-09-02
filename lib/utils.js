export function randomIntemFromArray(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if (item === not) {
		return randomIntemFromArray(arr, not);
	}
	return item;
}
