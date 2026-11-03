import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PokemonCard } from '@/components/PokemonCard';
import { buscarPokemons } from '@/services/pokeapi';
import { Pokemon } from '@/types/Pokemon';

export default function Pokedex() {
  const [lista, setLista] = useState<Pokemon[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  // Consulta os pokémons na PokéAPI
  async function consultar() {
    try {
      const pokemons = await buscarPokemons(20);
      setLista(pokemons);
    } catch (e) {
      console.log('Erro ao consultar pokémons:', e);
      setErro(true);
    }
    setCarregando(false);
  }

  // Botão Atualizar
  function atualizar() {
    setCarregando(true);
    setErro(false);
    consultar();
  }

  useEffect(() => {
    consultar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Pokédex</Text>

      <Pressable style={estilos.botao} onPress={atualizar}>
        <Text style={estilos.textoBotao}>Atualizar</Text>
      </Pressable>

      {carregando && (
        <View style={estilos.aviso}>
          <ActivityIndicator size="large" color="#005b96" />
          <Text style={estilos.textoAviso}>Carregando pokémons...</Text>
        </View>
      )}

      {erro && (
        <Text style={estilos.textoErro}>
          Erro ao buscar os dados. Verifique a internet e toque em Atualizar.
        </Text>
      )}

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#005b96',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aviso: {
    alignItems: 'center',
    marginVertical: 15,
  },
  textoAviso: {
    marginTop: 8,
    fontSize: 16,
  },
  textoErro: {
    color: '#c0392b',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 15,
  },
});
