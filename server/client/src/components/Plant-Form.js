import React from 'react';

export default class PlantForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        species: '',
        image_url: ''
    }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();

    }
  
    render() {
      return (
        <form className="form-class" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Species:
            <input type="text" value={this.state.species} onChange={this.handleChange} />
          </label>
          <label>
            Image URL:
            <input type="text" value={this.state.image_url} onChange={this.handleChange} />
          </label>
          
          <input className="btn btn-success" type="submit" value="Submit" />
        </form>
      );
    }
  }


