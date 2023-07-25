import {useState,useRef} from 'react';
//Funcion y array------------------------------------------------
function Forms(){
  const [form, setForm] = useState([]);
  const refNombre = useRef();
  const refApellidos = useRef();
  const refTelefono = useRef();
  const agregar =()=>{
    const usuarioTemp={
      nombre: refNombre.current.value,
      apellidos: refApellidos.current.value,
      telefono: refTelefono.current.value,
    };
setForm([...form,usuarioTemp]);
refNombre.current.value='';
refApellidos.current.value='';
refTelefono.current.value='';

};
const eliminar =(posicion)=>{
  const usuarioTemp = [...form];
  usuarioTemp.splice(posicion,1);
  setForm(usuarioTemp);
}
//Formulario------------------------------------------------------
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-6'>
      <h1>Form</h1><hr />
    
      <form>
  <div class="mb-3">
    <label htmlfor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" ref={refNombre} placeholder='ingrese nombre'/>
  </div>
  <div class="mb-3">
    <label htmlfor="apellidos" className="form-label">Apellidos</label>
    <input type="name" className="form-control" ref={refApellidos} placeholder='ingrese Apellidos'/>
  </div>
  <div class="mb-3">
  <label htmlfor="telefono" className="form-label">Teléfono</label>
  <input type="phone" className="form-control" ref={refTelefono} placeholder='ingrese teléfono'/>
  </div>
  <button type="button" onClick={agregar} className="btn btn-primary">Guardar</button>
</form>
</div>
<div className='col-md-6'>
<h1>List</h1><hr />
<ul>
  {
    //Impresion de lista --------------------------------
    form.map((f,i)=>{
      return<div  key={i}>
        <div>
        <li className='card'>
          <div className='d-flex justify-content-between'>
          {i}.
{f.nombre} - {f.apellidos} - {f.telefono}
<span>
  <button onClick={()=>eliminar(i)} className='close-button'>x</button>
</span>
</div>
  
        </li>
        </div>
        </div>
      

    })
    //------------------------------------------------
  }
</ul>
</div>
    </div>
    </div>
  );
};

export default Forms;
