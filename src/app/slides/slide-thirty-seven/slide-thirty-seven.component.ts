import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'amb-slide-thirty-seven',
    templateUrl: './slide-thirty-seven.component.html'
})
export class SlideThirtySevenComponent {}
