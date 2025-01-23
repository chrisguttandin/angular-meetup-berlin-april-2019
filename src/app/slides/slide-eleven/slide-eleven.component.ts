import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'amb-slide-eleven',
    styleUrls: ['./slide-eleven.component.scss'],
    templateUrl: './slide-eleven.component.html'
})
export class SlideElevenComponent {}
