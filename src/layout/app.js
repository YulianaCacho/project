import React from 'react';
import Search from '/workspaces/project/src/layout/Search';
import TopSelection from '/workspaces/project/src/layout/TopSelection';
import '/workspaces/project/src/styles.css'; // Opcional, para estilos globales adicionales

const App = () => {
    return (
        <div>
            <Search />
            <TopSelection />
            {/* Aquí puedes añadir otros componentes como Header, Footer, etc. */}
        </div>
    );
};

export default App;
