import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    constructor(private router: Router) {}
    onLoadServer() {
        this.router.navigate(['/recipes']);
    }
}
