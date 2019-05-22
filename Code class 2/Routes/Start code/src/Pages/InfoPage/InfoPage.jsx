import React from "react";
import "./InfoPage.css";
import { Paper } from "../../Components/Paper/Paper";

export class InfoPage extends React.Component {
  state = {
    data: ""
  };

  fetchUser = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    ).then(response => response.json());
    return res;
  };

  componentDidMount() {
    this.fetchUser().then(data => this.setState({ data }));
  }
  render() {
    const { data } = this.state;
    return (
      <div className={"mainContainer"}>
        <Paper userInfo={data} />
      </div>
    );
  }
}
