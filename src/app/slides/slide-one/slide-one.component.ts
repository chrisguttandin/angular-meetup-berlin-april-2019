import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-one',
    styleUrls: ['./slide-one.component.scss'],
    templateUrl: './slide-one.component.html'
})
export class SlideOneComponent {}
