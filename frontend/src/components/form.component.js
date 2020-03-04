import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    // this.apiCall()
  }

  apiCall = () => {
    console.log(this.state.value)
    axios
    .post('http://localhost:8000/greetings', this.state.value)
    .then(res => this.setState({ response: res.data }))
  };

  handleSubmit(event) {
    console.log('submitted')
    event.preventDefault();
    this.apiCall()
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> {this.state.response}
          <input className='input-name' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className='input-btn' type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;