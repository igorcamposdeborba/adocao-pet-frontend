import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent {
  constructor(private router: Router, private meta: Meta, private titleService: Title) {
  }

  ngOnInit(){
    this.meta.updateTag({ name: 'description', content: 'Se você é uma ONG, é aqui onde você divulga seus pets e se cadastra para receber mantimentos'});
    this.titleService.setTitle('Adoção pet');
  }

  clearRouterLink() {
    this.router.navigateByUrl('/catalog', { replaceUrl: true });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
