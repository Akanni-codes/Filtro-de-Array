import readlineSync = require("readline-sync");

export function main() {
  let opcao: number;
  while (true) {
    console.log("*****************************************************");
    console.log("*");
    console.log("*              Filtro de Arrays                    *");
    console.log("*");
    console.log("*****************************************************");
    console.log("*");
    console.log("*   1 - Registrar Array                            *");
    console.log("*   2 - Listar todos Array                         *");
    console.log("*   3 - Buscar Array por ID                        *");
    console.log("*   4 - Organizar Array                            *");
    console.log("*   5 - Sair                                       *");
    console.log("*");
    console.log("*****************************************************");
    console.log("");
    console.log("Entre com a opção desejada: ");
    opcao = readlineSync.questionInt("");
    if (opcao === 5) {
      console.log("*****************************************************");
      console.log("*                   Vlw Flw                        *");
      console.log("*****************************************************");
      process.exit(0);
    }
    switch (opcao) {
      case 4:
        console.log("*****************************************************");
        console.log("*              Organizar Array                     *");
        console.log("*****************************************************");
        continuar();
        break;
      case 1:
        console.log("*****************************************************");
        console.log("*               Registrar Array                    *");
        console.log("*****************************************************");
        continuar();
        break;

      case 2:
        console.log("*****************************************************");
        console.log("*             Lista de todos Array                 *");
        console.log("*****************************************************");
        continuar();
        break;

      case 3:
        console.log("*****************************************************");
        console.log("*              Buscar Array por ID                 *");
        console.log("*****************************************************");
        continuar();
        break;
    }
  }
}
function continuar(): void {
  console.log("*****************************************************");
  console.log("*         Pressione enter para continuar...        *");
  console.log("*****************************************************");
  readlineSync.prompt();
}

main();
