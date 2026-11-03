import { PokemonClient } from 'pokenode-ts';

import { Pokemon } from '@/types/Pokemon';

// Pacote do npm que consulta a PokéAPI
const api = new PokemonClient();

// Busca os primeiros pokémons na PokéAPI
export async function buscarPokemons(quantidade: number) {
  // Lista com os nomes (começando do primeiro)
  const resposta = await api.listPokemons(0, quantidade);

  const lista: Pokemon[] = [];

  // Para cada nome, busca os dados completos
  for (const item of resposta.results) {
    const dados = await api.getPokemonByName(item.name);

    const pokemon: Pokemon = {
      id: dados.id,
      nome: dados.name.charAt(0).toUpperCase() + dados.name.slice(1),
      imagem: dados.sprites.front_default ?? '',
      tipos: dados.types.map((t) => t.type.name),
      altura: dados.height / 10,
      peso: dados.weight / 10,
    };

    lista.push(pokemon);
  }

  return lista;
}
