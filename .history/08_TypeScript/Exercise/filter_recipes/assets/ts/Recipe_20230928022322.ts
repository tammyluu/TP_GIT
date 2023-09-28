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
    tos(): string {
      return name + \n this.prepTime + this.cookTime;
    }
  }

