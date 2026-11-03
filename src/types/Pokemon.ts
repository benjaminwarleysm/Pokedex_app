// Dados de um Pokémon que aparecem na listagem
export type Pokemon = {
  id: number;
  nome: string;
  imagem: string;
  tipos: string[];
  altura: number; // em metros
  peso: number; // em quilos
};
