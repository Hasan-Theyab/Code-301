
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Parent from './components/Parent';

class App extends React.Component{
  render(){
    return(
      <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <h1>Props & States</h1>
      <Parent />
      </>
    )
  }
}

export default App;
