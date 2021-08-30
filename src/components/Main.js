import React from 'react';
import hornedBeast from './components/hornedBeast';
import hornedBeast2 from './components/hornedBeast 2';
import hornedBeast3 from './components/hornedBeast 3';

class Main extends React.Component{
  render(){
    return(
      <>
      <main>
          <hornedBeast></hornedBeast>
          <hornedBeast2></hornedBeast2>
          <hornedBeast3></hornedBeast3>
      </main>
      

      </>
    )
  }
}

export default Main;