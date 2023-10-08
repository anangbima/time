import { useState } from 'react';
import './App.css';

function App() {
  const [texture, setTexture] = useState({
    width : '',
    height : '',
    top : '',
    left : '',
  });

  return (
    <div className="canvas">
      {/* <div className='day'>

      </div> */}

      <div className='night'>
        <div></div>
        <div className='moon'>
          <div className='texture-moon'></div>
          {/* <div className='texture-moon'></div>
          <div className='texture-moon'></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
