let currentIndex= 0;
const questions = document.querySelectorAll('.question');
const nextButton = document.getElementById('next-button');

function answers(element) {
    const options = element.parentNode.querySelectorAll('li');
    options.forEach(option => {
        option.style.backgroundColor = 'rgb(177, 232, 240)';
        option.style.color = 'black';
        option.querySelector('span').style.backgroundColor = 'rgb(122, 230, 247)';
    });
    if (element.classList.contains("answer")) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
        element.querySelector('span').style.backgroundColor = "green";
    } else {
        element.style.backgroundColor = "red";
        element.style.color = "white";
        element.querySelector('span').style.backgroundColor = "red";
    }
}

function show(index) {
    questions.forEach((question, idx) => {
        question.style.display = idx === index ? 'block' : 'none';
    });
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        show(currentIndex);
    } else {
        document.querySelector('.container').innerHTML = "<h1>Quiz Completed!</h1>";
    }
}

show(currentIndex);

 