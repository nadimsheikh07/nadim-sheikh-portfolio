import { Component, signal } from '@angular/core';
import { WebLayout } from "./layout/web-layout/web-layout";

@Component({
  selector: 'app-root',
  imports: [WebLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nadim-sheikh-portfolio');
}
