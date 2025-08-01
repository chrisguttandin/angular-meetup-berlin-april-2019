import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-six',
    styleUrls: ['./slide-six.component.scss'],
    templateUrl: './slide-six.component.html'
})
export class SlideSixComponent {}
