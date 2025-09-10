import readlineSync = require("readline-sync");
import { ArraySimples } from "./src/model/ArraySimples";
import { ArrayController } from "./src/controller/ArrayController";

export function main() {
  const arrays: ArrayController = new ArrayController();
  let Id: number;
  let lista: Array<any> = [];
  let opcao: number;
  const arraynum: ArraySimples = new ArraySimples(
    arrays.gerarId(),
    [1, 2, 2, 3, 4, 4, 5]
  );
  arrays.cadastrar(arraynum);
  const arraystring = new ArraySimples(arrays.gerarId(), [
    "maçã",
    "banana",
    "maçã",
    "laranja",
  ]);
  arrays.cadastrar(arraystring);

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
    console.log("*   4 - Sair                                       *");
    console.log("*");
    console.log("*****************************************************");
    console.log("");
    console.log("Entre com a opção desejada: ");
    opcao = readlineSync.questionInt("");
    if (opcao === 4) {
      console.log("*****************************************************");
      console.log("*                   Vlw Flw                        *");
      console.log("*****************************************************");
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log("*****************************************************");
        console.log("*               Registrar Array                    *");
        console.log("*****************************************************");
        let seguir: boolean;
        do {
          let opcoes = ["Sim", "Nao"];
          console.log("Insira dado no Array: ");
          let element = readlineSync.question();
          lista.push(element);
          let indice =
            readlineSync.keyInSelect(
              opcoes,
              "Deseja continuar adicionando dados?",
              { cancel: false }
            ) + 1;
          seguir = indice === 1;
        } while (seguir);
        arrays.cadastrar(new ArraySimples(arrays.gerarId(), lista));
        continuar();
        break;

      case 2:
        console.log("*****************************************************");
        console.log("*             Lista de todos Array                 *");
        console.log("*****************************************************");
        arrays.listarTodas();
        continuar();
        break;

      case 3:
        console.log("*****************************************************");
        console.log("*              Buscar Array por ID                 *");
        console.log("*****************************************************");
        Id = readlineSync.questionInt("Digite o Id do Array: ");
        arrays.procurarporID(Id);
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
