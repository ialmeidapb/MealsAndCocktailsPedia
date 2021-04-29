import React from 'react';
import ReactToPrint from 'react-to-print';

import ComponentToPrintDrink from './ComponentToPrintDrink';

class PrinterDrink extends React.PureComponent {
  
  render() {
    return (
      
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#"><i className="fas fa-print"></i> PRINT!</a>;
          }}
          content={() => this.componentRef}
        />
        <div style={{ display: "none" }}> 
        <ComponentToPrintDrink drink={this.props.drink} ref={el => (this.componentRef = el)} /></div>
        
      </div>
    );
  }
}

export default PrinterDrink;