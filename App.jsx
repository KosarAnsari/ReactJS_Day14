import { useState } from 'react';
import './css/style.css';
function App() {
  const [cardStyle, setStyle] = useState({
    border: '1px solid black',
    width: '150px',
    margin: '10px',
    boxShadow: '1px 1px 1px 0',
  });

  const updateTheme = (bgcolor, textcolor) => {
    setStyle({ ...cardStyle, backgroundColor: bgcolor, color: textcolor });
  };

  const [grid, setGrid] = useState(true);
  return (
    <>
      <h1>Styling CSS in ReactJS</h1>
      <h2 style={{ color: 'red', backgroundColor: 'black' }}>Inline CSS</h2>
      <button onClick={() => updateTheme('gray', 'pink')}>Gray Theme</button>
      <button onClick={() => updateTheme('white', 'black')}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div style={{ display: grid ? 'flex' : 'block', flexWrap: 'wrap' }}>
        <div>
          <div
            style={{
              border: '1px solid black',
              width: '150px',
              margin: '10px',
              boxShadow: '1px 1px 1px 0',
            }}
          >
            <img
              style={{ width: '150px' }}
              src="https://www.w3schools.com/howto/img_avatar.png"
            />

            <div>
              <p>John Doe</p>
              <p>Software Developer</p>
            </div>
          </div>
        </div>

        <div>
          <div style={cardStyle}>
            <img
              style={{ width: '150px' }}
              src="https://www.w3schools.com/howto/img_avatar.png"
            />

            <div>
              <p>Peter Parker</p>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
        <div>
          <div style={cardStyle}>
            <img
              style={{ width: '150px' }}
              src="https://www.w3schools.com/howto/img_avatar.png"
            />

            <div>
              <p>Bruce Lee</p>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="heading">External Styling</h2>
      <div className="container">
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
          </div>
          <div className="text-wrap">
            <p>Anil Piddhu</p>
            <p>Software Developer</p>
          </div>
        </div>
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
          </div>
          <div className="text-wrap">
            <p>Anil Piddhu</p>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
