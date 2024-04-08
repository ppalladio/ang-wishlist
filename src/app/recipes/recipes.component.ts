import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeService } from './recipe.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-recipes',
    standalone: true,
    imports: [
        RecipeListComponent,
        RecipeDetailComponent,
        CommonModule,
        RecipeItemComponent,
        RouterLink,
    ],
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
    recipes!: { name: string; description?: string; image?: string }[];
    constructor(private recipeService: RecipeService, private router: Router) {}
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

    ngOnInit() {
        this.recipeService.buttonClickInItems.subscribe(
            (recipe: { name: string }) => {
                console.log(recipe.name + 'from recipe service');
            }
        );
        this.recipes = this.recipeService.getRecipes;
        console.log(this.recipes);
    }
    onNavigateRecipeAlt(id: number, title: string) {
        this.router.navigate(['/recipes', id, title], {
            queryParams: { allowEdit: 1 },
            fragment: 'loadingFunction',
        });
    }
}
