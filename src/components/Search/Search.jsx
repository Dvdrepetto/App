import './Search.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}
const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}
const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
    if(elemento.userId.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

  return (
    <div className="Search">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Titulo</th>
              <th>Nombre de Usuario</th>
            </tr>
          </thead>

          <tbody>
            {usuarios && 
            usuarios.map((usuario)=>(
              <tr key={usuario.id}>
                <td>{usuario.userId}</td>
                <td>{usuario.id}</td>
                <td>{usuario.title}</td>
                <td>{usuario.completed}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Search;