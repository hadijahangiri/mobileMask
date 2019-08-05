# mobileMask

Mobile mask directive for angularjs

## Requirements

- AngularJS

## Usage

### NPM

```sh
npm i mobilemask
```

Load the script files in your application:

```html
<script type="text/javascript" src="node_modules/mobilemask/dist/mobileMask.js"></script>
```

```javascript
angular.module('myApp', ['ngMobileMask', ...]);
```

## Example

## html

```html
<mobile-mask
  country-code="98"
  number-count="10"
  ng-model="test"
  valid-numbers-for-first-number="'1-9'"
></mobile-mask>
```

## Image 1

<img alt="mask1" src="example/images/mask1.PNG" height="53" width="250" />

## Image 2

if first number less or bigger than valid numbers

<img alt="mask2" src="example/images/mask2.PNG" height="53" width="250" />

- `country-code` : For set country code ,
- `number-count` : Numbers count after area code ,
- `valid-numbers-for-first-number` : for valid numbers for first number after area code

## for use css

```html
<link href="dist/css/myStyles.css" rel="node_modules/mobilemask/dist/mobileMask.css"/>
```
