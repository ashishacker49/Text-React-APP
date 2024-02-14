// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() { 
  return (
    <>
   {/* <Navbar  /> */}


<Navbar title="React Apps" about={"About"} />

<div className="container my-13">

<TextForm heading="Enter the Text to Analyze below"  />
{/* <About/> */}
</div>


    </>
    
  );
}

export default App;
