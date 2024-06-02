//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const output = document.getElementById("output");
const submitBtn = document.getElementById("btn");

const handleSubmit = () => {
	const textValue = text.value;
	const delayValue = delay.value;

	setTimeout(() => {
		output.innerHTML = textValue;
	}, delayValue)
}

submitBtn.addEventListener("click", handleSubmit)