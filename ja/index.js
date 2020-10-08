const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "kkkk",
    answers: ["a", "b", "c", "d"],
    correct: "c",
  },
  {
    question: "kkkkk",
    answers: ["a", "b", "c", "d"],
    correct: "b",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

//ボタンをクリックしたら正解
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
