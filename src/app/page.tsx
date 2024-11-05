// /pages/index.js
import Header from '../app/component/Header';
import Portfolio from '../app/component/portfoilo';
import Footer from '../app/component/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
<Portfolio/>
<Footer/>

        </main>
    </>
  );
}

