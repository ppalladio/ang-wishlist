import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-detail',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './recipe-detail.component.html',
    styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnDestroy, OnInit {
    recipeInfo!: { id: number; title: string };

    constructor(
        private route: ActivatedRoute,
        private paramsSubscription: Subscription
    ) {}
    ngOnInit() {
        this.recipeInfo = {
            id: this.route.snapshot.params['id'],
            title: this.route.snapshot.params['title'],
        };
        // ! change the url params when link changes within the page with observables
        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.recipeInfo.id = params['id'];
                this.recipeInfo.title = params['title'];
            }
        );
    }
    ngOnDestroy() {
        // not necessary for route but needed in the future // ! add more in the future
        this.paramsSubscription.unsubscribe();
    }
}
