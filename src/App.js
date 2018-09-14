import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
    };

    this.url1 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatOne.wav';
    this.audio1 = new Audio(this.url1);
    this.toggleQPlay = this.toggleQPlay.bind(this);


    this.url2 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatTwo.wav';
    this.audio2 = new Audio(this.url2);
    this.toggleWPlay = this.toggleWPlay.bind(this);


    this.url3 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatThree.wav';
    this.audio3 = new Audio(this.url3);
    this.toggleEPlay = this.toggleEPlay.bind(this);


    this.url4 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatFour.wav';
    this.audio4 = new Audio(this.url4);
    this.toggleAPlay = this.toggleAPlay.bind(this);


    this.url5 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatFive.wav';
    this.audio5 = new Audio(this.url5);
    this.toggleSPlay = this.toggleSPlay.bind(this);


    this.url6 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatSix.wav';
    this.audio6 = new Audio(this.url6);
    this.toggleDPlay = this.toggleDPlay.bind(this);


    this.url7 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatSeven.wav';
    this.audio7 = new Audio(this.url7);
    this.toggleZPlay = this.toggleZPlay.bind(this);


    this.url8 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatEight.wav';
    this.audio8 = new Audio(this.url8);
    this.toggleXPlay = this.toggleXPlay.bind(this);


    this.url9 = 'https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatNine.wav';
    this.audio9 = new Audio(this.url9);
    this.toggleCPlay = this.toggleCPlay.bind(this);

    this.onKeyPressed = this.onKeyPressed.bind(this);

  }

  //Clicking audio events triggered STARTS here
  toggleQPlay() {
    this.audio1.play();
    this.setState ({
      desc: "BeatOne",
    });
  };

  toggleWPlay() {
    this.audio2.play();
    this.setState ({
      desc: "BeatTwo",
    });
  };

  toggleEPlay() {
    this.audio3.play();
    this.setState ({
      desc: "BeatThree",
    });
  };

  toggleAPlay() {
    this.audio4.play();
    this.setState ({
      desc: "BeatFour",
    });
  };

  toggleSPlay() {
    this.audio5.play();
    this.setState ({
      desc: "BeatFive",
    });
  };

  toggleDPlay() {
    this.audio6.play();
    this.setState ({
      desc: "BeatSix",
    });
  };

  toggleZPlay() {
    this.audio7.play();
    this.setState ({
      desc: "BeatSeven",
    });
  };

  toggleXPlay() {
    this.audio8.play();
    this.setState ({
      desc: "BeatEight",
    });
  };

  toggleCPlay() {
    this.audio9.play();
    this.setState ({
      desc: "BeatNine",
    });
  };
  //Clicking audio events triggered ENDS here

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPressed);
  }

  //Key Pressing audio events STARTS here
  onKeyPressed(event) {
    if (event.keyCode == 81) {
      this.toggleQPlay();
    }

    if (event.keyCode == 87) {
      this.toggleWPlay();
    }

    if (event.keyCode == 69) {
      this.toggleEPlay();
    }

    if (event.keyCode == 65) {
      this.toggleAPlay();
    }

    if (event.keyCode == 83) {
      this.toggleSPlay();
    }

    if (event.keyCode == 68) {
      this.toggleDPlay();
    }

    if (event.keyCode == 90) {
      this.toggleZPlay();
    }

    if (event.keyCode == 88) {
      this.toggleXPlay();
    }

    if (event.keyCode == 67) {
      this.toggleCPlay();
    }
  }

  //Key Pressing audio events ENDS here

  render() {
    return (
      <div id="drum-machine" className="App container">

        <h1 className="App-header">FreeCodeCamp Drum Machine</h1>

        <div className="grid-container">
          <div id="display">
            <div className="description-box"><p>{this.state.desc}</p></div>
          </div>

          <div className="drums">
            <div className="row">

              {/*The drum pads start from here */}
              <div className="drum-pad col-md-3 btn" id="BeatOne" onClick={this.toggleQPlay}
                >Q
                <audio className="clip" id="Q" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatOne.wav"></audio>
              </div>
              <div className="drum-pad col-md-3 btn" id="BeatTwo" onClick={this.toggleWPlay}>W
                <audio className="clip" id="W" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatTwo.wav"></audio>
              </div>
              <div className="drum-pad col-md-3 btn" id="BeatThree" onClick={this.toggleEPlay}>E
                <audio className="clip" id="E" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatThree.wav"></audio>
              </div>
            </div>
            <div className="row">
              <div className="drum-pad col-md-3 btn" id="BeatFour" onClick={this.toggleAPlay}>A
                <audio className="clip" id="A" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatFour.wav"></audio>
              </div>
              <div className="drum-pad col-md-3 btn" id="BeatFive" onClick={this.toggleSPlay}>S
                <audio className="clip" id="S" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatFive.wav"></audio>
              </div>
              <div className="drum-pad col-md-3 btn" id="BeatSix" onClick={this.toggleDPlay}>D
                <audio className="clip" id="D" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatSix.wav"></audio>
              </div>
            </div>
            <div className="row">
              <div className="drum-pad col-md-3 btn" id="BeatSeven" onClick={this.toggleZPlay}>Z
                <audio className="clip" id="Z" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatSeven.wav"></audio>
              </div>
              <div className="drum-pad col-md-3 btn" id="BeatEight" onClick={this.toggleXPlay}>X
                <audio className="clip" id="X" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatEight.wav"></audio>
              </div>
              <div className="drum-pad col-md-3 btn" id="BeatNine" onClick={this.toggleCPlay}>C
                <audio className="clip" id="C" src="https://s3.ap-south-1.amazonaws.com/freecodecampfiles/drum_machine_music/BeatNin2.wav"></audio>
              </div>
              {/*The drum pads end here */}
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
