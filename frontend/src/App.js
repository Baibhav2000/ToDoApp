import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
        <Header/>
        <main>
            <Display/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
