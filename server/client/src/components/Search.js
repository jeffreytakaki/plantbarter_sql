import React from 'react';
import { connect } from 'react-redux';
import PlantListConnected from './Plant-List';
import { searchPlantsByKeyword } from '../actions/searchActions';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            keyword: '',
            pagination: 1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({keyword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchPlants(this.state.keyword)
    }

    displayResults() {
        if(this.props.search) {
            return <PlantListConnected plants={this.props.search} />
        }

        return '';
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
                {this.displayResults()}
                
            </div>
            
        )
    }
};


const mapDispatchToEvents = (dispatch) => {
    return {
        searchPlants: (keyword) => {
            dispatch(searchPlantsByKeyword(keyword));
        }
    };
};

const mapStateToProps = (state) => {
    console.log("state.searchResults", state.searchResults)
    return {
        search: state.searchResults
    }
};

const SearchConnected = connect(mapStateToProps, mapDispatchToEvents)(Search)
export default SearchConnected




