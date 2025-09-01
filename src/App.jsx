// import './App.css'

import MasonryImageList from "./components/Image"
import ImageList from "./components/Image"
import { Contact } from "./components/contact"
import Feature from "./components/featureComponent"
import { Footer } from "./components/footer"
import Hero from "./components/hero"
import { Navbar } from "./components/nav"

function App() {


  return (
    <>
{/* <div className="flex justify-center pt-10">
  <button className="text-[#000000] text-6xl font-bold bg-green-500 underline font-sans hover:text-red-500 hover:font-serif hover:scale-110 transition-transform duration-300 rounded px-6 py-2 shadow">
    Hello world!
  </button>
</div> */}
{/* <Navbar/> */}
<Hero/>
{/* <MasonryImageList/> */}
<Feature/>
<Contact/>
<Footer/>
    </>
  )
}

export default App
