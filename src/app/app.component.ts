import { CommonModule } from '@angular/common';
import { WishItem } from './../shared/models/wishlistItems';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('item1'),
    new WishItem('item2', true),
    new WishItem('item3', false),
  ];
  title = 'new title';
}
