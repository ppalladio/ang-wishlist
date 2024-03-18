import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-recipe-item',
    standalone: true,
    imports: [],
    templateUrl: './recipe-item.component.html',
    styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
    @Input('recipeItemAlias') public recipeItem: {
        name: string;
        description: string;
        image: string;
    };
    @Output('serverCreatedAlias') public serverCreated = new EventEmitter<{
        name: string;
        description?: string;
        image?: string;
    }>();
    // @ViewChild('recipeInput', { static: true }) recipeInput!:ElementRef
    constructor() {
        this.recipeItem = { name: '', description: '', image: '' };
    }

    onServerAdded(input: HTMLInputElement) {
        // console.log(this.recipeInput.nativeElement.value);
        this.serverCreated.emit({
            name: input.value,
        });
		console.log(input.value);
    }
}
