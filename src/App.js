import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from './components/header/Header';
import HomePages from './home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/singlePage/:id" element={<SinglePage />} />  
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
