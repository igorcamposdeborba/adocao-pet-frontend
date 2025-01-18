export interface Ong {
    id: number;
    name: string;
    email: string;
    telephone: string;
    website: string;
    responsible: string;
}
export interface Pet {
    id?: any; // REVISAR se coloco Integer.  ? significa que nem sempre tenho id (REVISAR SE VALE COLOCAR EM PET pq todo pet tem id)
    name: string;
    image: string;
    size: string;
    gender: string;
    health: string[];
    age: number;
    temperament: string;
    nameOng: string;
}

// Classe que implementa a interface Ong
export class OngClass implements Ong {
    constructor(
      public id: number,
      public name: string,
      public email: string,
      public telephone: string,
      public website: string,
      public responsible: string
    ) {}
  }
  
export class PetClass {
    constructor(
      public id: number,
      public name: string,
      public image: string,
      public size: any,
      public gender: any,
      public health: any[],
      public age: number,
      public temperament: string | null,
      public nameOng: string
    ) {}
  }