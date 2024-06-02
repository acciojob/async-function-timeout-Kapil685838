//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const output = document.getElementById("output");
const submitBtn = document.getElementById("btn");

const handleDelay = (delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, delay)
	})
}

const handleSubmit = async () => {
	const textValue = text.value;
	const delayValue = parseInt(delay.value);

	await handleDelay(delayValue);

	output.innerHTML = textValue;
}

submitBtn.addEventListener("click", handleSubmit)