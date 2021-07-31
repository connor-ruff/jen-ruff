import React, {Component} from 'react';
import {Carousel} from '3d-react-carousal';
import {BookCovers} from './BookCovers';
import './Home.css'

class BookCarousel extends Component {

   
    render(){
        return(
            <div className="book-carousel" >
                <Carousel slides={BookCovers} autoplay={false}/>
            </div>
        )
    }
}

export default BookCarousel