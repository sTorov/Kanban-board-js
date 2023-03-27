import React from "react";
import "./App.css";
import Board from "./components/Board/board";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import arrowDown from "./img/ArrowDown.svg";
import arrowUp from "./img/ArrowUp.svg";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuClicked: false,
      menuSvg: arrowDown,
      dropDownDisplayStyle: { display: "none" }
    }
  }

  onHeaderMenuClick = () => {
    this.setState(state => ({
      menuClicked: !state.menuClicked,
      menuSvg: !state.menuClicked ? arrowDown : arrowUp,
      dropDownDisplayStyle: { display: !state.menuClicked ? "none" : "block" }
    }));
  }

  render(){
    const { menuSvg, dropDownDisplayStyle } = this.state;

    return (
      <>
        <Header title="Awesome Kanban Board" 
                onClick={this.onHeaderMenuClick} 
                menuSvg={menuSvg} 
                dropDownDisplayStyle={dropDownDisplayStyle}/>
                <Board/>
        <Footer/>
      </>
    );
  }
}

export default App;
