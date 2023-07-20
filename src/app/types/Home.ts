interface Recipe {
  receitaId: number;
  nome: string;
  horas: number;
  minutos: number;
  segundos: number;
  porcoes: number;
  ingredientes: string;
  modoPreparo: string;
  imagem: string;
}

interface RecipeHomeProps {
  recipes: {
    receitaId: number;
    nome: string;
    horas: number;
    minutos: number;
    segundos: number;
    porcoes: number;
    ingredientes: string;
    modoPreparo: string;
    imagem: string;
  }[];
}

interface RecipeCard {
  imagem: string;
  nome: string;
  horas: number;
  minutos: number;
  segundos: number;
  porcoes: number;
}
