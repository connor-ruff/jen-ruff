import React, {Component} from 'react';
import './Home.css';
import DogsImg from '../../media/JenWDogs.jpg'
class HomeInfo extends Component {

    render(){
        return(
            <div > 
                 <hr style={{marginLeft: '7%', marginRight: '10%', marginTop: 30, marginBottom: 30}}></hr>
                <p className="HomeDesc">USA Today bestselling author Jenifer Ruff writes unforgettable mysteries and medical thrillers in three series: The Agent Victoria Heslin Series, The Brooke Walton Series, and The FBI & CDC Thriller Series.</p>

                <p className="HomeDesc">Jenifer has always been a voracious reader drawn to layered , expertly-plotted mysteries. Now she creates contemporary mysteries and thrillers of her own that unfold amidst urgent circumstances and chaos. Her characters are usually flawed, but courageous, and most always choose to do the right thing. (Except in the Brooke Walton series where Brooke does whatever suits her.) For those who might care: the language is clean even when the circumstances are dire.</p>
                <p className="HomeDesc">Jenifer lives in Charlotte, NC with her family and a pack of greyhounds. If she's not writing, she's probably out exploring trails with her dogs.</p>
               

              
                <hr style={{marginLeft: '7%', marginRight: '10%', marginTop: 30, marginBottom: 30}}></hr>
               <h4 className='newsLetter'>Join Jenifer's Reader Newsletter</h4>
               <h6 className='newsLetter' style={{fontSize: 20}}>Be the first to hear about new releases, promotions, and giveaways</h6>

              
                <a href='https://jenruff.us15.list-manage.com/subscribe?u=49c5829d65bed33ab97be20b0&id=0fbac4b0f8' target="_blank" rel="noopener noreferrer">
               <button className='SignUpBtn'>SIGN UP HERE</button>
               </a>
                <br></br>

               <img src={DogsImg} className='HomeImgs' alt="N/A"></img>

            </div>
        )
    }
}

export default HomeInfo