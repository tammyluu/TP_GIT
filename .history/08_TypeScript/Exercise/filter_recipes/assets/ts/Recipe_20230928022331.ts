export interface IRecipe {
    id?: string;
    name: string;
    servings: number;
    prepTime: string;
    cookTime: string;
    ingredients: {
      name: string;
      amount: string;
    }[];
    instructions: string[];
    toString(){
      return name + \n this.prepTime + this.cookTime;
    }
  }

