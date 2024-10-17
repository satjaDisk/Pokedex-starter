import axios from "axios"
import { POKEMON_BASE_URL } from '@/utils/constant';
import { IPokemonListRespons } from '@/interface/pokemonList';

interface IGetPokemonListResponse {
    status:number | undefined,
    data:IPokemonListRespons
}

export const pokemonListServices = {
    getPokemonList : async (limit?:number,offset?:number):Promise<IGetPokemonListResponse> => {
        const response = await axios.get(
            `${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`)
        return response
    }
}