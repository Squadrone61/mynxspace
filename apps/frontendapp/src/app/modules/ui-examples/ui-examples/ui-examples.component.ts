import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { btnOptions, btnType, Colors } from '@libs/ui';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface catFact {
  name: string;
  description: string;
  image: { url: string };
}

@Component({
  selector: 'mynxspace-ui-examples',
  templateUrl: 'ui-examples.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiExamplesComponent {
  cats$: Observable<catFact[]> = this.http.get<catFact[]>(
    'https://api.thecatapi.com/v1/breeds?limit=5',
    {
      headers: { 'x-api-key': '2602be6a-0cf2-4b5f-9db2-77f297ff8143' },
    }
  );
  colors: Colors[] = [Colors.PRIMARY, Colors.SECONDARY, Colors.PLAIN];
  types: btnType[] = [
    btnType.DEFAULT,
    btnType.OUTLINE,
    btnType.CIRCULAR,
    btnType.SQUARE,
  ];

  buttons: Partial<btnOptions>[] = this.generateButtonOptions(
    this.colors,
    this.types
  );

  ctrlgrp = new FormGroup({
    input: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient) {}

  generateButtonOptions(c: Colors[], t: btnType[]): Partial<btnOptions>[] {
    const ret = t.reduce<Partial<btnOptions>[]>((acc, curT) => {
      return [
        ...acc,
        ...c.map<Partial<btnOptions>>((curC) => ({
          type: curT,
          color: curC,
        })),
      ];
    }, []);

    console.log(ret);
    return ret;
  }
}
