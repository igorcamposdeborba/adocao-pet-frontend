import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent {

  constructor(private router: Router, private meta: Meta) {
  }

  ngOnInit(){
    this.meta.updateTag({ name: 'description', content: 'Se você é um adotante, é aqui onde você doa mantimentos, como alimentos, materiais de limpeza etc'});
  }

  clearRouterLink() {
    this.router.navigateByUrl('/catalog', { replaceUrl: true });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
