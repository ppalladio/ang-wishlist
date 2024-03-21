import {
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { GeneralService } from '../../../shared/services/general.service';
import { RecipeService } from '../../recipe.service';

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
    // @Output('serverCreatedAlias') public serverCreated = new EventEmitter<{
    //     name: string;
    //     description?: string;
    //     image?: string;
    // }>();
    // @ViewChild('recipeInput', { static: true }) recipeInput!:ElementRef
    constructor(
        private loggingService: GeneralService,
        private recipeService: RecipeService
    ) {
        this.recipeItem = { name: '', description: '', image: '' };
    }

    onServerAdded(input: HTMLInputElement) {
        // console.log(this.recipeInput.nativeElement.value);
        // this.serverCreated.emit({
        //     name: input.value,
        // });
        // this.loggingService.logging( input.value);
        this.recipeService.buttonClickInItems.emit({ name: input.value+"click in item" });
    }
}
