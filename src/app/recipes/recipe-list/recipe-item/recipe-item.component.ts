import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-recipe-item',
    standalone: true,
    imports: [],
    templateUrl: './recipe-item.component.html',
    styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
    @Input('recipeItemAlias') public recipeItem: { name: string; description: string; image: string };
	constructor() {
		this.recipeItem = { name: '', description: '', image: '' };
	}
}
