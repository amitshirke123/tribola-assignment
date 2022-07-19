import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-changer';

  appliedTheme = localStorage.getItem('theme-color')? localStorage.getItem('theme-color'): 'theme-dark';
  
  setTheme(theme: any){
    this.appliedTheme = theme;
    localStorage.setItem('theme-color', theme);
  }
}
