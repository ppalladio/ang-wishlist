import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { BaseDirective } from '../../directives/baseDirective/base.directive';
import { BaseRendererDirective } from '../../directives/baseDirective/base-renderer.directive';

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    imports: [RecipeItemComponent,BaseDirective,BaseRendererDirective],
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
    constructor() {}
    ngOnInit() {
        console.log('ngOnInit');
    }

    onRecipeLog(event: { name: string }) {
        console.log('name', event.name);
    }
}
