//import './App.css'
import Cards from '../src/components/Cards/Cards.jsx'
import styles from "./App.module.css"
import Nav from "../src/components/Nav/Nav"
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import About from "../src/components/About/About"
import Detail from "../src/components/Detail/Detail"
import Form from './components/Form/Form.jsx'
import Favorites from "../src/components/Favorites/Favorites"


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
    const username = "miliguillot12@gmail.com";
    const password = "123456";
    const navigate = useNavigate();
    const {pathname} = useLocation();

    //si el access es falso nos mostrara la ruta del login
    useEffect(() => {
      !access && navigate("/");
   }, [navigate, access]);

  function onSearch(id) {
    const URL = "https://be-a-rym.up.railway.app/api"
    const KEY = "cf893d2caad2.349d61a2b53d07cb1b33"
   if(characters.find((char) => char.id === id)) { //char.id representa cada elemento de character con su id
   return alert("Ya se mostro el personaje")
   } //si en mi estado no tengo el personaje con el id que ingrese voy a hacer la peticion de abajo pidiendo el pj para mostrarlo,
   // y lo guardo en mi estado. En caso de que en mi estado si tenga el personaje con el id que estoy pidiendo voy a mostrar un alert
   
    fetch(`${URL}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) { //si data.name existe... Guardo en el estado la response
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  //ponele que tocamos en la x de la tarj con id 1, todo lo que no sea 1 filtra, menos el 1
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => char.id !== id) //filter no modifica el array original, devuelve un nuevo array
    )                                             //sin el personaje del id que pusimos. Si la card id es igual al id donde hacemos click en la card                                              // entonces la función retorna false, lo que significa que char debe ser excluido del nuevo array                                             //si la char id es distinta al id rettorna true  lo que significa que char debe incluirse en el nuevo array 
  }
  const login = (userData) => { //le paso userData como parametro, cuando ejecute la funcion en form ahi le paso el userdata verdadero
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate("/home");
    } else {
      alert("Algo salió mal");
    }//si el pass y user son correctos nos mostrara la ruta home
 }
 
  //si es distinto a barra muestra nav, si es la barra no lo muestra
  return (
    <div className={styles.App} style={{ padding: '25px' }}> 
      {pathname !== "/" && <Nav onSearch={onSearch}></Nav>} 
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/detail/:detailId" element={<Detail />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/favorites" element={<Favorites/>}>
        </Route>
        <Route path="/" element={<Form login={login} />}>
        </Route>
        
      </Routes>
    </div>
  )
}
export default App
