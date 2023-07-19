import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: any[] = new Array(4).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'assets/home_gallery/photo1.jpeg',
      title: 'Trepadores Quindío',
      subtitle: 'Para más información de nuestros evento, siguenos en las redes sociales'
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/home_gallery/photo2.jpeg',
      title: 'Trepadores Quindío',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: 'assets/home_gallery/photo3.jpeg',
      title: 'Trepadores Quindío',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
    this.slides[3] = {
      id: 3,
      src: 'assets/home_gallery/photo4.jpeg',
      title: 'Trepadores Quindío',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }

  }
}
