
import foto from './image/pic.jpg';

function Perfil(){
  return(
    //container general----------------------------------------------------------------
    <div className='container'>
      <h1>Perfil</h1>
      <div className='row g-3'>
      <div className='col'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ab quo suscipit ipsum dolores cupiditate voluptas quae voluptatibus perspiciatis consectetur, sequi, enim quod quia, laboriosam incidunt doloribus dolore at! Dolorum nemo blanditiis eius eaque rerum. Expedita nisi dicta enim deserunt.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ab quo suscipit ipsum dolores cupiditate voluptas quae voluptatibus perspiciatis consectetur, sequi, enim quod quia, laboriosam incidunt doloribus dolore at! Dolorum nemo blanditiis eius eaque rerum. Expedita nisi dicta enim deserunt.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ab quo suscipit ipsum dolores cupiditate voluptas quae voluptatibus perspiciatis consectetur, sequi, enim quod quia, laboriosam incidunt doloribus dolore at! Dolorum nemo blanditiis eius eaque rerum. Expedita nisi dicta enim deserunt.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ab quo suscipit ipsum dolores cupiditate voluptas quae voluptatibus perspiciatis consectetur, sequi, enim quod quia, laboriosam incidunt doloribus dolore at! Dolorum nemo blanditiis eius eaque rerum. Expedita nisi dicta enim deserunt.
      </p>
      </div>
      <div className='col'>
        <img src={foto} alt="Searching Men" />
        </div>
    </div>
    </div>
  );
}
//----------------------------------------------------------------
export default Perfil;