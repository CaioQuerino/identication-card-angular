import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonText, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon, 
  IonButton, 
  IonButtons 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, rocket, book, heart } from 'ionicons/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
    IonButtons,
    RouterLink
  ]
})
export class AboutPage {

  constructor() {
    addIcons({ arrowBack, rocket, book, heart });
  }
}