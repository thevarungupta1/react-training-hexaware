import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <Main />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
