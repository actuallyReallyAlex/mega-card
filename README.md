<p align="center">
  <a href="" rel="noopener">
 <img width=256px height=256px src="https://github.com/alexlee-dev/mega-card/raw/master/mega-card.png" alt="mega-card logo"></a>
</p>

<h3 align="center">mega-card</h3>

<div align="center">

[![NPM Version][npm-image]][npm-url] [![NPM Total Downloads][npm-downloads]][npm-url] [![npm bundle size (minified + gzip)][size-image]][npm-url] [![Coverage Status](https://coveralls.io/repos/github/alexlee-dev/mega-card/badge.svg?branch=master)](https://coveralls.io/github/alexlee-dev/mega-card?branch=master) [![Build Status](https://travis-ci.org/alexlee-dev/mega-card.svg?branch=master)](https://travis-ci.org/alexlee-dev/mega-card.svg?branch=master)

</div>

---

<p align="center"> A React card component.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Installing](#installing)
- [Usage](#usage)
- [Options](#options)
- [Built Using](#built_using)
- [Todo](#todo)
- [Author](#author)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name="about"></a>

mega-card serves as a simple card component.

## 📦 Installing <a name="installing"></a>

### NPM

```sh
npm install mega-card
```

### Yarn

```sh
yarn add mega-card
```

## 🎈 Usage <a name="usage"></a>

```js
import React from 'react'
import Navvy from 'navvy'

const App = () => {
  return <MegaCard />
}

export default App
```

## ⚙ Options <a name="options"></a>

```js
{
  background: 'white' // Background color.
  color: 'blue' // Theme color.
  data: '$100.00' // Data to display.
  icon: 'Info' // Grommet Icon to display.
  indicator: true // Whether or not to display an indicator bubble.
  shadowSize: 'small' // Size of box-shadow
  shadowType: 'dark' // Color of box-shadow.
  title: 'Title' // Title to display.
  titleColor: 'blue' // Color of Title.
  type: 'card' // Type of MegaCard to render.
}
```

## ⛏️ Built Using <a name="built_using"></a>

- [Grommet](https://v2.grommet.io/) - UI Framework
- [React](https://reactjs.org/) - UI Framework

## ✏️ TODO <a name="todo">

- [] Add tests.

## ✍️ Author <a name="author"></a>

- [Alex Lee](https://github.com/alexlee-dev) - Developer

## 🎉 Acknowledgements <a name="acknowledgement"></a>

- Icon made by [Freepik](https://www.freepik.com/?__hstc=57440181.32f521ffb58c4701c29d0f26d1740758.1560013181050.1560013181050.1560399567849.2&__hssc=57440181.4.1560399567849&__hsfp=3773980820) from [www.flaticon.com](https://www.flaticon.com/) and is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

[npm-image]: https://img.shields.io/npm/v/mega-card.svg
[npm-downloads]: https://img.shields.io/npm/dt/mega-card.svg
[npm-url]: https://www.npmjs.com/package/mega-card
[size-image]: https://img.shields.io/bundlephobia/minzip/mega-card.svg
[navvy-icon]: https://github.com/alexlee-dev/mega-card/raw/master/mega-card.png
