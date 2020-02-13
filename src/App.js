import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const api = "http://192.168.43.147:3500/api/parks";

class App extends Component {
  state = {
    parks: [],
    cmd: []
  };

  async componentDidMount() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    // const {data: cmd} = await axios.get();
    setInterval(async () => {
      const { data: parks } = await axios.get(api);
      this.setState({ parks });
      let data = this.state.parks;
      if (data.parks[0].A >= 900) {
        a.style.backgroundColor = "tomato";
      } else {
        a.style.backgroundColor = "greenyellow";
      }
      if (data.parks[0].B >= 800) {
        b.style.backgroundColor = "tomato";
      } else {
        b.style.backgroundColor = "greenyellow";
      }
      if (data.parks[0].C >= 900) {
        c.style.backgroundColor = "tomato";
      } else {
        c.style.backgroundColor = "greenyellow";
      }
    }, 500);
  }
  logout() {
    const calib = document.getElementsByClassName("login")[0];
    const decalib = document.getElementsByClassName("login")[1];
    const logout = document.getElementsByClassName("login")[2];
    const w1 = document.getElementsByClassName("w")[0];
    const w2 = document.getElementsByClassName("w")[1];
    const w3 = document.getElementsByClassName("w")[2];
    w1.style.visibility = "visible";
    w2.style.visibility = "visible";
    w3.style.visibility = "visible";
    calib.style.visibility = "hidden";
    decalib.style.visibility = "hidden";
    logout.style.visibility = "hidden";
  }
  login() {
    const calib = document.getElementsByClassName("login")[0];
    const decalib = document.getElementsByClassName("login")[1];
    const logout = document.getElementsByClassName("login")[2];
    const w1 = document.getElementsByClassName("w")[0];
    const w2 = document.getElementsByClassName("w")[1];
    const w3 = document.getElementsByClassName("w")[2];
    if (w1.value === "admin" && w2.value === "admin") {
      w1.style.visibility = "hidden";
      w2.style.visibility = "hidden";
      w3.style.visibility = "hidden";
      calib.style.visibility = "visible";
      decalib.style.visibility = "visible";
      logout.style.visibility = "visible";
    }
  }
  // async calibrate() {
  //   post.title = "UPDATED";
  //   await http.put(api + "/" + "", post);
  // }
  render() {
    return (
      <div className="App">
        <h1>Parking</h1>
        <div>
          <input className="w" placeholder="username" />
          <input className="w" placeholder="password" type="password" />
          <button className="w" onClick={() => this.login()}>
            submit
          </button>
          <br />
          <button className="login">calibrate</button>
          <button className="login">decalibrate</button>
          <button className="login" onClick={() => this.logout()}>
            logout
          </button>
        </div>
        <div className="flex">
          <div className="red"></div>
          <h4>Not-Available</h4>
        </div>
        <div className="flex">
          <div className="green"></div>
          <h4>Available</h4>
        </div>

        <div className="flex container flex-center">
          <div className="flex flex-center box-p w-50 h-50" id="b">
            <h1>B</h1>
          </div>
          <div className="flex flex-center box-p w-50 h-50" id="a">
            <h1>A</h1>
          </div>
        </div>
        <div className="flex container flex-center">
          <div className="w-50 h-50" id="d"></div>
          <div className="flex flex-center box-p w-50 h-50" id="c">
            <h1>C</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
