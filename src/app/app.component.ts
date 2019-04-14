import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'amb-app',
    templateUrl: './app.component.html'
})
export class AppComponent { }
