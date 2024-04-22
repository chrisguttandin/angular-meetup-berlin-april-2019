import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'amb-slide-thirty-eight',
    standalone: true,
    templateUrl: './slide-thirty-eight.component.html'
})
export class SlideThirtyEightComponent {}
