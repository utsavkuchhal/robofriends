import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className = 'tc bg-light-red dib br3 pa3 ma2 grow bw2'>
        <input 
        type = "search" 
        placeholder = "search robots"
        onChange = {searchChange} />
        </div>
    )
}

export default SearchBox;