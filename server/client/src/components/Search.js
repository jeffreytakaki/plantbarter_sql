import React from 'react'
import Fuse from 'fuse.js';

export default class Search extends React.Component {
    constructor(props) {
        super();

        this.props = props
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        const search_options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
              "plant_id",
              "name"
            ]
        };

        console.log("this.props.list", this.props.list)
        const fuse = new Fuse(this.props.list, search_options); // "list" is the item array

        this.setState({
            fuse,
        })
    }

    handleSearch(event) {
        const searchValue = event.target.value;
        console.log('searchValue', searchValue)
        console.log("this.state", this.state)
        let result = this.state.fuse.search(searchValue);

        console.log('search results', result);
    }
    render() {
        return (
            <form className="search-container">
                <div className="section">
                    <input type="text" placeholder='search plants' onChange={this.handleSearch} />
                </div>
                <div className="section">
                    <button type='submit'>search</button>
                </div>
            </form>
        )
    }
}