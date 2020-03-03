import React from 'react';
import { connect } from 'react-redux';
import PlantListConnected from './Plant-List';
import { searchPlantsByKeyword, searchLoadMore } from '../actions/searchActions';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            keyword: '',
            pagination: 0,
            numberOfResults: 5
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }


    handleChange(event) {
        this.setState({keyword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({pagination: 0}, () => {
            // setState is async, so pagination value was not updated before i called searchLoadMore function. using the callback ensured the value was set. 
            this.props.searchPlants(this.state)
        });    
    }

    handleLoadMore() {
        this.setState({pagination: this.state.pagination + this.state.numberOfResults}, () => {
            // setState is async, so pagination value was not updated before i called searchLoadMore function. using the callback ensured the value was set. 
            this.props.searchLoadMore(this.state)
        });
    }

    displayResults() {

        if(this.props.search && this.props.search.length > 0) {
            console.log('this.props.search', this.props.search)
            return (
                <div className="search-results">
                    <div className="search-section">
                        <PlantListConnected plants={this.props.search} />
                    </div>
                    <div className="search-section">
                        <button className="btn btn-primary btn-load-more" onClick={this.handleLoadMore}>Load More</button>
                    </div>
                </div>
            )
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
        searchPlants: (search) => {
            dispatch(searchPlantsByKeyword(search));
        },
        searchLoadMore: (search) => {
            dispatch(searchLoadMore(search));
        }
    };
};

const mapStateToProps = (state) => {
    console.log("state.searchResults", state)
    return {
        search: state.searchResults
    }
};

const SearchConnected = connect(mapStateToProps, mapDispatchToEvents)(Search)
export default SearchConnected




