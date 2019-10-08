import React from 'react';

import './search.scss';

function Search() {
  return (<div>
    <input name="search" value="" placeholder="Искать"/>
    <button type="button">Искать</button>
    </div>
  );
}

export default Search;
