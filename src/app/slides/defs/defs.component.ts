import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-defs',
    standalone: true,
    styleUrls: ['./defs.component.scss'],
    templateUrl: './defs.component.html'
})
export class DefsComponent {}
