import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-four',
    standalone: true,
    templateUrl: './slide-four.component.html'
})
export class SlideFourComponent {}
