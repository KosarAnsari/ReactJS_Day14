import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log('Mounting Phase only.');
  }, []);

  useEffect(() => {
    console.log('Update Phase Only.');
  }, [count]);

  useEffect(() => {
    return () => {
      console.log('Unmounting Phase');
    };
  }, []);

  return (
    <>
      <h1>Lifecycle of a ReactJS Component</h1>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      <br />
      {display ? count : null}
      <br />
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </>
  );
}
export default App;
