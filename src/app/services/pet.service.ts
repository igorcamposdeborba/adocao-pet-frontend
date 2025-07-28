import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OngClass, Pet, PetClass } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${API_CONFIG.baseUrl}/catalog`)
      .pipe(
        catchError(error => {
          console.error('Falha na requisição, utilizando dados do mock.', error);
          // Retornar dados de mock com base no back-end
          const backupData: Pet[] = this.getBackupData();
          return of(backupData);  // Retorna um Observable com os dados de backup
        })
      );
  }

  findById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${API_CONFIG.baseUrl}/catalog/pets/${id}`)
      .pipe(
        catchError(error => {
          console.error('Falha na requisição, utilizando dado do mock.', error);
          // Retornar o pet de mock com o id solicitado
          const backupData: Pet = this.getBackupPetById(id);
          return of(backupData);  // Retorna um Observable com o dado de backup
        })
      );
  }

  findAllOngs(): Observable<OngClass[]> {
    return this.http.get<OngClass[]>(`${API_CONFIG.baseUrl}/ongs`)
      .pipe(
        catchError(error => {
          console.error('Falha na requisição de ONGs, utilizando dados do mock.', error);
          const backupData: OngClass[] = this.getBackupOngs();
          return of(backupData);
        })
      );
  }

  private getBackupData(): Pet[] {
    // Dados de mock com base no novo formato
    return [
      new PetClass(1, "Rex", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRO0G9QKt9UmCtthfkZoECL9QumfVDW50smfolz73ALrt3l-OOTrV6VZnKfoT3fuMR4wUoda9co0x1ld3yskfX7rycxm3w_GxRxKQxQW43nB_2GAPn0Emq-kQhPf72LP6lDj_9uo1pW4Y/s700/cachorros07.jpg", 'M', "MACHO", ["CASTRADO", "VERMIFUGADO"], 4, "Dócil e ativo", "Adote POA"),
      new PetClass(2, "Flora", "https://spca.bc.ca/wp-content/uploads/cat-tabby-wearing-id-at-home-looking-up.jpg", 'P', "FEMEA", ["VACINADO"], 0, "Ativa", "Porto Filhote"),
      new PetClass(3, "Bidu", "https://img.freepik.com/fotos-premium/feche-o-retrato-de-um-jovem-cachorro-vira-lata-marrom-e-branco-avermelhado-olhando-para-cima-sentado-na-calcada-cinza-em-um-dia-ensolarado-de-verao-fundo-desfocado_222877-11483.jpg", 'G', "MACHO", ["CASTRADO"], 2, "Ativo, um pouco desconfiado e ama passear", "Garra"),
      new PetClass(4, "Nina", "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=776,height=388,fit=cover/article/main-picture/5f1ab523804ef449086633.jpg", 'M', "FEMEA", ["VERMIFUGADO"], 7, "Ativa e sociável", "Porto Filhote"),
      new PetClass(5, "Max", "https://i.pinimg.com/originals/15/87/30/158730c6d18724fd8ed04484912f48af.jpg", 'M', "MACHO", ["VACINADO"], 12, null, "Garra"),
      new PetClass(6, "Mike", "https://www.rover.com/blog/wp-content/uploads/2021/03/older-dog-960x540.jpg", 'P', "MACHO", ["CASTRADO", "VERMIFUGADO"], 5, "Ativo, dócil, não é acostumado a outros animais", "Adote POA"),
      new PetClass(7, "Simba", "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/04/cachorro-gettyimages.jpg", 'G', "MACHO", ["CASTRADO"], 7, null, "Porto Filhote"),
      new PetClass(8, "Lili", "https://ufape.com.br/wp-content/uploads/2024/03/Ufape-Hospital-Veterinario-cachorro-braquicefalico-GS2-MKT-Freepik.jpg", 'G', "FEMEA", ["VERMIFUGADO"], 2, "Dócil e carinhosa", "Adote POA"),
      new PetClass(9, "Fred", "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg", 'M', "MACHO", ["CASTRADO", "VERMIFUGADO"], 5, "Dócil, tranquilo e carinhoso", "Porto Filhote")
    ];
  }

  private getBackupPetById(id: number): Pet {
    // Retorna o pet correspondente ao ID de mock
    const pets = this.getBackupData();
    const pet = pets.find(p => p.id == id); // Busca o pet pelo ID
    return pet || new PetClass(0, "Rex", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRO0G9QKt9UmCtthfkZoECL9QumfVDW50smfolz73ALrt3l-OOTrV6VZnKfoT3fuMR4wUoda9co0x1ld3yskfX7rycxm3w_GxRxKQxQW43nB_2GAPn0Emq-kQhPf72LP6lDj_9uo1pW4Y/s700/cachorros07.jpg", 'M', "MACHO", ["CASTRADO"], 5, "Dócil", "Adote POA"); // Retorna um pet de fallback se não encontrar
  }

  private getBackupOngs(): OngClass[] {
    // Dados de mock para ONGs
    return [
      new OngClass(1, "Adote POA", "adotepoa@hotmail.com", "(51) 981789290", "https://www.instagram.com/adotepoa", "Carla da Silva"),
      new OngClass(2, "Garra", "ongagarra@yahoo.com.br", "(48) 30758967", "https://www.onggarra.com", "Eduardo Torres"),
      new OngClass(3, "Porto Filhote", "portofilhote@hotmail.com", "(51) 99874895", "https://www.portofilhote.com.br/", "Philip Kotler")
    ];
  }
}
