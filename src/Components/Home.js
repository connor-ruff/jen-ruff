import React, {Component} from 'react';
import NavBar from './NavBar/NavBar'
import BookCarousel from './Home/BookCarousel';
import JenRuffImg from '../media/HomePageBanner.png'

class Home extends Component {
    
    render(){
        return (
            <div>
                <NavBar />
                <img src={JenRuffImg} alt="N/A"></img>
                <BookCarousel></BookCarousel>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Home