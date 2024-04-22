import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-twenty-four',
    standalone: true,
    templateUrl: './slide-twenty-four.component.html'
})
export class SlideTwentyFourComponent {}
