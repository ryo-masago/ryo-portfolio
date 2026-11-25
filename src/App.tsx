import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const name = "Ryo Masago"

  return (
    <div className = "app">
      <Header name = {name}/>
      <main className = "main-content">
        <Home/>
      </main>
      <Footer name = {name}/>
    </div>
  );
}

export default App;
