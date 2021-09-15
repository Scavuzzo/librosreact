import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [listaLibros, setListaLibros] = useState([]);
    const [busqueda, setBusqueda] = useState();

    const GetData = () => {
        fetch('https://librosrestapi.herokuapp.com/api')
            .then(res => res.json())
            .then(libros => {
                setListaLibros(libros);
            })
            .catch(err => console.log(err.message))
    }
    useEffect(() => {
        GetData()
    }, [])

    function buscador () {
        setBusqueda(document.getElementById("search").value);
    }
    return(
        <div className="altura">
        <div className="container home altura">
        <input className="header__buscador" type="search" placeholder="Buscar..." id="search" onKeyUp={buscador} />
            <div className="libros-container">
                <h3>Todos nuestros libros disponibles</h3>
                <div className="libros">
                    <ul>
                        {busqueda ? listaLibros.filter(libro => (libro.titulo.trim().toLowerCase().includes(busqueda.trim().toLowerCase())) || (libro.autor.trim().toLowerCase().includes(busqueda.trim().toLowerCase())) || (libro.editorial.trim().toLowerCase().includes(busqueda.trim().toLowerCase()))).map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo} [{libro.editorial}] ({libro.year})</Link></li>) : listaLibros.map((libro, i) => <li key={i}><Link to={`/libro/${libro.titulo}`}><img src={`data:image/jpeg;base64,${libro.imagen}`} alt="" /> {libro.autor} - {libro.titulo} [{libro.editorial}] ({libro.year})</Link></li>)}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;