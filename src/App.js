import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import HousingSheet from "./components/HousingSheet"
import Error from "./components/Error"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import GlobalStyle from './utils/style/GlobalStyle'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/housing/:id' element={<HousingSheet />}/>
        </Route>
        <Route path='/about' element={<About />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
