export class ArraySimples {
  private _Id: number;
  private _lista: Array<any>;

  constructor(Id: number, lista: Array<any>) {
    this._Id = Id;
    this._lista = lista;
  }

  public get Id() {
    return this._Id;
  }

  public set Id(Id: number) {
    this._Id = Id;
  }
  public get lista() {
    return this._lista;
  }

  public set lista(lista: Array<any>) {
    this._lista = lista;
  }

  public removeDuplicado(lista:Array<any>){
    let resultado:Array<any> = []
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        if (resultado.includes(element) === false) {
            resultado.push(element)
        }
    }
    return console.log(resultado);
  }

  public visualizar() {
    console.log("\n\nArray: " + this._lista );
  }
}
