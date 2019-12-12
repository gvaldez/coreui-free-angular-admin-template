import { NgModule } from '@angular/core';

import { AceEditorModule } from 'ng2-ace-editor';

import { AceComponent } from '@component/ace';

@NgModule({
  imports: [
    AceEditorModule,
  ],
  declarations: [
    AceComponent,
  ],
  exports: [
    AceComponent,
  ]
})
export class SharedModule { }
