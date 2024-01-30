import Section from './components/Section';
import {useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [text,setText] = useState('');
  return (
    <div className="container">
      <Header/>
      <Section text={text} setText={setText}/>
    </div>
  );
}

export default App;
