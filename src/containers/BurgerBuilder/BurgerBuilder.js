import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'

import Auxxx from '../../hoc/Auxxx';

class BurgerBuilder extends Component {
  render() {
    return (
         <Auxxx>
             <Burger />
             <div>Burger</div>
             <div>Burger Control</div>
         </Auxxx>

    ); 

    }  

}

export default BurgerBuilder;