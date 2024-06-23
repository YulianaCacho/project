import React from 'react';
import '/workspaces/project/src/css/Contactanos.css'; 

const Contactanos = () => {
    return (
        <contactanos style={{ backgroundColor: '#e1e2ef', padding: '20px' }}>
            <br />
            <center><h2>Contactanos</h2></center>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    <i data-feather="user"></i> Nombre y apellidos:
                                </label>
                                <input type="text" required className="form-control" id="formGroupExampleInput" placeholder="Diego Bohorquez Novoa" />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">
                                    <i data-feather="mail"></i> Correo Electrónico:
                                </label>
                                <input type="email" required className="form-control" id="formGroupExampleInput2" placeholder="liliana_24@hotmail.com" />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput3" className="form-label">
                                    <i data-feather="users"></i> Mensaje:
                                </label>
                                <textarea required className="form-control" id="formGroupExampleInput3" placeholder="Escribe tu mensaje aquí"></textarea>
                            </div>
                            <br />
                            <center>
                                <button className="btn btn-primary">
                                    <i></i> Enviar
                                </button>
                            </center>
                            <br />
                        </form>
                    </div>
                    <div className="col-md-6">
                        <center><h3 className="redes-title">Redes Sociales</h3></center>
                        <br />
                        <ul className="list-unstyled social-list">
                            <li><i data-feather="facebook"></i> Facebook</li>
                            <br />
                            <li><i data-feather="twitter"></i> Twitter</li>
                            <br />
                            <li><i data-feather="instagram"></i> Instagram</li>
                            <br />
                            <li><i data-feather="linkedin"></i> LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </contactanos>
    );
};

export default Contactanos;
