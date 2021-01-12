import "./App.css";
import NavBar from './components/NavBar'
import QuestionsBar from './components/QuestionsBar'
import QuestionsDisplay from './components/QuestionsDisplay'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <QuestionsBar/>
      <QuestionsDisplay/>
    </div>
  );
}

export default App;
