import { Col, Spin } from 'antd'
import { useEffect } from 'react';
import { getPokemon } from './api';
import './App.css';
import PokeList from './components/List';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg' 
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsWithDetails, setLoading } from './actions';

function App() {

  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonRes = await getPokemon()
      dispatch(getPokemonsWithDetails(pokemonRes))
      dispatch(setLoading(false))
    }

    fetchPokemons()
  }, [dispatch])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading ? 
        <Col span={8} offset={8}>
          <Spin spinning size='large'/>
        </Col>
      :
        <PokeList pokemons={pokemons}/>
      }
    </div>
  );
}

export default App;
