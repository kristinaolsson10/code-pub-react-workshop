import React from "react";
import { albumCardStyle, albumCardImageStyle } from "../styles";

class AlbumCard extends React.Component {
    
    render() {
        const { album } = this.props;
        return (
            /* 4.2 Add the album card style here - see import */ 
            <div id="album-card">
                Album content goes here...
                { /* 3.1 Display the album cover image in an <img /> tag */ }
                { /* 4.3 Add the album image style here - see import */ }
                { /* 3.1 Print the name of the album */ }
                { /* 3.1 Print the name(s) of the artists */ }
            </div>
        )
    }

}

export default AlbumCard;