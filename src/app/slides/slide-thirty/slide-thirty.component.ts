import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-thirty',
    standalone: true,
    styleUrls: ['./slide-thirty.component.scss'],
    templateUrl: './slide-thirty.component.html'
})
export class SlideThirtyComponent {}
