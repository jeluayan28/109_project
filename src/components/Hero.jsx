import { styles } from '../styles'
import herobg from '../assets/herobg.png'
import { login, signup } from '../assets'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-tertiary overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full"> 
        <div className="relative w-full h-full">
          <div className="hidden md:block absolute top-0 right-0 w-full h-full bg-white rounded-bl-full overflow-hidden">
            <img
              src={herobg}
              alt="Senior and Caregiver"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-[102%] h-[102%] border-8 border-dashed border-white-400 rounded-bl-full"></div>
        </div>
      </div>
      
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-col justify-between ml-12`}> 
        <div className="mt-auto z-10">
          <h1 className={`${styles.heroHeadText} text-yellow-400 font-bold leading-tight`}>
            EXPERT GUIDANCE
          </h1>
        </div>
        
        <div className="mb-32 z-10">
          <p className={`${styles.heroSubText} text-white max-w-md mb-8`}>
            Our mission is to provide exceptional support and resources tailored specifically for seniors, ensuring they receive the care and connection they deserve.
          </p>
  

          <div className="flex gap-4">
          <button
            type="button"
            className="bg-blue-800 py-3 px-6 text-white font-bold rounded-full flex items-center hover:bg-blue-900 transition-colors"
          >
            <img src={login} alt="login" className="w-6 h-6 mr-2" /> 
            LOGIN
          </button>
          
          <button
            type="button"
            className="bg-blue-800 py-3 px-6 text-white font-bold rounded-full flex items-center hover:bg-blue-900 transition-colors"
          >
            <img src={signup} alt="signup" className="w-6 h-6 mr-2" /> 
            SIGNUP
          </button>
        </div>
        </div>
      </div>
      
      <div className="absolute -top-5 -left-5 w-48 h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full"></div>
      <div className="absolute -bottom-32 -left-10 w-32 h-48 md:w-48 md:h-48 lg:w-48 lg:h-48 bg-primary rounded-full"></div>
      <div className="absolute -top-5 -right-5 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full block lg:hidden block md:hidden"></div>
      <div className="absolute -bottom-32 -right-5 w-48 h-60 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full block lg:hidden block md:hidden"></div>
    </section>
  )
}

export default Hero