import React, { useEffect } from "react";
import { pokemonListServices,pokemonDetailServices } from "@/services";

const HomePage = () => {
    const callData = async () => {
        const data =await pokemonListServices.getPokemonList()
        console.log('data',data.data);
    }
    
    

    useEffect(() => {
        callData()
  }, [])
    return (
        <div>
            HomePage
        </div>
    )
    
}

export default HomePage
