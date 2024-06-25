import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/workspaces/project/src/css/Preguntas.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta o ajusta la ruta según sea necesario

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
                    <div
                        className={`card btn-outline-primary ${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(0)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> 
                            <strong>¿CUÁL ES LA DIFERENCIA ENTRE LOS PROCESADORES INTEL Y AMD?</strong>
                        </div>
                        {activeIndex === 0 && 
                           <div className="card-body respuesta">
                             <br></br>
                              <center>
                              Los procesadores Intel y AMD tienen diferencias en arquitectura, rendimiento y precios. Intel suele ofrecer un mejor rendimiento por núcleo, 
                              lo que es beneficioso para aplicaciones de un solo hilo, mientras que AMD ofrece más núcleos y hilos a un precio más competitivo, 
                              lo cual es ideal para multitarea y aplicaciones multihilo.
                              </center>
                            </div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 1 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(1)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 2
                        </div>
                        {activeIndex === 1 && <div className="card-body respuesta">Respuesta 2</div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 2 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(2)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 3
                        </div>
                        {activeIndex === 2 && <div className="card-body respuesta">Respuesta 3</div>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className={`card btn-outline-primary ${activeIndex === 3 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(3)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 4
                        </div>
                        {activeIndex === 3 && <div className="card-body respuesta">Respuesta 4</div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 4 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(4)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 5
                        </div>
                        {activeIndex === 4 && <div className="card-body respuesta">Respuesta 5</div>}
                    </div>
                    <div
                        className={`card btn-outline-primary mt-3 ${activeIndex === 5 ? 'active' : ''}`}
                        onClick={() => toggleAnswer(5)}
                    >
                        <div className="card-body">
                            <i className="bi bi-chevron-right"></i> Pregunta 6
                        </div>
                        {activeIndex === 5 && <div className="card-body respuesta">Respuesta 6</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preguntas;
