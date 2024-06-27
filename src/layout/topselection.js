import React from 'react';
import './TopSelection.css';

const TopSelection = () => {
    return (
        <div className="top-selection">
            <h2>Selección TOP</h2>
            <div className="top-selection-grid">
                <div className="top-item">
                    <img src="path/to/gamer-image.png" alt="Gamer" />
                    <div className="overlay">GAMER</div>
                </div>
                <div className="top-item">
                    <img src="path/to/designer-image.png" alt="Ingeniería y Diseño Gráfico" />
                    <div className="overlay">INGENIERÍA Y DISEÑO GRÁFICO</div>
                </div>
                <div className="top-item">
                    <img src="path/to/office-image.png" alt="Oficina" />
                    <div className="overlay">OFICINA</div>
                </div>
            </div>
        </div>
    );
};

export default TopSelection;