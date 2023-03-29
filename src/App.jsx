import React from "react";
import "./App.css";
import Board from "./components/Board/board";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTaskCount: 0,
      finishedTaskCount: 0
    }
  }

  setTaskCount = data => {
    this.setState({
      activeTaskCount: data[0].issues.length,
      finishedTaskCount: data[data.length - 1].issues.length
    })
  }

  render(){
    const { activeTaskCount, finishedTaskCount } = this.state;

    return (
      <>
        <Header title="Awesome Kanban Board"/>
        <Board countTask={this.setTaskCount}/>
        <Footer activeTask={activeTaskCount} finishedTask={finishedTaskCount}/>
      </>
    );
  }
}

export default App;
