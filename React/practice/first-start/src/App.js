import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Some text</h2>
};

//const Field = () => {
//  const holder = 'Enter here';
//  const styledField = {
//    width: '300px'
//  };
//  return <input placeholder={holder}
//    type='text'
//    style={styledField} />
//}

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };
    return <input placeholder={holder}
      type='text'
      style={styledField} />
  }
}

const Btn = () => {
  const text = 'log in';
  //const res = (a) => a;
  //const p = <p>Some</p>
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button>
  //return <button>{p}{res(text)}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
