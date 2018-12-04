import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

  state = {
    discountStart:0,
    discountEnd:25
  }


  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate(){
    setTimeout(() => {
      this.percentage()
    }, 40)
  }


  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

        <Fade
          onReveal={() => this.percentage()}
          >

          <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Buy tickets before January 1st</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <MyButton
              text="Purchase Tickets"
              bck="#ffa800"
              color="#ffffff"
              link="https://www.skiddle.com/whats-on/London/Finsbury-Park/Steel-Yard-London---Eric-Prydz-Presents-HOLO/13367341/"
            />

          </div>
        </Slide>

        </div>
      </div>
    );
  }

}

export default Discount;
