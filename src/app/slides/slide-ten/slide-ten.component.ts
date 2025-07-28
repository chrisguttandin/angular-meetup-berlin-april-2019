import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-slide-ten',
    templateUrl: './slide-ten.component.html'
})
export class SlideTenComponent {}
