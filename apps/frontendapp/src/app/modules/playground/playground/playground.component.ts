import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mynxspace-playground',
  templateUrl: './playground.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
