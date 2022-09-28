import React from 'react'
import {Box} from '@chakra-ui/react'
import MidHero from './MidHero'
import BottomHero from './BottomHero'

function Hero() {
  return (
    <Box mt="50px">
      <MidHero />
      <Box w={{ base: "80%", md: "60%", lg: "30%" }} m="auto">
        <BottomHero />
      </Box>
    </Box>
  )
}

export default Hero