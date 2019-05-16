import React from 'react'
import PropTypes from 'prop-types'
import Pill from './MegaCard/Pill'
import Card from './MegaCard/Card'

const MegaCard = props => {
  const { type } = props

  switch (type) {
    case 'pill':
      return <Pill {...props} />
    case 'card':
      return <Card {...props} />
    default:
      return <Card {...props} />
  }
}

MegaCard.propTypes = {
  type: PropTypes.string.isRequired
}

MegaCard.defaultProps = {}

export default MegaCard

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Box, Text } from 'grommet'
// import { Server } from 'grommet-icons'

// const DataPill = ({ color, data, title }) => {
//   return (
//     <Box
//       align="center"
//       background="white"
//       className="data-pill"
//       direction="row"
//       elevation="small"
//       gap="medium"
//       justify="between"
//       margin="small"
//       pad="medium"
//       round="large"
//     >
//       <Box>
//         <Box className={`bg-${color}`} height="8px" round="full" width="8px" />
//       </Box>
//       <Box margin={{ right: 'medium' }}>
//         <Text size="16px" weight="bold">
//           {title}
//         </Text>
//         <Text size="small" color="dark-4">
//           {data}
//         </Text>
//       </Box>
//       <Box>
//         <Box
//           align="center"
//           className={`bg-${color}`}
//           height="35px"
//           justify="center"
//           round="full"
//           width="35px"
//         >
//           <Server color="white" size="20px" />
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// DataPill.propTypes = {
//   color: PropTypes.string.isRequired,
//   data: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired
// }

// export default DataPill
