import React, {Component} from 'react';
import Background from "./img/Hero_Image.jpeg";
import "./Header.css";
const myStyles = {
  "backgroundImage": `url(${Background})`,
  "height": "80vh",
  "backgroundSize": "cover"
}

class Header extends Component {

  render() {
    return (
      <header style= {myStyles}>
      <h1> {this.props.title} </h1>
<p> Digital design is like painting, except the paint never dries. </p>
      </header>

    );
  }
};

export default Header;
