import { Col } from 'antd'
import { useEffect } from 'react';
import { getPokemon } from './api';
import './App.css';
import PokeList from './components/List';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg' 
import { connect } from 'react-redux'
import { setPokemons as setPokemonsActions } from './actions';

function App({ pokemons, setPokemons }) {
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons", pokemons)
  useEffect(()=> {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon()
      setPokemons(pokemonRes)
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
