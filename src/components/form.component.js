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
  }

  apiCallPost = () => {
    const userInput = {
      text: this.state.value
    }

    axios
    .post('http://localhost:8000/api/user_input/', userInput)
  };

  apiCallGet = () => {
    axios
    .get('http://localhost:8000/api/')
    .then(res => this.setState({ response: res.data }))
  };

  handleSubmit(event) {
    event.preventDefault();
    this.apiCallPost()
    setTimeout(() => {
      this.apiCallGet()
    }, 3000);

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> {this.state.response} <br></br>
          <input className='input-name' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className='input-btn' type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;