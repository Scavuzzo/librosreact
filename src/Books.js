import Header from './Header';
import { useParams, Link, useHistory } from 'react-router-dom';


const Books = (props) => {
    const { libros } = props;
    let params = useParams();
    const history = useHistory();
    console.log(libros);
    return (
        <div>
            <Header libros={libros}/>
            <div className="libros-container books">
                {params.autor ? <h3>Autor: {params.autor}</h3> : null}
                {params.autor ? <>
                    <ul>
                        {libros.filter(libro => libro.autor.toLowerCase() === params.autor.toLowerCase()).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.titulo} [{libro.editorial}] ({libro.year})</Link></li>)}
                    </ul>
                </> : null}



                {params.editorial ? <h3>Editorial: {params.editorial}</h3> : null}
                {params.editorial ? <>
                    <ul>
                        {libros.filter(libro => libro.editorial.toLowerCase() === params.editorial.toLowerCase()).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo} ({libro.year})</Link></li>)}
                    </ul>
                </> : null}

                {params.year ? <h3>Año: {params.year}</h3> : null}
                {params.year ? <> 
                    <ul>
                        {libros.filter(libro => parseInt(libro.year) === parseInt(params.year)).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo}</Link></li>)}
                    </ul>
                </> : null}
                
                <Link onClick={() => history.goBack()} className="btn">Volver atrás</Link>
                <Link to="/" className="btn">Ir al inicio</Link>

            </div>
        </div>
    )
}
export default Books;