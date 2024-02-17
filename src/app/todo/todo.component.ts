import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WishItem } from '../../shared/models/wishlistItems';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  items: WishItem[] = [
    new WishItem('item1'),
    new WishItem('item2', true),
    new WishItem('item3', false),
  ];
}
