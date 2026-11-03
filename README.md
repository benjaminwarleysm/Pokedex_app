# Pokédex (Expo + React Native + TypeScript)

Aplicativo que lista 20 Pokémon com dados da PokéAPI, usando o pacote npm **pokenode-ts**.

## Como executar

```
npm install
npx expo start
```

Verificações: `npx tsc --noEmit` e `npx expo lint`.

## Organização

```
src/
  app/
    _layout.tsx        navegação (Expo Router)
    index.tsx          tela "Pokédex" (lista, carregando, erro, atualizar)
  components/
    PokemonCard.tsx    cartão de um Pokémon (imagem, nº, nome, tipos, altura, peso)
  services/
    pokeapi.ts         usa o pokenode-ts para buscar os dados
  types/
    Pokemon.ts         tipo TypeScript do Pokémon
```

## Como funciona

1. `buscarPokemons(20)` pede a lista dos 20 primeiros Pokémon (`listPokemons`).
2. Para cada nome, busca os dados completos (`getPokemonByName`).
3. A tela guarda o resultado com `useState` e chama a busca ao abrir (`useEffect`).
4. Enquanto carrega aparece o `ActivityIndicator`; se der erro, aparece uma mensagem.
5. O botão "Atualizar" faz a busca de novo.

## Se o pokenode-ts não funcionar no celular

Só o arquivo `src/services/pokeapi.ts` usa o pacote. Basta trocar a busca nele,
mantendo o retorno `Pokemon[]`; a tela e o cartão continuam iguais.
