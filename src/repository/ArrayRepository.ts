import { ArraySimples } from "../model/ArraySimples";

export interface ArrayRepository {
  procurarporID(Id: number): void;
  listarTodas(): void;
  cadastrar(lista: ArraySimples): void;
  atualizar(lista: ArraySimples): void;
  deletar(Id: number): void;
}
