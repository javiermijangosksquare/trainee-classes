import React from "react";
import "./List.css";
import { List } from "../../Components/List/List";

export class ListPage extends React.Component {
  state = {
    data: null
  };

  handleUserClick = () => {
    console.log("USER clicked");
  };

  fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json()
    );
    return res;
  };

  componentDidMount() {
    this.fetchUsers().then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className={"mainListContainer"}>
        <div className={"listContainer"}>
          <List users={data} onItemClick={this.handleUserClick} />
        </div>
      </div>
    );
  }
}
