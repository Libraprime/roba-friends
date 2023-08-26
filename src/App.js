import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';

const App = () => {
  return (
    <>
      <Header />
      <section className='cards'>
        <Card className='card' />
        <Card className='card' />
        <Card />
      </section>
    </>
    
  )
}

export default App;
