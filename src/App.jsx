import image0 from './images/rey_atanagildo.png';
import image1 from './images/rey_ervigio.png';
import image2 from './images/rey_sisebuto.png';
import './App.css'
import './reyescss.css';

function App() {
 let nombres=["Atanagildo", "Ervigio", "Sisebuto"];

  return (
    <div className='contenedor'>
      <div className="caja">
        <img src={image0}/>
        <div className="nombre">{nombres[0]}</div>
      </div>
      <div className="caja">
        <img src={image1}/>
        <div className="nombre">{nombres[1]}</div>
      </div>
      <div className="caja">
        <img src={image2}/>
        <div className="nombre">{nombres[2]}</div>
      </div>
    </div>
  )
}
export default App;
