import { Link, useHistory } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <h1><a href="/">El gran libro</a></h1>
            <div>
                
            </div>
            <div className="header__nav">
            <p>Buscar por: </p>
            <nav >
                    <Link to="/editoriales">Editoriales</Link>
                    <Link to="/autores">Autores</Link>
                    <Link to="/años">Año</Link>
            </nav>
            </div>

        </header>
    )
}

export default Header;