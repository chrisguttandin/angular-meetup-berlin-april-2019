import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
    selector: 'amb-defs',
    styleUrls: ['./defs.component.scss'],
    templateUrl: './defs.component.html'
})
export class DefsComponent {
    public pastaPath: string;

    constructor(location: Location) {
        const slicedPath = location.path().slice(1);

        this.pastaPath = `url(${slicedPath}#pasta)`;
    }
}
