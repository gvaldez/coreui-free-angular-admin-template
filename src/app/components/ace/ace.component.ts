import { Component, AfterViewInit, ViewChildren, QueryList, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ace',
  template: `
    <ace-editor
    #editor
    [(text)]= "text"
    (textChanged)="onChange($event, text)"></ace-editor>
  `
})
export class AceComponent implements AfterViewInit {
  @ViewChildren('editor') public editorQueryList: QueryList<any>;
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() text: string;

  onChange(ev, val) {
    this.text = val;
    this.textChange.emit(this.text);
  }

  ngAfterViewInit() {
    this.editorQueryList.changes.subscribe((comps: QueryList<any>) => {
      if (comps.first) {
        let editor = comps.first.getEditor();
      }
    });
  }
}
