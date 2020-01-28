import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    start: false,
    message: "- Press the button start -",
    turn: false
  };

  changeMessage = () => {
    this.setState({
      message: "dwadwa"
    });
  };

  start = () => {
    this.setState({
      start: true
    });
  };

  turn = () => {
    this.setState({
      turn: !this.state.turn,
      start: false
    });
  };

  render() {
    return (
      <div className="App">
        <div className="div-main-main">
          {this.state.turn ? (
            <div className="button-on" onClick={this.turn}></div>
          ) : (
            <div className="button-of" onClick={this.turn}></div>
          )}
          <div class="main-game">
            <div class="div-header">
              <div class="div-menor-left-header"></div>
              <div class="div-maior-header"></div>
              <div class="div-menor-right-header"></div>
            </div>
            <div class="screen-game">
              <div class="screen-header">
                <div class="lines-header">
                  <div class="red-line"></div>
                  <div class="blue-line"></div>
                </div>
              </div>
              <div class="div-screen-menor">
                <div class="battery-screen">
                  <div class="ball-screen">
                    {this.state.turn ? (
                      <div class="ball-green"></div>
                    ) : (
                      <div class="ball-red"></div>
                    )}
                  </div>
                  <div class="battery-game">BATTERY</div>
                </div>
                <div class="screen-menor-game">
                  {this.state.turn ? (
                    <p class="a">
                      {!this.state.start ? (
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img className="img" src="mario-start.png" />
                      ) : (
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img className="img" src="gameboy-mario.png" />
                      )}
                    </p>
                  ) : (
                    <div className="div-off"></div>
                  )}
                </div>
              </div>
            </div>
            <div class="div-text">
              <div class="nintendo-text">Nintendo</div>
              <div class="gameBoy-text">GAME BOY ™</div>
            </div>
            <div class="div-buttons">
              <div class="joistick">
                <div class="reto"></div>
                <div class="deitado"></div>
              </div>
              <div class="div-buttonsAB">
                <div class="buttonsAB">
                  <div class="ball-A" onClick={this.changeMessage}></div>
                  <div class="ball-B"></div>
                </div>
                <div class="text-AB">
                  <div class="A-text">A</div>
                  <div class="B-text">B</div>
                </div>
              </div>
            </div>
            <div class="div-buttons-start">
              <div class="div-start">
                <div class="select"></div>
                <div class="select-text">SELECT</div>
              </div>
              <div class="div-start">
                <div class="start" onClick={this.start}></div>
                <div class="start-text">START</div>
              </div>
            </div>
            <div class="div-volume">
              <div class="volume">
                <div class="mini-volumes"></div>
                <div class="mini-volumes"></div>
                <div class="mini-volumes"></div>
                <div class="mini-volumes"></div>
                <div class="mini-volumes"></div>
                <div class="mini-volumes"></div>
                <div class="mini-volumes"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
