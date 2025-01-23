import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'amb-slide-eighteen',
    styleUrls: ['./slide-eighteen.component.scss'],
    templateUrl: './slide-eighteen.component.html'
})
export class SlideEighteenComponent {}
