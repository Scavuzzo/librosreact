
import { useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';


const Books = (props) => {
    const { libros } = props;
    const [busqueda, setBusqueda] = useState();

    function buscador () {
        setBusqueda(document.getElementById("search").value);
    }

    let params = useParams();
    const history = useHistory();
    return (
        <div className="altura">
            <input className="header__buscador" type="search" placeholder="Buscar..." id="search" onKeyUp={buscador} />
            <div className="books-container">
                <div className="libros-container books">
                    {params.autor ? <h3>Autor: {params.autor}</h3> : null}
                    {params.autor ? <>
                        <div className="libros">
                            {busqueda ? <>
                                <ul>
                                    {libros.filter(libro => libro.autor.toLowerCase() === params.autor.toLowerCase()).filter(libro => (libro.editorial.toLowerCase().includes(busqueda.trim().toLowerCase())) || (libro.titulo.toLowerCase().includes(busqueda.trim().toLowerCase()))).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.titulo} [{libro.editorial}] ({libro.year})</Link></li>)}
                                </ul>
                            </> : <>
                                <ul>
                                    {libros.filter(libro => libro.autor.toLowerCase() === params.autor.toLowerCase()).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.titulo} [{libro.editorial}] ({libro.year})</Link></li>)}
                                </ul>
                            </>}
                        </div>
                    </> : null}
                    {params.editorial ? <h3>Editorial: {params.editorial}</h3> : null}
                    {params.editorial ? <>
                        <div className="libros">
                            {busqueda ? <>
                                <ul>
                                    {libros.filter(libro => libro.editorial.toLowerCase() === params.editorial.toLowerCase()).filter(libro => (libro.autor.toLowerCase().includes(busqueda.trim().toLowerCase()) || (libro.titulo.toLowerCase().includes(busqueda.trim().toLowerCase())))).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo} ({libro.year})</Link></li>)}
                                </ul>
                            </> : <>
                                <ul>
                                    {libros.filter(libro => libro.editorial.toLowerCase() === params.editorial.toLowerCase()).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo} ({libro.year})</Link></li>)}
                                </ul>
                            </>}
                        </div>
                    </> : null}
                    {params.year ? <h3>Año: {params.year}</h3> : null}
                    {params.year ? <> 
                        <div className="libros">
                            {busqueda ? <>
                                <ul>
                                    {libros.filter(libro => parseInt(libro.year) === parseInt(params.year)).filter(libro => (libro.autor.toLowerCase().includes(busqueda.trim().toLowerCase()) || libro.editorial.toLowerCase().includes(busqueda.trim().toLowerCase()) || (libro.titulo.toLowerCase().includes(busqueda.trim().toLowerCase())))).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo}</Link></li>)}
                                </ul>
                            </> : <>
                                <ul>
                                    {libros.filter(libro => parseInt(libro.year) === parseInt(params.year)).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo}</Link></li>)}
                                </ul>
                            </>}
                        </div>
                    </> : null}
                    <Link onClick={() => history.goBack()} className="btn">Volver atrás</Link>
                    <Link to="/" className="btn">Ir al inicio</Link>
                </div>
            </div>
        </div>
    )
}
export default Books;