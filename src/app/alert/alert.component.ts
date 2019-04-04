import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
/** Component to show an alert */
export class AlertComponent {
  /** status of the alert */
  @Input()
  public status = 'danger';

  /** Content of this alert */
  @Input()
  public content: string;

  /** Title of this alert */
  @Input()
  public title: string;

  constructor() {}
}
