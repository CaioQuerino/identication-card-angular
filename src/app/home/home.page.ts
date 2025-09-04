import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  IonAvatar, 
  IonIcon, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonButton, 
  IonGrid, 
  IonRow, 
  IonCol 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  person, 
  school, 
  mail, 
  call, 
  informationCircle, 
  logoGithub, 
  logoLinkedin, 
  logoInstagram 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
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
    IonAvatar,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    RouterLink
  ]
})
export class HomePage {

  constructor() {
    addIcons({ 
      person, school, mail, call, informationCircle,
      logoGithub, logoLinkedin, logoInstagram 
    });
  }
}