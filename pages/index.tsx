import type { NextPage } from 'next'
import Subheader from '../components/Subheader';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Subheader />
    </div>
  )
}

export default Home
