import React from 'react'

function Footer() {
   return (
      <div>
         {/* Newsletter Section */}
         <section className="bg-green-600 py-16">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-2xl font-bold text-white mb-4">Subscribe to our emails</h2>
               <div className="max-w-md mx-auto">
                  <div className="flex">
                     <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none"
                     />
                     <button className="bg-green-700 text-white px-6 py-2 rounded-r-lg hover:bg-green-800">
                        →
                     </button>
                  </div>
               </div>
            </div>
            <div className='text-dark-600 p-4 pt-10'>
               <p>© 2025, Go Super Foods Powered by Bank 'O' Bima </p>
            </div>
         </section>
      </div>
   )
}

export default Footer