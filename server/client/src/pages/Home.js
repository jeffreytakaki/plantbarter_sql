import React from 'react';
import Search from '../components/Search';
import CommonlyTradedConnected from '../components/Commonly-Traded';

export default class Home extends React.Component {
    constructor(props, dispatch) {
        super(props);
       
    }

    render() {
        return (
            <div className="home-container">

                <div className="about--wrap sections">
                  <div className="about--info">
                    <h1>Welcome to our community!</h1>
                    <p>We are a bunch of like minded people who want to trade, exchange, or donate excess plants grown in our own backyards. </p>
                    <a href="#how-it-works">See how it works and get started today!</a>
                  </div>
                </div>  

                <Search />

                

                <div className="sections how-it-works" id="how-it-works">
                    <div className="sections--title">
                        <h1>How it works</h1>
                    </div>

                    <CommonlyTradedConnected />
                  
                  <ul>
                    <li>
                      <img src="../icon-gardening.png"/>
                      <p>Grow your own fruits, vegetables, or even succulents and add these plants to your profile</p>
                    </li>
                    <li>
                      <img src="../icon-neighbor.png"/>
                      <p>Connect with people in your area that want to trade, exchange, or donate their own plants</p>
                    </li>
                    <li>
                      <img src="../icon-dining.png"/>
                      <p>Enjoy the fruits of your labor and pay it forward</p>
                    </li>
                  </ul>

                </div>

                <div className="sections community">
                  <div className="sections--title">
                    <h1>Botanically community</h1>
                  </div>
                  <div className="community--info">
                    <h2>Successful trades</h2>
                    <p>4701</p>
                  </div>
                  <div className="community--info">
                    <h2>Communities involved</h2>
                    <p>1220</p>
                  </div>
                  <div className="community--info">
                    <h2>Smoothies made</h2>
                    <p>5509</p>
                  </div>
                </div>

            </div>
            

        )
    }
}
