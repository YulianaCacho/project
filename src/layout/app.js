import React from 'react';
import Search  from '/workspaces/project/src/layout/search' ;
import TopSelection from '/workspaces/project/src/layout/topselection';
import '/workspaces/project/src/css/Search.css'; 
import '/workspaces/project/src/css/TopSelection.css'; 

const App = () => {
    return (
        <div>
            <Search />
            <TopSelection />
        </div>
    );
};

export default App;