import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    buttonClickInItems = new EventEmitter<{
        name: string;
        description?: string;
        image?: string;
    }>();
    private recipe: { name: string; description?: string; image?: string }[] = [
        { name: 'recipe1', description: 'd1', image: 'image1' },
        { name: 'recipe2', description: 'd2', image: 'image2' },
    ];
    constructor() {}
    public get getRecipes() {
        return this.recipe.slice();
    }
}
