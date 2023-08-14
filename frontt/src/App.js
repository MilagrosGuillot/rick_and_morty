import './App.css'
import Cards from '../src/components/Cards/Cards.jsx'
import styles from "./App.module.css"
import Nav from "../src/components/Nav/Nav"
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import About from "../src/components/About/About"
import Detail from "../src/components/Detail/Detail"
import Form from './components/Form/Form.jsx'
import Favorites from "../src/components/Favorites/Favorites"
import axios from "axios"
import FormRegister from "./components/Form/FormRegister"


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
    const navigate = useNavigate();
    const {pathname} = useLocation();

    //si el access es falso nos mostrara la ruta del login
    // useEffect(() => {
    //   if (pathname !== "/home") {
    //     !access && navigate("/");
    //   }
    // }, [navigate, access, pathname]);
    
  function onSearch(id) {
   if(characters.find((char) => char.id === id)) { 
   return alert("Ya se mostro el personaje")
   } 
   
    fetch(`http://localhost:3001/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) { 
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };
  //ponele que tocamos en la x de la tarj con id 1, todo lo que no sea 1 filtra, menos el 1
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => char.id !== id) 
    )                       
  }
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/login";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      throw new Error(error);
    }
  };
 
  //si es distinto a barra muestra nav, si es la barra no lo muestra
  return (
    <div className={styles.App} style={{ padding: '25px' }}> 
     {(pathname !== "/" && pathname !== "/register") && <Nav onSearch={onSearch} />}
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
        <Route path="/register" element={<FormRegister/>}>
        </Route>
        
      </Routes>
    </div>
  )
}
export default App
