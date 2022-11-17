import React from 'react';
import styles from './Countdown.module.css';
import { FaDatabase, FaRegHandshake, FaUser } from 'react-icons/fa'
import { GrTransaction } from 'react-icons/gr'
import { Icon } from '@chakra-ui/react';
const Countdown = () => {
  
  return (
    <section class={styles.counters}>
      <div class={styles.container}>
        <div>
          <Icon as={FaUser} fontSize="2rem" />
          <div class={styles.counter} data-target="300">
            3235+
          </div>
          <h3>Clients</h3>
        </div>
        <div>
        <Icon as={GrTransaction} color="#fff" fontSize="2rem" />

          <div class={styles.counter} data-target="220">
            4320+
          </div>
          <h3>Transactions</h3>
        </div>
        <div>
        <Icon as={FaDatabase} fontSize="2rem" />
          <div class={styles.counter} data-target="31">
            4321+
          </div>
          <h3>Client Database</h3>
        </div>
        <div>
          <Icon as={FaRegHandshake} fontSize="2rem" />
          <div class={styles.counter} data-target="21">
            83+
          </div>
          <h3>Partners</h3>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
