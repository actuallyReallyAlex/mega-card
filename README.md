# mega-card

A card React component.

## Installation

### NPM

```sh
npm install --save mega-card
```

### Yarn

```sh
yarn add mega-card
```

## Usage

```js
import React from 'react'
import MegaCard from 'mega-card'

const App = () => {
  return <MegaCard />
}

export default App
```

## Options

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
