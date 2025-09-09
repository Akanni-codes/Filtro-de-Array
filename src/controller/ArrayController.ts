import { ArraySimples } from "../model/ArraySimples";
import { ArrayRepository } from "../repository/ArrayRepository";

export class ArrayController implements ArrayRepository {
  private listaArray: Array<ArraySimples> = new Array<ArraySimples>();
  Id: number = 0;
  procurarporID(Id: number): void {
    let buscaArray = this.buscarNoArray(Id);

    if (buscaArray != null) {
      buscaArray.visualizar();
    } else {
      console.log("\nA Conta Id: " + Id + " não foi encontrada");
    }
  }
  listarTodas(): void {
    if (this.listaArray.length === 0) {
      console.log("\nNenhum array cadastrado.");
    } else {
      for (let array of this.listaArray) {
        array.visualizar();
      }
    }
  }

  cadastrar(array: ArraySimples): void {
    this.listaArray.push(array);
    console.log("\nArray cadastrado com sucesso!");
  }

  atualizar(array: ArraySimples): void {
    let buscaArray = this.buscarNoArray(array.Id);
    if (buscaArray != null) {
      // Atualiza os campos do array encontrado
      this.listaArray[this.listaArray.indexOf(buscaArray)] = array;
      console.log(
        "\nA Miniatura de Id: " + array.Id + " foi atualizada com sucesso!"
      );
    } else {
      console.log("\nArray não encontrado para atualização.");
    }
  }

  deletar(Id: number): void {
    const index = this.listaArray.findIndex((array) => array.Id === Id);
    if (index !== -1) {
      this.listaArray.splice(index, 1);
      console.log("\nArray deletado com sucesso!");
    } else {
      console.log("\nArray não encontrado para exclusão.");
    }
  }

  filtar(Id: number): void{
    
  }

  public gerarId(): number {
    return ++this.Id;
  }

  public buscarNoArray(Id: number): ArraySimples | null {
    for (let array of this.listaArray) {
      if (array.Id === Id) {
        return array;
      }
    }
    return null;
  }
}
