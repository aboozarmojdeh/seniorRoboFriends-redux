import React, {Fragment} from 'react';

const SearchBox = ({onSearchChange}) => {
  return (
    <Fragment>
    
    <div className="pa2">
        <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={onSearchChange} />
   </div>
   
    </Fragment>
  )
};

export default SearchBox;