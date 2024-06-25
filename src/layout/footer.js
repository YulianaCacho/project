const Footer = () => {
    return <footer>
        <br></br>
        <br></br>
        <p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>
                            Información de creador
                        </h5>
                        <p>
                            Correo electrónico: svelasquezr1@upao.edu.pe
                        </p>
                        <p>
                            Teléfono: 923-456-789
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Acerca de nosotros</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12 text-center">
                    <small>© 2024  | Todos los derechos reservados</small>
                    </div>
                </div>
            </div>
        </p>
    </footer>;
}

export default Footer;