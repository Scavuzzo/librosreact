import './App.scss';
import Home from './Home';
import Single from './Single';
import Books from './Books';
import Category from './Category';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

const App = () => {
  const [listaLibros, setListaLibros] = useState([]);

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

  return (
    <div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/libro/:titulo" ><Single libros={listaLibros}/></Route>
        <Route path={`/autor/:autor`} ><Books libros={listaLibros}/></Route>
        <Route path={`/editorial/:editorial`} ><Books libros={listaLibros}/></Route>
        <Route path={`/año/:year`}><Books libros={listaLibros}/></Route>
        <Route path={`/editoriales`}><Category libros={listaLibros} categoria="editorial"/></Route>
        <Route path={`/autores`}><Category libros={listaLibros} categoria="autor"/></Route>
        <Route path={`/años`}><Category libros={listaLibros} categoria="año"/></Route>
      </Switch>
    </div>
  );
}

export default App;
