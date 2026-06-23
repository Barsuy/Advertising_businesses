import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./components/home-page/home-page";
import { Header } from "./components/header/header";  

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HomePage, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Advertising_businesses');
}
