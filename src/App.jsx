import "./App.scss"
import { BrowserRouter as Router  , Routes , Route  } from "react-router-dom"
import Header from "./component/header/Header"
import HomePage from "./home/HomePage"
import SinglePage from "./component/watch/SinglePage"
import Footer from "./component/footer/Footer"
function App() {


  return (
    <>
          <Router>
            <Header/>
            <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route path="/singlepage/:id" Component={SinglePage} exact />
          </Routes>
          <Footer />
          </Router>
    </>
  )
}

export default App
