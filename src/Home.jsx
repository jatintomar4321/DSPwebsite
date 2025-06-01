import Applynow from './components/Applynow'
import Hero from './components/Hero'
import Information from './components/Information'
import Inquiry from './components/Inquiry'
import Number from './components/Number'
import Quote from './components/Quote'
import ScrollQuotes from './components/ScrollQuotes'
import ShortAbout from './components/ShortAbout'
import ThreeCard from './components/ThreeCard'

const Home = () => {
  return (
    <div>
     <Hero />
     
     <Quote/>
     <ShortAbout/>
     <Number/>
     <Applynow />
     <ScrollQuotes/>
     <Inquiry/>
     <Information/>
     <ThreeCard 
        backgroundColor="bg-gray-50"
        heading="Features"
        features={[
        {
          image: "/2.png",
          title: "Experienced Teachers",
          description: "Our faculty consists of highly qualified and passionate educators with years of experience in shaping young minds and fostering academic excellence."
        },
        {
          image: "/3.png",
          title: "Sports Activities",
          description: "We offer a wide range of sports activities and facilities to ensure the physical development and holistic growth of our students."
        },
        {
          image: "/25.png",
          title: "Modern Facilities",
          description: "Our campus is equipped with state-of-the-art facilities including modern classrooms, labs, library, and digital learning tools."
        }
      ]}/>
       <ThreeCard 
        backgroundColor="bg-white"
        heading="Initiatives"
        features={[
        {
          image: "/4.png",
          title: "Experienced Teachers",
          description: "Our faculty consists of highly qualified and passionate educators with years of experience in shaping young minds and fostering academic excellence."
        },
        {
          image: "/6.png",
          title: "Sports Activities",
          description: "We offer a wide range of sports activities and facilities to ensure the physical development and holistic growth of our students."
        },
        {
          image: "/7.png",
          title: "Modern Facilities",
          description: "Our campus is equipped with state-of-the-art facilities including modern classrooms, labs, library, and digital learning tools."
        }
      ]}/>
      <ThreeCard 
        backgroundColor="bg-gradient-to-br from-[#EEF4E9] to-[#D2E6DB]"
        heading="Achivements"
        features={[
        {
          image: "/4.png",
          title: "Experienced Teachers",
          description: "Our faculty consists of highly qualified and passionate educators with years of experience in shaping young minds and fostering academic excellence."
        },
        {
          image: "/6.png",
          title: "Sports Activities",
          description: "We offer a wide range of sports activities and facilities to ensure the physical development and holistic growth of our students."
        },
        {
          image: "/7.png",
          title: "Modern Facilities",
          description: "Our campus is equipped with state-of-the-art facilities including modern classrooms, labs, library, and digital learning tools."
        }
      ]}/>
      <Quote/>
      <Applynow />
      <Information/>
    </div>
  )
}

export default Home