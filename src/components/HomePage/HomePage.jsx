import React from 'react'
import { Box, Container,Grid,GridItem, Flex,Image, Spacer, VStack,HStack, background, flexbox,Text, space } from '@chakra-ui/react'
import { Nav } from '../Nav/Nav'
const HomePage = () => {
  const gridMargin = {
    margin:'70px auto 0 auto'
  }
  return (
    <>
      <Nav></Nav>
    <Box  ml={150} style={{marginTop:'5vh'}} >
      <Grid   templateColumns={'repeat(3,2fr)'} gap={6} borderRadius={50} >
        <GridItem borderRadius={20} w='75%' h='350' bgColor='gray.300' />
  <GridItem borderRadius={20} w='75%' h='350' bg='gray.300' />
  <GridItem borderRadius={20} w='75%' h='350' bg='gray.600' >
    <Box fontSize={8} borderRadius={50}  ><Text bgColor="white" >69</Text></Box>
  </GridItem>
  <GridItem borderRadius={20} w='75%' h='350' bg='gray.300' />
  <GridItem borderRadius={20} w='75%' h='350' bg='gray.300' />
  <GridItem borderRadius={20} w='75%' h='350' bg='gray.300' />

      </Grid>
    </Box>
    </>
      

  )
}

export default HomePage
