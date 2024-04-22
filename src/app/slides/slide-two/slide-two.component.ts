import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-two',
    standalone: true,
    templateUrl: './slide-two.component.html'
})
export class SlideTwoComponent {}
