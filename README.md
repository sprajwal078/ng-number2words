# NgNumber2words
Angular pipe to convert number into words.

## Installation
```bash
npm install ng-number2words
```

## Demo
https://sprajwal078.github.io/ng-number2words/

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
will output:\
`fourteen billion six hundred million seven hundred twenty eight thousand one hundred ninety five`

```html
<div>{{12.32 | toWords}}</div>
```
will output:\
`twelve point three two`

## Language Support
Supported Languages:
- Spanish
```html
<div>{{97545678849 | toWords : 'es'}}</div>
```
will output:\
`noventa y siete mil quinientos cuarenta y cinco millones seiscientos setenta y ocho mil ochocientos cuarenta y nueve`

## Hindu-Arabic System
```html
<div>{{235678943226 | toHinduArabicWords}}</div>
```
will output:\
`two kharab thirty five arab sixty seven crore eighty nine lakh forty three thousand two hundred twenty six`

### Hindu Arabic - Language Support
Languages Supported:
- Nepali
```html
<div>{{14600728195 | toHinduArabicWords: 'np'}}</div>
```
will output:\
`चौध अर्ब साठ्ठी करोड सात लाख अठ्ठाइस हजार एक सय पन्चान्नब्बे`

```html
<div>{{26.54 | toHinduArabicWords: 'np'}}</div>
```
will output:\
`छब्बीस दशमलब पाँच चार`

## TODO
- Enable additional languages support
- Enable currency style display

## Note
This project is build using angular library generator. You can find the source files for the module in `/projects/ng-number2words`
