import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState ({
        name : null,
        frontImage: null
    })
    const [pokemonID, setPokemonID] = useState(1);

    useEffect (()=>{
        let didCancel = false;
       axios({
           method: 'GET',
           url : "https://pokeapi.co/api/v2/pokemon/8"
       }).then((response) => {
               console.log('response= ', response);
               setPokemon({
                   name: response.data.name,
                   frontImage: response.data.sprites.front_default
               })
           });
           return () => {
               console.log('clean effect'); //invalid effect nếu ko muốn sử dụng
               didCancel = true;
           }
       
    }, [pokemonID]); //dấu ngoặc vuông ám chỉ chỉ call API 1 lần duy nhất
    useEffect(() =>{
        document.title = '${pokemon.name}'
    }, [pokemon.name]);

    useEffect (() =>{
        setTimeout(()=> {
            setPokemonID(pokemonID+1)
        }, 3000);
    }, [pokemonID])
    console.log('render with pokemon = ', pokemon);
    const handlePreviousClick = () => {
        setPokemonID(pokemonID - 1);
    }
    const handleNextClick = () => {
        setPokemonID(pokemonID + 1);
    };
    return (
        <div>
            <p>Name: { pokemon.name }</p>
            <img src={ pokemon.frontImage } alt=""/>
            <p>ID: { pokemonID }</p>
            <div>
               <button onClick={ handlePreviousClick }>Previous</button>
               <button onClick={ handleNextClick }>Next</button>
            </div>
        </div>
    );
};

export default PokemonPage;