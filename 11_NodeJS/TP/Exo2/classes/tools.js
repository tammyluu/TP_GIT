//import readline from "readline";

export function input(message) {
  

  //   On retourne une promesse avec le flux que l'on lit depuis la console sous forme de chaine
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}