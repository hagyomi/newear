import Header from './components/Header/Header';
import Home from './page/Home';
import Footer from './components/Footer/Footer';
import './App.css';
export default function App() {
    return (
        <div className="app">
            <a className="skip-link" href="#main-content">
                본문 바로가기
            </a>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}
