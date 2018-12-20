# NgNumber2words
Angular pipe to convert number into words.

## Installation
```bash
npm install ng-number2words
```

## Usage
Import the NgNumber2wordsModule in your **app.module.ts**

```js
import { NgNumber2wordsModule } from 'ng-number2words';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgNumber2wordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

then use `toWords` pipe wherever required
```html
<div>{{14600728195 | toWords}}</div>
```
will output `fourteen billion six hundred million seven hundred twenty eight thousand one hundred ninety five`

## Hindu-Arabic System
```html
<div>{{235678943226 | toHinduArabicWords}}</div>
```
will output `two kharab thirty five arab sixty seven crore eighty nine lakh forty three thousand two hundred twenty six`

## TODO
- Support decimal input
- Enable Languages for Hindu Arabic system


## Note
This project is build using angular library generator. You can find the source files for the module in `/projects/ng-number2words`
