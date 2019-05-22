import React, { Fragment } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { ListPage } from "../ListPage/ListPage";
import { HomePage } from "../HomePage/HomePage";
import { InfoPage } from "../InfoPage/InfoPage";

export class Main extends React.Component {
  state = {
    contentSelected: "Home"
  };

  handleOnClick = contentName => {
    this.setState({ contentSelected: contentName });
  };

  render() {
    return (
      <Fragment>
        <NavBar handleClick={this.handleOnClick} />
      </Fragment>
    );
  }
}
