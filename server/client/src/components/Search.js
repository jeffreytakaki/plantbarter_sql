import React from 'react';
import axios from 'axios';
import PlantListConnected from './Plant-List';

export default class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            keyword: '',
            plants: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({keyword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/api/v1/plants/search', {keyword: this.state.keyword}).then(results => {
            console.log('results', results);
            this.setState({
                plants: results.data
            })
        })
    }

    render() {

        return (
            <div className="search-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.keyword} onChange={this.handleChange} placeholder="search plants" /> 
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                    </div>
                </form>
                <PlantListConnected plants={this.state.plants} />
            </div>
            
        )
    }
};



