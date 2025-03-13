import neutrlPhoto from '../assets/neutral.png'
import PercentPhoto from '../assets/100perent.png'


export default function Who_We_Are() {
   return (
      <>
         {/* Who We Are Section */}
         <section className="py-16 px-4">
            <div className="container mx-auto text-center max-w-3xl">
               <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
               <p className="text-gray-600 mb-12">
                  <b>Go Super Foods</b> is a pioneering brand dedicated to delivering optimum health through premium
                  dietary supplements. Specializing in Moringa capsules, we harness the power of nature to provide you
                  with a convenient and effective way to nourish your body. Our commitment to quality ensures that
                  each capsule is packed with the pure goodness of Moringa's vitamins, minerals, and antioxidants.
               </p>
               <div className="flex justify-center space-x-12">
                  <img src={neutrlPhoto} alt="Premium Quality" className="w-1/4 h-1/4 pr-10 float-left" />
                  <img src={PercentPhoto} alt="Natural Ingredients" className="w-1/4 h-1/4 pl-10 float-right" />
               </div>
            </div>
         </section>
      </>
   )
}