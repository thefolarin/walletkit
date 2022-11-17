import { Box, Button, chakra, SimpleGrid, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaSync } from 'react-icons/fa';
import { SiAuth0 } from 'react-icons/si';
import { GiTrade } from 'react-icons/gi';
import { GrStakeholder } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export default function index() {
  const features = [
    {
      icon: SiAuth0,
      title: 'ReAuthenticate',
      button: 'Connect Wallet',
    },
    {
      icon: FaSync,
      title: 'Synchronization',
      button: 'Choose',
    },
    {
      icon: GiTrade,
      title: 'Buying and Selling',
      button: 'Choose',
    },
    {
      icon: GrStakeholder,
      title: 'Stake',
      button: 'Choose',
    },
    {
      icon: GrStakeholder,
      title: 'UnStake',
      button: 'Choose',
    },
  ];
  return (
    <Box padding={{ base: '2em 1em', md: '3em 4em', lg: '4em' }}>
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacingX="1em" spacingY={"1.5em"} >
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={`${feature.title}${index}`} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const FeatureCard = ({ feature }) => {
  return (
    <Box
      display="flex"
      flexDir={'column'}
      alignItems={'center'}
      justifyContent="center"
      gap="2em"
      className='shadow-md  px-2 py-4 bg-slate-200'
    >
      <chakra.div bg="#fff" className="shadow-md  rounded-md py-3 px-3">
        <Icon as={feature.icon} fontSize="3em" />
      </chakra.div>
      <Text className='font-black text-2xl font-sans'>{feature.title}</Text>
      <Button bg={'yellow.500'} as={Link} to="wallets-validation">{feature.button}</Button>
    </Box>
  );
};
