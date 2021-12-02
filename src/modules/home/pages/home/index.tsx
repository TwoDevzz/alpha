import Head from 'next/head';

import Academy from '@home/sections/Academy';
import AlphaCast from '@home/sections/AlphaCast';
import Contributors from '@home/sections/Contributors';
import Cover from '@home/sections/Cover';
import EarlyAdopter from '@home/sections/EarlyAdopter';
import FAQ from '@home/sections/FAQ';
import Lighter from '@home/sections/Lighter';
import LiveRoom from '@home/sections/LiveRoom';
import Plans from '@home/sections/Plans';
import Products from '@home/sections/Products';
import Strategy from '@home/sections/Strategy';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Trading</title>
      </Head>

      <Cover />
      <Contributors />
      <Products />
      <LiveRoom />
      <Lighter />
      <Strategy />
      <AlphaCast />
      {/*<EarlyAdopter />*/}
      <Plans />
      <Academy />
      {/* <FAQ /> */}
    </>
  );
}
