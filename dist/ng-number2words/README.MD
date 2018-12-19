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
<div>{{123 | toWords}}</div>
```
will output `one hundred twenty three`

## TODO
- Enable Hindu Arabic system
- Enable Languages for Hindu Arabic system

##Note
This project is build using angular library generator. You can find the source files for the module in `/projects/ng-number2words`
