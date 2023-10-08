import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public num = 0;

  public resetNumber(event: number): void {
    this.num = event;
  }

  public incrementNumber(): void {
    this.num++;
  }
}
