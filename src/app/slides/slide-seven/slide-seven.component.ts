import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-seven',
    styleUrls: ['./slide-seven.component.scss'],
    templateUrl: './slide-seven.component.html'
})
export class SlideSevenComponent {}
