# Teeheo
Teeheo is a small library for generating all kind of pseudo-random numbers and strings.
With teeheo, you can easily generate integers, floats, alphanumerics and uuids.

<br />

## INSTALL

There are 3 ways to install the library.

1. **With a script**
```html
<script src="https://cdn.jsdelivr.net/npm/@fandridis/teeheo@0.5.0/dist/umd/index.min.js"></script>
```

2. **As an npm package** (TBA)

3. (TBA)

<br />

## METHODS

## 1. Integers
With **teeheo.int(min, max)** you can generate random integers between a desired range.

| Parameters | Description |
| ----------- | ----------- |
| min | (Optional) Number: The lower limit - inclusive |
| max | (Optional) Number: The higher limit - inclusive |

When two parameters are passed, they act as a range.

Example:
```javascript
teeheo.int(5, 20) // Will return a integer between 5 and 20
```
<br />

If only one parameter is passed, it will return:
- an integer from 0 to the parameter, if the parameter is positive
- an integer from the parameter to 0, if the parameter is negative

Example:
```javascript
teeheo.int(20) // Will return a integer between 0 and 20
teeheo.int(-10) // Will return a integer between -10 and 0
```
<br />

If no parameters are passed, it will act like a coinflip and return either 0 or 1
Example:
```javascript
teeheo.int() // Will return 0 or 1
```

## 2. Floats
Similar to integers, with **teeheo.float(min, max, options)** you can generate random floats between a desired range. You can also limit the amount of decimal points returned.

| Parameters | Description |
| ----------- | ----------- |
| min | (Optional) Number: The lower limit - inclusive |
| max | (Optional) Number:  The higher limit - inclusive |
| options | (Optional) Object: To specify the maximum amount of decimals |

When two parameters are passed, they act as the range.
Example:
```javascript
teeheo.float(5, 20) // Will return a float between 5 and 20
```
<br />

If only one parameter is passed, it will return:
- a float from 0 to the parameter, if the parameter is positive
- a float from the parameter to 0, if the parameter is negative

Example:
```javascript
teeheo.float(20) // Will return a float between 0 and 20
teeheo.float(-10) // Will return a float between -10 and 0
```
<br />

If no parameters are passed, it will return a random float from 0 to 1
Example:
```javascript
teeheo.float() // Will return a float between 0 and 1 
```
<br />

You can pass an object as a third parameter to state how many decimals should be returned
```javascript
teeheo.float(5, 10, { decimals: 3 }) // Will return a random float between 5 and 10 with 3 decimals. ex: 7.348
```

<br />

## 3. Strings
With **teeheo.str(length, options)** you can generate random floats between a desired range. You can also limit the amount of decimal points returned. By default, the generated string will include lowercase letters, uppercase letters and numbers.

| Parameters | Description |
| ----------- | ----------- |
| length | Number: The character length of the generated string |
| options | (Optional) Object: To configure the list of characters to be included |

<br />

The options can be:

| Option | Description |
| ----------- | ----------- |
| excludeUpper | Boolean: Excludes uppercase letters |
| excludeLower | Boolean: Excludes lowercase letters |
| excludeNumbers | Boolean: Excludes numbers |
| excludeZero | Boolean: Excludes the number 0 |
| customList | String: To specify the exact characters to use |

<br />

Examples:
```javascript
teeheo.str(9) // ex: abcABC012
teeheo.str(9, { excludeUpper: true }) // ex: abcabc012
teeheo.str(9, { excludeLower: true }) // ex: ABCABC012
teeheo.str(9, { excludeNumbers: true }) // ex: abcABCabc
teeheo.str(9, { excludeZero: true }) // ex: abcABC123
teeheo.str(9, { customList: 'xy' }) // ex: xyxxyyxxx
```
<br />


## 4. UUID
With **teeheo.uuid4()** you can generate random uuid4 string


Example:
```javascript
teeheo.uuid4() // ex: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
```
