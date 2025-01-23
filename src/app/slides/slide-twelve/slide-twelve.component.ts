import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'amb-slide-twelve',
    styleUrls: ['./slide-twelve.component.scss'],
    templateUrl: './slide-twelve.component.html'
})
export class SlideTwelveComponent {}
