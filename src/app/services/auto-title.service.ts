import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class AutoTitleService {
    constructor(private _title: Title) { }

    /** Permite cambiar el titulo de la página
     *  
     * @param {string string[]} titles Titulo
     */

    set(titles: string | string[]) {
        if (Array.isArray(titles)) {
            titles = titles.join(' - ');
        }
        if (titles) this._title.setTitle(titles);
    }
}
