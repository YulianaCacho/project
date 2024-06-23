const Contactanos = ( ) => {
    return (
     <aside style={{ backgroundColor: '#b3e5fc', padding: '20px', borderRadius: '20px' }}>
     <br></br>
     <form>
         <center><h2> Contactanos </h2></center>
     <br></br>

        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label"><i data-feather="user"></i> Nombre y apellidos:</label>
           <input type="text" required class="form-control" id="formGroupExampleInput" placeholder="Diego Bohorquez Novoa"/>
        </div>
        <br></br>

        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" className="form-label"><i data-feather="mail"></i> Correo Electrónico:</label>
           <input type="email" required className="form-control" id="formGroupExampleInput" placeholder="liliana_24@hotmail.com"/>
        </div>

        <br></br>

        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label"><i data-feather="users"></i> Mensaje:</label>
           <input type="number" required class="form-control" id="formGroupExampleInput" placeholder="20"/>
        </div>
        
        <br></br>
        <br></br>
        <center><button className="btn btn-primary">
    <i data-feather="log-in"></i> Enviar </button></center>
    <br></br>
        </form>
           </aside>
    );
};
export default Contactanos;