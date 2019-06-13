import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import MegaCard from '../src/index.js'

storiesOf('mega-card', module).add('Basic', () => <MegaCard />)
