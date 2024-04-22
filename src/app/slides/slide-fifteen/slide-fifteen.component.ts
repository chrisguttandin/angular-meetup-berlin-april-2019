import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'amb-slide-fifteen',
    standalone: true,
    styleUrls: ['./slide-fifteen.component.scss'],
    templateUrl: './slide-fifteen.component.html'
})
export class SlideFifteenComponent {}
