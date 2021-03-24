import './App.css';
import Greeting from './components/Greeting';

function App() {

  return (
    <div className="App">
        <Greeting title='React' short_description='React is a JavaScript library for building user interfaces.

    React is used to build single page applications.
    
    React allows us to create reusable UI components.' /> 
    </div>
  );
}

export default App;
