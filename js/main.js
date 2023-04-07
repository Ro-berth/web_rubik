const quizForm = document.getElementById("quiz");
const questions = quizForm.querySelectorAll(".question");
const nextBtns = quizForm.querySelectorAll(".next-question");

nextBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		const currentQuestion = btn.parentNode;
		const nextQuestion = currentQuestion.nextElementSibling;

		if (nextQuestion) {
			currentQuestion.classList.remove("active");
			nextQuestion.classList.add("active");
		}
	});
});

quizForm.addEventListener("submit", event => {
	event.preventDefault();

	const answer1 = quizForm.answer1.value;
	const answer2 = quizForm.answer2.value;
	const answer3 = quizForm.answer3.value;

	console.log("Respostas: ", answer1, answer2, answer3);

	alert("O questionário foi enviado!");
});
