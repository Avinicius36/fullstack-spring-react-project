import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      status:"ACTIVE"
    }
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  saveEmployee = (e) => {
      e.preventDefault();
      let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, status: this.state.status};
      console.log("employee => " + JSON.stringify(employee));

      EmployeeService.createEmployee(employee).then(res => {
          this.props.history.push("/employees");
      })
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  cancel() {
    this.props.history.push('/employees');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />

                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />

                    <label>Email Id:</label>
                    <input
                      placeholder="Email"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.onChange}
                    />
                    <label>Status:</label>
                    <input
                      placeholder="Status"
                      name="Status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.onChange}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployComponent;