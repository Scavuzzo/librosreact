import Header from './Header';
import { Link, useHistory } from "react-router-dom";

const Category = (props) => {
    const {
        libros,
        categoria
    } = props;
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
    console.log(cat);
    return(
        <div>
            <Header libros={libros}/>
            <div className="libros-container category">
                    <h3 className="capitalize">{categoria === "año" ? categoria + "s" : categoria + "es"} </h3>
                    <ul>
                        {categoria === "editorial" ? catFilter.map(cat => <li><Link to={`/editorial/${cat}`}>{cat}</Link></li>) : categoria === "autor" ? catFilter.map(cat => <li><Link to={`/autor/${cat}`}>{cat}</Link></li>) : categoria === "año" ? catFilter.map(cat => <li><Link to={`/año/${cat}`}>{cat}</Link></li>) : <p>No hemos encontrado esa categoria</p>}
                    </ul>
                    <Link className="btn" onClick={() => history.goBack()}>Volver atrás</Link>
                    <Link className="btn" to="/">Ir al inicio</Link>
            </div>
        </div>
    )
}

export default Category;