import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { fetchAlbumData } from './utils/data-utils';
import { albumContainerStyle } from './styles';
// 1.1 import the AlbumCard from components here

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            albumData: [],
            filteredAlbumData: [],
            selectedAlbum: undefined
        }
    }

    componentDidMount() {
        /* 2.1 Call the fetchAlbumData() function to get an object containing data from spotify-new-releases.json */
        /* Use this.setState(...) to set albumData */
    }

    handleSearchResults = (searchResults) => this.setState({ filteredAlbumData: searchResults })

    handleAlbumClick = (album) => ( { /* 5 Set selected album on the state */ } )

    render() {
        const { albumData, filteredAlbumData } = this.state;
        const albums = filteredAlbumData.length > 0 ? filteredAlbumData : albumData;
        return (
            <div style={{ textAlign: 'center' }}>
                <Header />
                <div>
                    <SearchBar albumData={albumData} onFilter={this.handleSearchResults} />

                    <h2>This is where your task begins! Edit App.js and save to reload! </h2>

                    { /* 3.1 Add album container style */ }
                    <div id="album-list-container" style={albumContainerStyle}>
                        { /* Looping through the albums */ }
                        { 
                            albums.map((album, index) => (
                                /* 1.2 Pass the album variable into the AlbumCard component as a prop */
                                <div key={index}>{/* 1.2 Use the AlbumCard component here */}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
