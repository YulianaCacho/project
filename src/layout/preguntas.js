import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/workspaces/project/src/css/Preguntas.css';

const Preguntas = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card" onClick={() => toggleAnswer(0)}>
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 1
                        </div>
                        {activeIndex === 0 && <div className="card-body">Respuesta 1</div>}
                    </div>
                    <div className="card mt-3" onClick={() => toggleAnswer(1)}>
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 2
                        </div>
                        {activeIndex === 1 && <div className="card-body">Respuesta 2</div>}
                    </div>
                    <div className="card mt-3" onClick={() => toggleAnswer(2)}>
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 3
                        </div>
                        {activeIndex === 2 && <div className="card-body">Respuesta 3</div>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" onClick={() => toggleAnswer(3)}>
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 4
                        </div>
                        {activeIndex === 3 && <div className="card-body">Respuesta 4</div>}
                    </div>
                    <div className="card mt-3" onClick={() => toggleAnswer(4)}>
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 5
                        </div>
                        {activeIndex === 4 && <div className="card-body">Respuesta 5</div>}
                    </div>
                    <div className="card mt-3" onClick={() => toggleAnswer(5)}>
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 6
                        </div>
                        {activeIndex === 5 && <div className="card-body">Respuesta 6</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preguntas;