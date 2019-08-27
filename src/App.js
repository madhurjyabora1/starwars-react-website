import React, { Component } from "react";
import axios from "axios";
import List from "./List";
import Character from "./Character";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.getPeople = this.getPeople.bind(this);
  }
  getPeople = () => {
    axios.get("https://swapi.co/api/people").then(response => {
      this.setState({ people: response.data.results });
    });
  };
  componentWillMount() {
    this.getPeople();
  }
  render() {
    const { people } = this.state;
    console.log(people);
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={props => <List {...props} people={this.state.people} />}
        />
        <Route
          path="/char/:charName"
          render={props => {
            const { charName } = props.match.params;
            const foundCharacter = this.state.people.find(
              person => person.name.split(" ").join("") == charName
            );
            return <Character {...props} info={foundCharacter} />;
          }}
        />
      </BrowserRouter>
    );
  }
}
export default App;
