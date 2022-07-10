import { Col } from 'antd'
import { useEffect } from 'react';
import { getPokemon } from './api';
import './App.css';
import PokeList from './components/List';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg' 
import { useDispatch, useSelector } from 'react-redux'
import { setPokemons } from './actions';

function App() {

  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon()
      dispatch(setPokemons(pokemonRes))
    }

    fetchPokemons()
  }, [setPokemons])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokeList pokemons={pokemons}/>
    </div>
  );
}

export default App;
