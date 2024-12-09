import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";

function App() {

  return (
    <div className="container">
      <Header/>
      <Main/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default App;