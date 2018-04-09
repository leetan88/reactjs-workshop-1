import React, { Component } from "react";
import sortBy from "sort-by";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationValue: "mexican",
      typeASort: "id"
    };
  }
  showMenu = menus => {
    // alert(this.state.locationValue + menus)
    try {
      var result = null;
      if (menus.length > 0) {
        result = menus
          .filter(menu => menu.type === this.state.locationValue.toLowerCase())
          .sort(sortBy(this.state.typeASort))
          .map((menu, index) => {
            return <li>{menu.name}</li>;
          });
        console.log(result);
      }
      return result;
    } catch (e) {
      alert(e.message);
    }
  };
  handleFilterLocation = e => {
    this.setState({
      locationValue: e.target.value
    });
  };
  handleSort = e => {
    this.setState({
      typeASort: e.target.text
    });
  };
  render() {
    const data = {
      title: "Menu",
      items: [
        { id: 1, name: "tacos", type: "mexican" },
        { id: 2, name: "burrito", type: "mexican" },
        { id: 3, name: "tostada", type: "mexican" },
        { id: 4, name: "mushy peas", type: "english" },
        { id: 5, name: "fish and chips", type: "english" },
        { id: 6, name: "black pudding", type: "english" }
      ]
    };
    return (
      <div>
        <div>{data.title}</div>
        <select onChange={this.handleFilterLocation}>
          <option>Mexican</option>
          <option>English</option>
        </select>
        <br />
        <a to="" onClick={this.handleSort}>
          id
        </a>
        <br />
        <a to="" onClick={this.handleSort}>
          name
        </a>
        <ul>{this.showMenu(data.items)}</ul>
      </div>
    );
  }
}

export default App;
