
import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
//import About from './Components/About'
function App() {
  return (
    <>
      <Navbar tittle="TextManager" />
      <div className='container '>
           <Textforms heading="Enter the text to analyze"/>
      </div>
      {/* <About/> */}

    </>
  );
}

export default App;
