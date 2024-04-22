import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'amb-slide-thirty-six',
    standalone: true,
    templateUrl: './slide-thirty-six.component.html'
})
export class SlideThirtySixComponent {}
