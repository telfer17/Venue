import React, {Component} from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [50, 75, 100],
    positions: ['General', 'Enhanced', 'VIP'],
    desc: [
      'lorem ipsum',
      'lorem ipsum 2',
      'lorem ipsum 3'
    ],
    link:['http://sales/general', 'http://sales/enhanced', 'http://sales/vip'],
    delay:[500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (

      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>£{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.link[i]}
               />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render(){
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
          </div>
        </div>

      </div>
    );
  }
}

export default Pricing;
