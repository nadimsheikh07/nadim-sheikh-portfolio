import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-web-layout',
  imports: [Footer, Header, RouterOutlet],
  templateUrl: './web-layout.html',
  styleUrl: './web-layout.css',
})
export class WebLayout { }
