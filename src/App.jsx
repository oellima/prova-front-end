import { BrowserRouter } from "react-router-dom"
import Routers from "./Routes"
import Navbar from "./components/navbar/Navbar"
import ColoredLine from "./components/coloredline/ColoredLine"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <ColoredLine />
      <Routers />
      <ColoredLine />
      <Footer />
    </BrowserRouter>
  )
}

export default App
