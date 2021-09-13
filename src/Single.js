import Header from './Header';
import { useParams, Link, useHistory } from 'react-router-dom';


const Single = (props) => {
    const {libros} = props;
    let params = useParams();
    const history = useHistory();

    return (
        
        <div>
            <Header libros={libros}/>
            <div className="single">
                <div className="single__container">
                    {libros.filter(libro => libro.titulo.toLowerCase() === params.titulo.toLowerCase()).map((libro, i) => 
                    <>
                        <img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" />
                        <h3>{libro.titulo}</h3>
                        <p><Link to={`/autor/${libro.autor}`}>{libro.autor}</Link></p>
                        <p><Link to={`/editorial/${libro.editorial}`}><span className="editorial">{libro.editorial}</span></Link></p>
                        <p><Link to={`/year/${libro.year}`}>({libro.year})</Link></p>
                        <p>{libro.descripcion}</p>
                        <div className="btns">
                            <Link className="btn" onClick={() => history.goBack()}>Volver atrás</Link>
                            <Link className="btn" to="/">Ir al inicio</Link>
                        </div>
                        
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Single;