import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ISubordinates } from '../../interfaces/subordinates.interface';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SubordinatesComponent {
  @Input('subordinates') subordinates: ISubordinates[];
  @Input('SUBORDINATES_LIST') SUBORDINATES_LIST: ISubordinates[];
  @Output() add: EventEmitter<ISubordinates[]> = new EventEmitter();

  addedSubordinates: ISubordinates[] = [];

  onSelect(e: any, subordinate: ISubordinates) {
    if (e.target.checked) {
      this.addedSubordinates.push(subordinate);
    } else {
      this.addedSubordinates = this.addedSubordinates.filter((s: ISubordinates) => s.ID !== subordinate.ID)
    }
  }
}
