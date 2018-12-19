import { NgModule } from '@angular/core';
import { ToWordsPipe } from './to-words.pipe';
import { ToHinduArabicWordsPipe } from './to-hindu-arabic-words.pipe';

@NgModule({
  declarations: [ToWordsPipe, ToHinduArabicWordsPipe],
  exports: [ToWordsPipe]
})
export class NgNumber2wordsModule { }
