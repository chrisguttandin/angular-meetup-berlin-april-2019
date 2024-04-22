import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-twenty-two',
    standalone: true,
    templateUrl: './slide-twenty-two.component.html'
})
export class SlideTwentyTwoComponent {}
