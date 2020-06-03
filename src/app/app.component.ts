import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  heroes = [
    new Hero(1, 'Me'),
    new Hero(2, 'Windows'),
    new Hero(3, 'Mac'),
    new Hero(4, '台灣'),
  ];
  myHero = this.heroes[0];
}
