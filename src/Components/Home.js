import React, {Component} from 'react';
import NavBar from './NavBar/NavBar'
import HomeInfo from './Home/HomeInfo'
import BookCarousel from './Home/BookCarousel';
import JenRuffImg from '../media/HomePageBanner.png'

class Home extends Component {
    
    render(){
        return (
            <div>
                <NavBar />
                <img src={JenRuffImg} style={{width: '90vw'}} alt="N/A"></img>
                <BookCarousel></BookCarousel>
                <HomeInfo/>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Home