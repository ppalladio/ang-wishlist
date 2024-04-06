import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        HeaderComponent,
        ShoppingListComponent,
        RecipesComponent, RouterLink, RouterLinkActive
	 ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})


export class AppComponent {
    title = 'new title';
}
