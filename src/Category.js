import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

const Category = (props) => {
    const {
        libros,
        categoria
    } = props;
    const [busqueda, setBusqueda] = useState();
    const history = useHistory();
    var cat = [];
    var catFilter = [];

    if(categoria === "año"){
        for (let libro of libros) {
            cat.push(libro["year"]);
        }    
    } else {
        for (let libro of libros) {
            cat.push(libro[categoria]);
        }    
    }
    catFilter = [...new Set(cat)];

    function buscador () {
        setBusqueda(document.getElementById("search").value);
    }

    return(
        <div className="altura">
            <input className="header__buscador" type="search" placeholder="Buscar..." id="search" onKeyUp={buscador} />
            <div className="category">
                <div className="libros-container">
                    <h3 className="capitalize">{categoria === "año" ? categoria + "s" : categoria + "es"} </h3>
                    <div className="libros">
                        {busqueda ? <>
                                <ul>
                                    {categoria === "editorial" ? catFilter.filter(category => category.toLowerCase().includes(busqueda.trim().toLowerCase())).map(cat => <li><Link to={`/editorial/${cat}`}>{cat}</Link></li>) : categoria === "autor" ? catFilter.filter(category => category.toLowerCase().includes(busqueda.trim().toLowerCase())).map(cat => <li><Link to={`/autor/${cat}`}>{cat}</Link></li>) : categoria === "año" ? catFilter.filter(category => category.toString().includes(busqueda)).map(cat => <li><Link to={`/año/${cat}`}>{cat}</Link></li>) : <p>No hemos encontrado esa categoria</p>}
                                </ul>
                            </> : <>
                                <ul>
                                    {categoria === "editorial" ? catFilter.map(cat => <li><Link to={`/editorial/${cat}`}>{cat}</Link></li>) : categoria === "autor" ? catFilter.map(cat => <li><Link to={`/autor/${cat}`}>{cat}</Link></li>) : categoria === "año" ? catFilter.map(cat => <li><Link to={`/año/${cat}`}>{cat}</Link></li>) : <p>No hemos encontrado esa categoria</p>}
                                </ul>
                            </>
                        }
                    </div>
                    <Link className="btn" onClick={() => history.goBack()}>Volver atrás</Link>
                    <Link className="btn" to="/">Ir al inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default Category;