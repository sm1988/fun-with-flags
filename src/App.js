import React, { Component } from "react";
import CountryCard from "./CountryCard";
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import MainContent from "./MainContent"
import countries from "./countries.json";
import "./App.css";

class App extends Component {
  state = {
    countries,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };

  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
  };

  handleScore = id => {
    this.state.countries.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore && 12) {
          this.setState({ highScore: this.state.currentScore });
          alert("Sheldon says : BAZZZZINGAAAA!!!!");
        }
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.countries.forEach(element => (element.clicked = false));
        console.log(this.state.countries);
      }
    });
  };

  shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = this.shuffle(this.state.countries);
    // Setting 'shuffledArr' as the new state
    this.setState({ shuffledArr });
  };

  // handleIncrement increments this.state.currentScore by 1
  handleIncrement = () => {
    // Using setState method to update component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  // Function that takes an array as a parameter and shuffles it
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <MainContent>
        {this.state.countries.map(country => (
          <CountryCard
            Clicked={this.state.Clicked}
            handleClick={this.handleClick}
            id={country.id}
            key={country.id}
            name={country.name}
            image={country.image}
            capital={country.capital}
          />
        ))}
        </MainContent>
      </Wrapper>
    );
  }
}

export default App;