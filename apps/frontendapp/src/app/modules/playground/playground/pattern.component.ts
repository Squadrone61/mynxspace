import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'ui-pattern',
  template: ` <ng-content></ng-content>`,
  styles: [
    `
      .wsc-pattern {
        margin-bottom: 25px;
        max-width: 100%;
      }

      .wsc-pattern-header {
        color: grey;
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .wsc-pattern-body {
        background-color: #fcfaf2;
        border: 2px dashed #dadada;
        padding: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternComponent implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const element = this.elRef.nativeElement as HTMLElement;
    const nodes: ChildNode[] = Array.from(element.childNodes).filter(
      (node) => node.nodeName !== '#comment'
    );
    nodes.forEach((node: ChildNode, index: number) => {
      const wrapper = this.renderer.createElement('div') as HTMLElement;
      const body = this.renderer.createElement('div') as HTMLElement;
      const header = this.renderer.createElement('div') as HTMLElement;
      const elementName = this.renderer.createText(
        `${index + 1}-${node.nodeName}`
      );

      this.renderer.addClass(wrapper, 'wsc-pattern');
      this.renderer.addClass(body, 'wsc-pattern-body');
      this.renderer.addClass(header, 'wsc-pattern-header');

      this.renderer.appendChild(header, elementName);
      this.renderer.appendChild(wrapper, header);
      this.renderer.appendChild(wrapper, body);

      this.renderer.insertBefore(node.parentNode, wrapper, node);
      this.renderer.appendChild(body, node);
    });
  }
}
