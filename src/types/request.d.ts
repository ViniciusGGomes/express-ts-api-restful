// Organizar arquivos, evitar conflito de nomes
declare namespace Express {
  // A interface vai juntar com interface ja existente do Request
  export interface Request {
    user_id: string; // Adiciona a propriedade user_id

    // ? -> Propriedade opcional
    // : -> Propriedade obrigatória
  }
}
