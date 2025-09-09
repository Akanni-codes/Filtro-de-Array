import readlineSync = require("readline-sync");
import { ArraySimples } from "./src/model/ArraySimples";
import { ArrayController } from "./src/controller/ArrayController";

export function main() {
    const arrays:ArrayController=new ArrayController()
  let opcao: number;
  let arraynum:ArraySimples=new ArraySimples(arrays.gerarId(),[1, 2, 2, 3, 4, 4,5])
  arraynum.removeDuplicado([1, 2, 2, 3, 4, 4,5])
  arraynum =new ArraySimples(arrays.gerarId(),[7, 7, 7,])
  arraynum.removeDuplicado([7, 7, 7,])
  arraynum =new ArraySimples(arrays.gerarId(),[])
  arraynum.removeDuplicado([])
  arraynum =new ArraySimples(arrays.gerarId(),["maçã", "banana", "maçã", "laranja"])
  arraynum.removeDuplicado(["maçã", "banana", "maçã", "laranja"])
  
//   while (true) {
//     console.log("*****************************************************");
//     console.log("*");
//     console.log("*              Filtro de Arrays                    *");
//     console.log("*");
//     console.log("*****************************************************");
//     console.log("*");
//     console.log("*   1 - Registrar Array                            *");
//     console.log("*   2 - Listar todos Array                         *");
//     console.log("*   3 - Buscar Array por ID                        *");
//     console.log("*   4 - Filtrar Array                           *");
//     console.log("*   5 - Sair                                       *");
//     console.log("*");
//     console.log("*****************************************************");
//     console.log("");
//     console.log("Entre com a opção desejada: ");
//     opcao = readlineSync.questionInt("");
//     if (opcao === 5) {
//       console.log("*****************************************************");
//       console.log("*                   Vlw Flw                        *");
//       console.log("*****************************************************");
//       process.exit(0);
//     }
//     switch (opcao) {
//       case 4:
//         console.log("*****************************************************");
//         console.log("*              Organizar Array                     *");
//         console.log("*****************************************************");
//         continuar();
//         break;
//       case 1:
//         console.log("*****************************************************");
//         console.log("*               Registrar Array                    *");
//         console.log("*****************************************************");
//         continuar();
//         break;

//       case 2:
//         console.log("*****************************************************");
//         console.log("*             Lista de todos Array                 *");
//         console.log("*****************************************************");
//         continuar();
//         break;

//       case 3:
//         console.log("*****************************************************");
//         console.log("*              Buscar Array por ID                 *");
//         console.log("*****************************************************");
//         continuar();
//         break;
//     }
//   }
}
function continuar(): void {
  console.log("*****************************************************");
  console.log("*         Pressione enter para continuar...        *");
  console.log("*****************************************************");
  readlineSync.prompt();
}

main();
