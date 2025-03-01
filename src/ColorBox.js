import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return this.props.opacity>=0.2? (
      <div className="color-box" style={{opacity: 1}}>
        <ColorBox opacity= {this.props.opacity - 0.1 }/>
      </div>
    ) : null
  }
  
}
