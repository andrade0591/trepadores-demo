import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../config'; // Import the environment variable
import { Observable } from 'rxjs';

interface Race {
  name: string;
  location: string;
  winners: Winner[];
  thumbnail: string;
  date: string;
  showLocation: boolean;
  showWiners: boolean;
  
}
interface Winner {
  position: number;
  name: string;
  time: string;
}
@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  races: Race[] = [
    {
      name: 'Trepadores La Linea',
      location: 'Alto De La Línea',
      winners: [
        { position: 1, name: 'Mao', time: '1:21.566' },
        { position: 2, name: 'Rafa', time: '1:22.345' },
        { position: 3, name: 'El vecino', time: '1:22.856' }
      ],
      thumbnail: 'assets/races_gallery/photo_linea.jpeg',
      date:'01-01-2022',
      showLocation: false,
      showWiners: false
    },
    {
      name: 'Trepadores Genova',
      location: 'Génova, Quindío',
      winners: [
        { position: 1, name: 'Cortico', time: '1:21.566' },
        { position: 2, name: 'Pocho', time: '1:22.345' },
        { position: 3, name: 'Rafa', time: '1:22.856' }
      ],
      thumbnail: 'assets/races_gallery/photo_genova.jpeg',
      date:'02-02-2022',
      showLocation: false,
      showWiners: false
    },
    {
      name: 'Trepadores Manizales',
      location: 'Rasautos Subaru concesionario Manizales taller multimarca',
      winners: [
        { position: 1, name: 'Bala', time: '1:21.566' },
        { position: 2, name: 'Zamora', time: '1:22.345' },
        { position: 3, name: 'Pedro', time: '1:22.856' }
      ],
      thumbnail: 'assets/races_gallery/photo_manila.jpeg',
      date:'03-03-2023',
      showLocation: false,
      showWiners: false
    },
    {
      name: 'Cuarto de Milla Caicedonia Valle',
      location: 'Caicedonia, Valle del Cauca',
      winners: [
        { position: 1, name: 'Rafa', time: '1:21.566' },
        { position: 2, name: 'Mao', time: '1:22.345' },
        { position: 3, name: 'Aristy', time: '1:22.856' }
      ],
      thumbnail: 'assets/races_gallery/photo_caice.jpeg',
      date:'04-04-2023',
      showLocation: false,
      showWiners: false
    }
  ];
  constructor(private sanitizer: DomSanitizer) {}

  showWinners(race: Race): void {
    race.showWiners = !race.showWiners;
    race.showLocation= false;
  }

  showLocation(race: Race) {
    race.showLocation = !race.showLocation;
    race.showWiners= false;
  
  }

  showGallery(race: Race): void {
    console.log(`Gallery of ${race.name}`);
    // Implement your gallery logic here
  }
  getGoogleMapsURL(location: string): SafeResourceUrl{
    const encodedLocation = encodeURIComponent(location);
    const url = "https://www.google.com/maps/embed/v1/place?q=" + encodedLocation + "&key=" + environment.apiKey;
    console.log(url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // Use the imported environment variable for the API key
  }
}