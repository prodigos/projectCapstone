import "./App.css";
import NavBar from "./components/NavBar";
import QuestionsBar from "./components/QuestionsBar";
import QuestionsDisplay from "./components/QuestionsDisplay";

const questions = [
  {
    id: 1,
    category: "Geography",
    question: "Name of the capital of USA ?",
    answer: "Washington, D.C.",
  },
  {
    id: 2,
    category: "Sports",
    question: "Which Baseball Teams Play in NYC ?",
    answer: "New York Yankees and New York Mets",
  },
  {
    id: 3,
    category: "Music",
    question: "What Band Sting used to play ?",
    answer: "The Police",
  },
  {
    id: 4,
    category: "Food",
    question: "What is Italy most Famous Dish ?",
    answer: "Pizza",
  },
  {
    id: 5,
    category: "Cars",
    question: "What Car uses a Horse on it's logo ?",
    answer: "Ferrari",
  },
];

let categoryHandler =  (arr) => {
  let query;
  questions.forEach((question) => {
    query = question.category;
    console.log(query);
  });
};

function App() {
  return (
    <div className="App">
      <NavBar />

      <QuestionsBar categoryHandler = {categoryHandler}/>
      <QuestionsDisplay />
    </div>
  );
}

export default App;
