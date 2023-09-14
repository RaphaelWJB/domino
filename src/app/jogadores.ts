export interface Jogadores {
  _id?: string;
  nome: string | null;
  apelido: string;
  gatosNoite: {
    _id?: string;
    nome: string;
  }[];
  gatosRodada: {
    _id: string;
    nome: string;
  }[];
  totalGatos: number
}

export interface JogadoresPartida {
  _id?: string;
  nome: string | null;
  apelido: string;
  gatosNoite: {
    _id?: string;
    nome: string;
  }[];
  gatosRodada: {
    _id: string;
    nome: string;
  }[];
  totalPontos: number;
  totalGatos: number;
}
