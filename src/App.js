import React from 'react';
import './App.css';
import goodIcon from './images/good.png';
import badIcon from './images/bad.png';
import warningIcon from './images/warning.png';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        this.setState({
            search: event.target.value,
        });
    }

    render() {
        let iconElement;
        const searchStr = this.state.search

        if (searchStr == 'lime') {
            iconElement = <Bad/>
        } else if (searchStr == 'lemon') {
            iconElement = <Good/>
        } else {
            iconElement = <Warning/>
        }

        return (
            <div className='main'>
                <Title/>
                <SearchBar onChange={this.handleSearch}/>
                <Results icon={iconElement}/>
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <label className='title'>Is this safe for pregnant women?</label>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input className='search_bar' type='text' onChange={this.props.onChange}/>
            </form>
        );
    }
}

class Results extends React.Component {
    render() {
        return (
            <div className='results'>
                {this.props.icon}
            </div>
        );
    }
}

class Good extends React.Component {
    render() {
        return (
            <img className='results_icon' src={goodIcon}/>
        );
    }
}

class Bad extends React.Component {
    render() {
        return (
            <img className='results_icon' src={badIcon}/>
        );
    }
}

class Warning extends React.Component {
    render() {
        return (
            <img className='results_icon' src={warningIcon}/>
        );
    }
}

function App() {
    return (
        <Main/>
    );
}

export default App;
