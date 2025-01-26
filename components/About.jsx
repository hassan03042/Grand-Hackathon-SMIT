import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

//components
const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes  */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              {/* <div
                className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px]
              flex items-center justify-center"
              > */}
                <Image
                  src="/assets/about/dp3.avif"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=""
                  className="rounded-full"
                />
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center ">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image 
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-white ">
                  <div className="text-5xl font-bold leading-none">10+</div>
                  <div className="leading-none text-center"></div>
                  <div>
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div
            className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0
          flex flex-col gap-6"
          >
            <div>
              <AnimatedText text="Muhammad Dalail Khan" textStyles="h2 mb-2" />
              <p className="text-lg">Advocate High Court of Pakistan</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              MD Khan is a seasoned legal practitioner with extensive experience
              in constitutional, corporate, and tax law. Based in Karachi, he
              leads the South Zone operations of M D Law Associates, ensuring
              seamless legal support across a wide array of practice areas. With
              a reputation for excellence, MD Khan has represented high-profile
              clients in complex litigation and advisory matters. He is deeply
              committed to delivering innovative and practical legal solutions
              tailored to client needs. His leadership and expertise have been
              instrumental in establishing M D Law Associates as a nationally
              recognized full-service law firm.
            </p>
            {/* info items */}
            <div
              className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0
            items-center"
            >
              {/* Item 1 */}

              {/* <div className="max-w-max">
                <div className="uppercase font-bold text-primary">{}</div>
                <p>{}</p></div> */}
              {/* Item 2 */}

              {/* <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Born in</div>
                <p>Pakistan, Karachi</p>
              </div> */}
              {/* Item 3 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Phone</div>
                <p>+92 21-34331171-2</p>
              </div>
              {/* Item 4 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>mdlawassociates@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
