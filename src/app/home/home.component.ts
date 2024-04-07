import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    constructor(private router: Router,private route:ActivatedRoute) {}
    onLoadServer() {
		// with relativeTo and without "/" (absolute) 
		// this.router.navigate(['recipes'] it will go to currentroute/recipes
        this.router.navigate(['/recipes'],{relativeTo:this.route});
    }
}
