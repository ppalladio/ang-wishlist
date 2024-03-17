import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@Component({
    selector: 'app-recipes',
    standalone: true,
    imports: [
        RecipeListComponent,
        RecipeDetailComponent,
        CommonModule,
        RecipeItemComponent,
    ],
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
    recipeItems = [
        {
            name: 'Pizza!',
            description: 'Pizza is a popular Italian dish!',
            image: 'https!',
        },
        {
            name: 'pasta!',
            description: 'pasta is a popular Italian dish!',
            image: 'https!',
        },
    ];
}
