import './Counter.css';
import { useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);
    //theme stores the current theme
    //setTheme updates (light or dark)
    const [theme, setTheme] = useState('light');

    //this is the click buttons
    /*const handleDarkClick = () => {
        console.log('Click Dark!')
    };
    const handleLightClick = () => {
        console.log('Click Light!')
    };*/
    //step 5:
    const setDarkThemeHandler = () => {
        setTheme('dark');
    };
    const setLightThemeHandler = () => {
        setTheme('light');
    };
    //step 6:
    const toggleThemeHandler = () => { //with this one no matter what button u click the state changes
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    //direct update form:
    /*const incrementHandler = () => {
        console.log("add 1")
        setCount(count + 1);
    };

    const decrementHandler = () => {
        console.log("minus 1")
        setCount(count - 1);
    };*/

    //functional update form (callback): (depends on prev. value)
    const incrementHandler = () => {
        console.log("+")
        setCount(prevCount => prevCount + 1);
        //console.log({count})
    };

    const decrementHandler = () => {
        console.log("-")
        setCount(prevCount => prevCount - 1);
        //console.log({count})
    };

    return (
    <div className={`content ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={setDarkThemeHandler}>Dark</button>
      <button onClick={setLightThemeHandler}>Light</button>
      <button onClick={toggleThemeHandler}>ToggleButton</button>
      <p></p>
      <h2>{count}</h2>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
};

export default Counter;