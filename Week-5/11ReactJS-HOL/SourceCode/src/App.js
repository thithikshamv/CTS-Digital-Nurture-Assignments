import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {

  let count = 0;

  function increment() {
    count++;
    alert("Counter Value : " + count);
  }

  function decrement() {
    count--;
    alert("Counter Value : " + count);
  }

  function sayHello() {
    alert("Hello! Have a Nice Day!");
  }

  function increase() {
    increment();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function onPress() {
    alert("I was clicked");
  }

  return (
    <div className="App">

      <h1>React Event Handling</h1>

      <button onClick={increase}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={onPress}>
        OnPress
      </button>

      <br /><br />

      <CurrencyConvertor />

    </div>
  );
}

export default App;
