import { Image, StyleSheet, Text, View } from 'react-native';

import { Pokemon } from '@/types/Pokemon';

type PokemonCardProps = {
  pokemon: Pokemon;
};

// Cor de cada tipo (os que não estiverem aqui usam cinza)
const coresDosTipos: Record<string, string> = {
  normal: '#a8a878',
  fire: '#f08030',
  water: '#6890f0',
  electric: '#f8c800',
  grass: '#78c850',
  ice: '#98d8d8',
  fighting: '#c03028',
  poison: '#a040a0',
  ground: '#c8a850',
  flying: '#a890f0',
  psychic: '#f85888',
  bug: '#a8b820',
  rock: '#b8a038',
  ghost: '#705898',
  dragon: '#7038f8',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#ee99ac',
};

// Cartão de um Pokémon
export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <View style={estilos.cartao}>
      {pokemon.imagem ? (
        <Image source={{ uri: pokemon.imagem }} style={estilos.imagem} />
      ) : (
        <View style={estilos.imagem}>
          <Text style={estilos.semImagem}>Sem imagem</Text>
        </View>
      )}

      <View style={estilos.dados}>
        <Text style={estilos.numero}>Nº {String(pokemon.id).padStart(3, '0')}</Text>
        <Text style={estilos.nome}>{pokemon.nome}</Text>

        <View style={estilos.linhaTipos}>
          {pokemon.tipos.map((tipo) => (
            <Text
              key={tipo}
              style={[estilos.tipo, { backgroundColor: coresDosTipos[tipo] ?? '#888' }]}
            >
              {tipo}
            </Text>
          ))}
        </View>

        <Text style={estilos.detalhe}>
          Altura: {pokemon.altura} m   Peso: {pokemon.peso} kg
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderLeftWidth: 5,
    borderLeftColor: '#005b96',
    backgroundColor: '#fff',
  },
  imagem: {
    width: 90,
    height: 90,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  semImagem: {
    fontSize: 12,
    color: '#888',
  },
  dados: {
    flex: 1,
  },
  numero: {
    fontSize: 13,
    color: '#666',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  linhaTipos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  tipo: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    marginRight: 6,
    overflow: 'hidden',
  },
  detalhe: {
    fontSize: 14,
    color: '#444',
  },
});
