import {Link} from 'react-router-dom';
// Menu de navegacion--------------------------
function Menu(){
  return(
<div>
<nav className= "navbar bg-primary navbar-expand-lg border-bottom border-bottom-dark" data-bs-theme='dark'>
  <div className="container-fluid">
  <Link to="/home" className="navbar-brand" >Sys</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/perfil" className="nav-link">Perfil</Link>
        </li>
        <li className="nav-item">
        <Link to="/forms" className="nav-link">Form</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
);
}
//----------------------------------------------------------------
export default Menu;
