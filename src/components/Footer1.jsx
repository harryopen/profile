

function Footer1() {
   return (
     <footer className=" mt-20 bg-black text-gray-400 py-12">
         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
         <div>
           <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
           <p className="mb-4">
           Aspiring Full Stack Developer with a strong foundation in React and a passion for mathematics. Eager to apply my skills and knowledge gained through academic projects and coursework. I bring a fresh perspective, technical proficiency, and a keen interest in problem-solving to contribute effectively to collaborative software development projects. Excited about opportunities to learn and grow in the dynamic field of Full Stack development.
           </p>
         </div>
         <div>
           <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
           <ul>
             <li>
               <a
                 href="#"
                 className="hover:text-white transition-colors duration-300"
               >
                 Home
               </a>
             </li>
             <li>
               <a
                 href="#"
                 className="hover:text-white transition-colors duration-300"
               >
                 About
               </a>
             </li>
             <li>
               <a
                 href="#"
                 className="hover:text-white transition-colors duration-300"
               >
                 Skill
               </a>
             </li>
             <li>
               <a
                 href="#"
                 className="hover:text-white transition-colors duration-300"
               >
                 Contact
               </a>
             </li>
           </ul>
         </div>
         <div>
           <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
           <div className="flex space-x-4">
             <a
               href="#"
               className="hover:text-white transition-colors duration-300"
             >
               Facebook
             </a>
             <a
               href="#"
               className="hover:text-white transition-colors duration-300"
             >
               Twitter
             </a>
             <a
               href="#"
               className="hover:text-white transition-colors duration-300"
             >
               Instagram
             </a>
           </div>
         </div>
         <div>
           <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
           <p> Jalandhar, Punjab</p>
           <p> hs143297@gmail.com</p>
           <p> Phone: (+91) 8837787856</p>
         </div>
         </div>
         <p className="text-center text-xs pt-8">© 2024 Harry_pajji. All rights reserved.</p>
     </footer>
   )
 }
 
 export default Footer1