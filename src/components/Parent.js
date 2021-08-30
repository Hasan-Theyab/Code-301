import React from 'react';
import Child from './Child';
import Addax from './assets/Addax.jfif';
import BabyMarkhor from './assets/Baby markhor.jpg'
import BabyMouflon from './assets/BabyMouflon.jpg'
import BabyRhino from './assets/BabyRhino.jpg'
import BasicallyaUniCorn from './assets/Basically a UniCorn.jpg'
import Believe from './assets/Believe.jpg'
import Cera from './assets/Cera.png'
import HappyJacksonChameleon from './assets/Happy Jackson Chameleon.jfif'
import HornedLizard from './assets/Horned Lizard.jpg'
import Markhor from './assets/Markhor.jpg'
import Mouflon from './assets/Mouflon.jfif'
import NarwhalCostume from './assets/Narwhal costume.webp'
import RhinoCostume from './assets/Rhino costume.jpg'
import rihnofamily from './assets/rihno family.jfif'
import SeriousJacksonChameleon from './assets/Serious Jackson Chameleon.jpg'
import Smaug from './assets/Smaug.jpg'
import truth from './assets/truth.jpg'
import UnicornHead from './assets/Unicorn Head.jpg'
import UniLego from './assets/UniLego.jfif'
import UniWhal from './assets/Unicorn UniWhal.jpg'



class Parent extends React.Component{
    render(){
        return(
            <>
            <h2>Parent</h2>
            <Child name='Addax' imgUrl={Addax}/>
            <Child name='Baby markhor' imgUrl={BabyMarkhor}/>
            <Child name='Baby mouflon' imgUrl={BabyMouflon}/>
            <Child name='Baby Rhino' imgUrl={BabyRhino}/>
            <Child name='Basically a unicorn' imgUrl={BasicallyaUniCorn}/>
            <Child name='Believe' imgUrl={Believe}/>
            <Child name='Cera' imgUrl={Cera}/>
            <Child name="Happy Jackson's Chameleon" imgUrl={HappyJacksonChameleon}/>
            <Child name='Horned Lizard' imgUrl={HornedLizard}/>
            <Child name='Markhor' imgUrl={Markhor}/>
            <Child name='Mouflon' imgUrl={Mouflon}/>
            <Child name='Narwhal costume' imgUrl={NarwhalCostume}/>
            <Child name='Rhino costume' imgUrl={RhinoCostume}/>
            <Child name='Rihno Family' imgUrl={rihnofamily}/>
            <Child name="Serious Jackson's Chameleon" imgUrl={SeriousJacksonChameleon}/>
            <Child name='Smaug' imgUrl={Smaug}/>
            <Child name='#truth' imgUrl={truth}/>
            <Child name='Unicorn Head' imgUrl={UnicornHead}/>
            <Child name='UniLego' imgUrl={UniLego}/>
            <Child name='UniWhal' imgUrl={UniWhal}/>
            </>
        )
    }
}

export default Parent;