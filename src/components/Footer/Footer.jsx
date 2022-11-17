import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
    const today = new Date();
  return (
    <footer className='mt-4' >
      <Flex w="full" py={'4'} pt={'8'} alignItems="center" justifyContent={"center"} >
        <Text fontSize={'md'} textAlign="center">
          Copyright &copy; <span>{`${today.getFullYear()}`}</span> Webcoinsolutions
          | All Rights Reserved
        </Text>
      </Flex>
    </footer>
  );
}

export default Footer