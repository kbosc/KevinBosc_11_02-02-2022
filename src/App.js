import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Housing from "./components/Housing"
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
        <Route path='/' element={<Home />} />
        <Route path='/housing/:id' element={<Housing />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
