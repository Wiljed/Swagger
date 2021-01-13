import React, { Component } from 'react';
import mainPage1 from '../images/Hoodie7.jpg'
import mainpage2 from '../images/BlackMain.jpg'

class Home extends Component {


    render() {

        return (
            <div className='imgContainer center'>
                <img id="image-1" src={mainPage1} alt="" />
                <img id="image-2" src={mainpage2} alt="" />
            </div>
        )
    }

}

export default Home