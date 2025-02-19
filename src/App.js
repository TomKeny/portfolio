import { useState } from 'react';
import './Style.css';
import PageTitles from './navbar.js';
import PageHandler from './pageHandler.js';

function App() {
  const [page,setPage] = useState(0)



  return (
    <div className="App">
      <PageTitles current={page} setPage={setPage}/>
      <div id="headerContainer">
        <h1>Tom Kenyon</h1>
        <h2>tomkenyon2003@gmail.com</h2>
      </div>
      <div id="gradientUnderTitle"></div>
      <PageHandler current={page} />
    </div>
  );
}

export default App;
