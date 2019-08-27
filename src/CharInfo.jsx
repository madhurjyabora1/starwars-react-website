import React, { Component } from "react";
import { Link } from "react-router-dom";

class CharInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.open = this.open.bind(this);
    this.close = this.open.bind(this);
  }
  open() {
    this.setState({ expanded: !this.state.expanded });
  }
  close() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const info = this.props.charInfo.name.split(" ").join("");

    return (
      <div className="user-details">
        <Link className="btn btn-info" to={`/char/${info}`}>
          Show info
        </Link>
      </div>
    );
  }
}
export default CharInfo;
