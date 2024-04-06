import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GeneralService {
    constructor() {}
    logging(msg: string) {
        console.log('logging from service', + msg);
    }
}
