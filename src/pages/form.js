import React, {Component} from 'react';
import Choices from '../containers/choices.js';
import Revenue from '../containers/Revenue.js';



class Form extends Component{



  render() {
      return (
        <div>
          < Revenue />
          < Choices />
        </div>
      );
  }
}




export default Form;

