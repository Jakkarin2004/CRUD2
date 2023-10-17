import logo from './logo.svg';
import './App.css';
import Car from './Car';



function App() {

  const view =()=>{
    console.log("you are welcome");
  };

  return (
    <div className="App">
      <Car/>
      {view()}
    </div>
  );
}

export default App;
