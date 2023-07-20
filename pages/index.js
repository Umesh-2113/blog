  import Image from 'next/image'
  import { Inter } from 'next/font/google'
  import NavBar from '@/components/NavBar'
  import FeaturedCard from '@/components/FeaturedCard'
  import Feed from '../components/Feed'
  import Categories2 from '@/components/Categories2'
  import Allpost from '@/components/Allpost'
  import Posts from '@/components/Posts'


  const inter = Inter({ subsets: ['latin'] })

  export default function Home() {
    return (
      <div className='max-w-7xl mx-auto'>
        <NavBar/>
        <FeaturedCard/>
        <Allpost/>

        <Categories2/>
        <Posts/>
        {/* <section className='absolute md:-mt-14  lg:mt- w-full'>
        <Feed/>
        </section> */}

  <footer>
  <h1 className='text-white text-center font-mono'> • © FullStalk - A Property of <span className='text-amber-300 font-mono'>LeadcellB2B</span>  •</h1>
  </footer>
      </div>
    )
  }
