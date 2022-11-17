import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Countdown, FooterTwo } from '../../components';
import { chakra } from '@chakra-ui/react'

import metamask from '../../assets/images/metamask.png';
import alphawallet from '../../assets/images/alphawallet.png';
import argent from '../../assets/images/argent.png';
import atoken from '../../assets/images/atoken.png';
import atomic from '../../assets/images/atomic.png';
import atwallet from '../../assets/images/atwallet.png';
import authereum from '../../assets/images/authereum.png';
import babycake from '../../assets/images/babycake.png';
import beltfinance from '../../assets/images/beltfinance.png';
import coin98 from '../../assets/images/coin98.png';
import coinbase from '../../assets/images/coinbase.png';
import coinomi from '../../assets/images/coinomi.png';
import coolwallet from '../../assets/images/coolwallet.png';
import creamfinance from '../../assets/images/creamfinance.png';
import crypto from '../../assets/images/crypto.png';
import eidoo from '../../assets/images/eidoo.png';
import ellipal from '../../assets/images/ellipal.png';
import exodus from '../../assets/images/exodus.png';
import fortube from '../../assets/images/fortube.png';
import gridplus from '../../assets/images/gridplus.png';
import guarda from '../../assets/images/guarda.png';
import imtoken from '../../assets/images/imtoken.png';
import infinito from '../../assets/images/infinito.png';
import infinity from '../../assets/images/infinity.png';
import kittycake from '../../assets/images/kittycake.png';
import launchpool from '../../assets/images/launchpool.png';
import ledger from '../../assets/images/ledger.png';
import lobster from '../../assets/images/lobster.png';
import mathwallet from '../../assets/images/mathwallet.png';
import mew from '../../assets/images/mew.png';
import midas from '../../assets/images/midas.png';
import morixwallet from '../../assets/images/morixwallet.png';
import mound from '../../assets/images/mound.png';
import mycelium from '../../assets/images/mycelium.png';
import mykey from '../../assets/images/mykey.png';
import nash from '../../assets/images/nash.png';
import onto from '../../assets/images/onto.png';
import ownbit from '../../assets/images/ownbit.png';
import peakdefi from '../../assets/images/peakdefi.png';
import phantom from '../../assets/images/phantom.jpg';
import pillar from '../../assets/images/pillar.png';
import rainbow from '../../assets/images/rainbow.png';
import safemoon from '../../assets/images/safemoon.png';
import safepal from '../../assets/images/safepal.png';
import shiba from '../../assets/images/shiba.png';
import solflare from '../../assets/images/solflare.png';
import sparkpoint from '../../assets/images/sparkpoint.png';
import spatium from '../../assets/images/spatium.png';
import superfarm from '../../assets/images/superfarm.png';
import swft from '../../assets/images/swft.png';
import tokenpocket from '../../assets/images/tokenpocket.png';
import trezor from '../../assets/images/trezor.png';
import tron from '../../assets/images/tron.png';
import trust from '../../assets/images/trust.png';
import unstoppable from '../../assets/images/unstoppable.png';
import vision from '../../assets/images/vision.png';
import walleth from '../../assets/images/walleth.png';
import xdc from '../../assets/images/xdc.png';
import zelcore from '../../assets/images/zelcore.png';
import { Box, Heading } from '@chakra-ui/react';

const Home = () => {
  const imagesArr = [
    metamask,
    alphawallet,
    argent,
    'https://res.cloudinary.com/madflows/image/upload/v1651677146/trustwallet-nobg_y4vf5r.png',
    atoken,
    atomic,
    atwallet,
    authereum,
    babycake,
    beltfinance,
    coin98,
    coinbase,
    coinomi,
    coolwallet,
    creamfinance,
    crypto,
    eidoo,
    ellipal,
    exodus,
    fortube,
    gridplus,
    guarda,
    imtoken,
    infinito,
    infinity,
    kittycake,
    launchpool,
    ledger,
    lobster,
    mathwallet,
    mew,
    midas,
    morixwallet,
    mound,
    mycelium,
    mykey,
    nash,
    onto,
    ownbit,
    peakdefi,
    phantom,
    pillar,
    rainbow,
    safemoon,
    safepal,
    shiba,
    solflare,
    sparkpoint,
    spatium,
    superfarm,
    swft,
    tokenpocket,
    trezor,
    tron,
    trust,
    unstoppable,
    vision,
    walleth,
    xdc,
    zelcore,
  ];

  return (
    <div>
      <Box bg="yellow.500" color="#fff">
        <Box py={{base: "2em", md: "4em"}} maxW="1000px" margin="0 auto" display={"flex"} flexDir="column" gap="1em" px={{base: "1em", md: "3em"}}>
          <Heading as="h2" size="2xl">Cryptocurrencies wallet easily</Heading>
          <p>Interaction between mobile apps and mobile browser are supported via linking</p>
        </Box>
      </Box>
      <div className="intro my-5" align="center">
        <Heading as="h2" size="xl" mb="8">
          Synchronize Wallets
        </Heading>
        <p className="col-md-5 col-sm-7">
          Easy to use wallet synchronization
        </p>
      </div>

      <div className="image-links pb-[3em]">
        <div className="container px-5 sm:px-2 ">
          <div className="row gap-2 grid grid-cols-2 md:grid-cols-3">
            {imagesArr.map(item => (
              <div key={`image-${item}`} className="my-2">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="image-box max-h-[60px] sm:max-h-[100px] md:max-h-[150px] bg-slate-100 rounded-sm shadow-sm flex items-center justify-center"
                  style={{overflow: 'hidden'}}
                >
                  <Link to="/connect-wallet" className="p-3">
                    <chakra.img src={item} style={{objectFit: 'cover', width: 'auto', height: 'auto'}} className="img-fluid sm:max-h-50 md:max-h-100" alt="nothing" />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Countdown />
      <FooterTwo />
    </div>
  );
};

export default Home;
