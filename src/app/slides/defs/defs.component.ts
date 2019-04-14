import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ],
    selector: 'amb-defs',
    styleUrls: [ './defs.component.css' ],
    templateUrl: './defs.component.html'
})
export class DefsComponent {

    public pastaPath: string;

    constructor (location: Location) {
        this.pastaPath = `url(${ location.path().slice(1) }#pasta)`;
    }

}
