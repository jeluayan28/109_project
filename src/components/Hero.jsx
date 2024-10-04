import { styles } from '../styles'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto border-1">
      <div className={`${styles.paddingX} absolute inset-0 top-[400px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-black font-Montserrat font-bold`}>Expert&nbsp;
          <span className="text-[#black] font-Montserrat font-bold">Guidance</span></h1>
          <p className={`${styles.heroSubText}mt-2 text-black`}>
          Our mission is to provide exceptional 
          <br className="sm:block hidden" />support and resources tailored for Seniors.
          </p>
          
          <div className="mt-8 flex flex-col gap-5">
            <button
              type="button"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero