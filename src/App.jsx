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
      dropDownDisplayStyle: { display: "none" },
      activeTaskCount: 0,
      finishedTaskCount: 0
    }
  }

  onHeaderMenuClick = () => {
    this.setState(state => ({
      menuClicked: !state.menuClicked,
      menuSvg: state.menuClicked ? arrowDown : arrowUp,
      dropDownDisplayStyle: { display: state.menuClicked ? "none" : "block" }
    }));
  }

  setTaskCount = data => {
    this.setState({
      activeTaskCount: data[0].issues.length,
      finishedTaskCount: data[data.length - 1].issues.length
    })
  }

  render(){
    const { menuSvg, dropDownDisplayStyle, activeTaskCount, finishedTaskCount } = this.state;

    return (
      <>
        <Header title="Awesome Kanban Board" 
                onClick={this.onHeaderMenuClick} 
                menuSvg={menuSvg} 
                dropDownDisplayStyle={dropDownDisplayStyle}/>
        <Board countTask={this.setTaskCount}/>
        <Footer activeTask={activeTaskCount} finishedTask={finishedTaskCount}/>
      </>
    );
  }
}

export default App;
