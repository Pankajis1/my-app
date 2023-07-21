// import logo from './swastik.png';
import './App.css';
import { useState } from 'react';

function App() {

  let[x,Setx]=useState(0)

  const [Person , setPerson] = useState('John')

    const handler = () => {
      setPerson({name:'peter' , age: 23 , hobby: 'playing'})
    };
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
    <h1>This is the ressurected version</h1>
<section className='newstate'>
    
    <h2>{Person.name} </h2>
    <h3>{Person.age} </h3>
    <h3>Likes: {Person.hobby} </h3>
    <button className='btn' onClick={handler} >show peter</button>
    </section>

    <button onClick={()=>{Setx(x-1)}}>minus</button>
    <span style={{fontsize:'30px',padding:'5px',margin:'5px'}} >{x}</span>
    <button onClick={()=>{Setx(x+1)}}>plus</button>
    <h2>
      <ul className='num' >
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </h2>
    <form action='https://www.youtube.com/results' >
      <label htmlFor="searchForYT">SearchForYtube: </label>
      <input type="text" name='search_query' placeholder='enter here' id='searchForYT'/>
      <button formTarget='blank'>search youtube</button>

    </form>
    {/* <form action="https:/www.google.com/search">
      <label htmlFor="g">searh</label>
      <input type="text" id='g' placeholder='searh' name='q' />
      <button>searhn</button>
    </form> */}
    <form action='https://www.google.com/search'>
      <label htmlFor="searchGoogle" >SearchForGoogle: </label>
      <input type="text" name="q" placeholder='enter here' id='searchGoogle'/>
      <button formTarget='blank'>search google</button>

    </form>
    <form action="https://www.reddit.com/search">
      <label htmlFor="Searchred">searchreddit: </label>
      <input type="text" name='q' id='Searchred' placeholder='search reddit' />
      <button formTarget='blank'>search reddit</button>
    </form>
    <p>
      <label htmlFor="Rating">Rate this website </label>
      <input type="range" name="Rating-points" id="Rating" min="0" max="10" />
    </p>
    <div className='Registration'>   


    <h1>Race Registration!</h1>
    <form action="">
      <div>
        <label htmlFor="first">First Name: </label>
        <input type="text" id='first' name='firstname' placeholder='enter firstname' required/>
        <br/>

        <label htmlFor="last">Last Name: </label>
        <input type="text" id='last' name='lastname' placeholder='enter lastname' required/>
      </div>
      <h4>Select a race: </h4>

      <div>
        <input type="radio" id='half' name='race' value='Half Marathon'/>
        <label htmlFor="half" >Half Marathon</label>
      </div>
      <div>
        <input type="radio" id='full' name='race' value='Full Marathon'/>
        <label htmlFor="full">Full Marathon</label>
      </div>
      <div>
        <input type="radio" id='funrun' name='race' value='5k run Marathon'/>
        <label htmlFor="funrun">5k run</label>
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input type="email" placeholder='enter email' id='email' name='E-mail' required />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder='enter password' id='password' name='Password' required/>
      </div>
      <div>
        <label htmlFor="division">Age group: </label>
        <select name="AgeGroup" id="division" required>
          <option value="kids">Under 18</option>
          <option value="Adults">18-60</option>
          <option value="Aged">60+</option>
        </select>
      </div>
      <button>register</button>

    </form>
    </div>
    {/* <div>
      <p>This</p>
      <p>is</p>
      <p>an</p>
      <p>animation</p>
    </div> */}
    <h1>Transitions</h1>

    <div className='circle'>

    </div>
    <section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>

    <div className='buttondez'>
      <button className='btn'>hover</button>
    </div>


    </>

  );
}

export default App;
