import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  navigateToHome() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div
              className="navbar-brand"
              onClick={this.navigateToHome.bind(this)}
            >
              Employee Management
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
