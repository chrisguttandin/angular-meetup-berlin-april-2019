import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'amb-slide-thirty-six',
    templateUrl: './slide-thirty-six.component.html'
})
export class SlideThirtySixComponent {}
