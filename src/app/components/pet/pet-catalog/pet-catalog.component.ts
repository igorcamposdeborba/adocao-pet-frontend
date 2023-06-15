import { Component, OnInit } from '@angular/core';
import { Ong, Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { AdoptionProcessBannerComponent } from '../../elements/adoption-process-banner/adoption-process-banner.component';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pet-catalog',
  templateUrl: './pet-catalog.component.html',
  styleUrls: ['./pet-catalog.component.css']
})
export class PetCatalogComponent implements OnInit {

  ELEMENT_DATA_ONG: Ong[] = []
  
  ELEMENT_DATA_PET: Pet[] = []

  constructor(private service: PetService, private router: Router, private meta: Meta, private titleService: Title){
    this.findAll();
  }
  
  ngOnInit(): void { // ciclo de vida: ao iniciar o componente
    AdoptionProcessBannerComponent;
    this.meta.updateTag({ name: 'description', content: 'Adote um pet e mude uma história'});
  }
  ngDoCheck() {
    this.titleService.setTitle('Adoção pet');
  }

  findAll(){ // View chama requisição do service.
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA_PET = response;
    }); 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}