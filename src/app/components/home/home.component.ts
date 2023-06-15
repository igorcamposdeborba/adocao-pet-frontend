import { Component } from '@angular/core';
import { MiniBannerComponent } from '../elements/mini-banner/mini-banner.component';
import { AdoptionProcessBannerComponent } from '../elements/adoption-process-banner/adoption-process-banner.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private meta: Meta, private titleService: Title){
  }
  
  ngOnInit(): void { // ciclo de vida: ao iniciar o componente
    MiniBannerComponent;
    AdoptionProcessBannerComponent;
    this.meta.updateTag({ name: 'description', content: 'Adote um pet e mude uma história'});
    this.titleService.setTitle('Adoção pet');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}