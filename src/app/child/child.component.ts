import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  private _num = 0;

  @Input()
  set num(val: number) {
    this._num = val;
    this.value = this.calculateValue();
  }

  get num(): number {
    return this._num;
  }
  @Output() resetNumber: EventEmitter<number> = new EventEmitter<number>();

  public value = '';

  calculateValue() {
    if (!(this.num > 0)) return '';

    if (!(this.num % 15)) return 'FizzBuzz';

    if (!(this.num % 5)) return 'Buzz';

    return this.num % 3 ? this.num + '' : 'Fizz';
  }

  resetParentNum() {
    this.resetNumber.emit(0);
  }
}
