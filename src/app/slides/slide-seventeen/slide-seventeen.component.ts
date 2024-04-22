import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-seventeen',
    standalone: true,
    templateUrl: './slide-seventeen.component.html'
})
export class SlideSeventeenComponent {}
