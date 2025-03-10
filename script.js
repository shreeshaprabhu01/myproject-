const questions = [
    { q: "What is the SI unit of Force?", options: ["Joule", "Newton", "Watt"], answer: 1 },
    { q: "What is the chemical symbol for Sodium?", options: ["Na", "So", "Sn"], answer: 0 },
    { q: "What is the derivative of sin(x)?", options: ["cos(x)", "-sin(x)", "-cos(x)"], answer: 0 },
    { q: "What is the atomic number of Carbon?", options: ["12", "6", "8"], answer: 1 },
    { q: "What is the value of acceleration due to gravity on Earth?", options: ["9.8 m/s²", "3.7 m/s²", "12 m/s²"], answer: 0 },
    { q: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: 1 },
    { q: "What is the first element in the periodic table?", options: ["Helium", "Hydrogen", "Lithium"], answer: 1 },
    { q: "What is the formula of water?", options: ["H2O", "CO2", "O2"], answer: 0 },
    { q: "What type of lens is used in a magnifying glass?", options: ["Concave", "Convex", "Plane"], answer: 1 },
    { q: "What is the chemical formula of methane?", options: ["CH4", "CO2", "H2O"], answer: 0 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const audio = document.getElementById("myAudio");
    audio.play().catch(e => console.log("Audio play attempt"));
    
    const q = questions[currentQuestion];
    document.getElementById("question-text").innerText = q.q;
    
    let optionsHTML = "";
    q.options.forEach((option, index) => {
        optionsHTML += `<input type='radio' name='answer' value='${index}'> ${option} <br>`;
    });
    
    document.getElementById("options").innerHTML = optionsHTML;
}

function nextQuestion() {
    const audio = document.getElementById("myAudio");
    audio.play();
    audio.muted = false;
    
    const selected = document.querySelector("input[name='answer']:checked");
    if (selected && parseInt(selected.value) === questions[currentQuestion].answer) {
        score++;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultText = `You scored ${score}/10`;
    if (score === 10) {
        resultText += "\nCongratulations! You have won a ₹5000 discount on college fees during admission! (Show the screenshot during admission)";
    }
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").innerText = resultText;
}

window.onload = () => {
    loadQuestion();
};