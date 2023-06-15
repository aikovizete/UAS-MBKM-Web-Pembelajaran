let question = [
  {
    quiz: "Obyek dari gejolak emosional penulis dalam mengungkapkan, seperti perasaan sedih, frustasi, gembira, dan sebagainya adalah ..",
    answer: ["A. Sastra", "B. Puisi", "C. Fiksi Mini"],
    correct: 0,
  },
  {
    quiz: "Fungsi sastra yang berarti hiburan untuk pembaca disebut juga ..",
    answer: ["A. Moralitas", "B. Religius", "C. Rekreatif"],
    correct: 2,
  },
  {
    quiz: "Tema, nada, Perasaa, dan amanat merupakan bagian dari struktur ..",
    answer: ["A. Fisik puisi", "B. Badan puisi", "C.  Hati puisi"],
    correct: 1,
  },
  {
    quiz: "cerita mini, cerita kilat, dan cerpen singkat, merupakan pengertian dari ..",
    answer: ["A. Puisi", "B. Fiksimini", "C. Sastra"],
    correct: 1,
  },
];

function showQuestion(q) {
  let quiz = document.getElementById("title");
  quiz.textContent = q.quiz;

  let answer = document.querySelectorAll(".answer");
  answer.forEach((element, index) => {
    console.log(index);
    element.textContent = q.answer[index];

    element.addEventListener("click", () => {
      if (q.correct == index) {
        alert("Jawaban Anda Benar");
      } else {
        alert("Jawaban Anda Salah");
      }
    });
  });
}

showQuestion(question[Math.floor(Math.random() * question.length)]);
