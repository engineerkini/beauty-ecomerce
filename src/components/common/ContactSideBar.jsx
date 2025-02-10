// import React, { useState } from 'react';
// import { ChevronRight } from 'lucide-react';

// const AccountPage = () => {
//   const [activeSection, setActiveSection] = useState('Contact information');

//   const handleSectionClick = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
//       <div className="space-y-4">
//         <div
//           className={`cursor-pointer hover:bg-gray-100 rounded-md p-3 flex justify-between items-center ${
//             activeSection === 'Contact information'
//               ? 'bg-gray-100 font-medium'
//               : 'font-normal'
//           }`}
//           onClick={() => handleSectionClick('Contact information')}
//         >
//           <span>Contact information</span>
//           <ChevronRight className="text-gray-500" />
//         </div>
//         <div
//           className={`cursor-pointer hover:bg-gray-100 rounded-md p-3 flex justify-between items-center ${
//             activeSection === 'Change password'
//               ? 'bg-gray-100 font-medium'
//               : 'font-normal'
//           }`}
//           onClick={() => handleSectionClick('Change password')}
//         >
//           <span>Change password</span>
//           <ChevronRight className="text-gray-500" />
//         </div>
//         <div
//           className={`cursor-pointer hover:bg-gray-100 rounded-md p-3 flex justify-between items-center ${
//             activeSection === 'Addresses'
//               ? 'bg-gray-100 font-medium'
//               : 'font-normal'
//           }`}
//           onClick={() => handleSectionClick('Addresses')}
//         >
//           <span>Addresses</span>
//           <ChevronRight className="text-gray-500" />
//         </div>
//         <div
//           className={`cursor-pointer hover:bg-gray-100 rounded-md p-3 flex justify-between items-center ${
//             activeSection === 'Orders'
//               ? 'bg-gray-100 font-medium'
//               : 'font-normal'
//           }`}
//           onClick={() => handleSectionClick('Orders')}
//         >
//           <span>Orders</span>
//           <ChevronRight className="text-gray-500" />
//         </div>
//         <div
//           className={`cursor-pointer hover:bg-gray-100 rounded-md p-3 flex justify-between items-center ${
//             activeSection === 'Wishlist'
//               ? 'bg-gray-100 font-medium'
//               : 'font-normal'
//           }`}
//           onClick={() => handleSectionClick('Wishlist')}
//         >
//           <span>Wishlist</span>
//           <ChevronRight className="text-gray-500" />
//         </div>
//       </div>

//       {/* Render the content for the active section */}
//       <div className="mt-6 border-t border-gray-200 pt-6">
//         {activeSection === 'Contact information' && (
//           <div>
//             <h2 className="text-lg font-medium mb-4 text-pink-500">Contact information</h2>
//             {/* Add your contact information form or content here */}
//           </div>
//         )}
//         {activeSection === 'Change password' && (
//           <div>
//             <h2 className="text-lg font-medium mb-4 text-pink-500">Change password</h2>
//             {/* Add your password change form or content here */}
//           </div>
//         )}
//         {activeSection === 'Addresses' && (
//           <div>
//             <h2 className="text-lg font-medium mb-4 text-pink-500">Addresses</h2>
//             {/* Add your address management content here */}
//           </div>
//         )}
//         {activeSection === 'Orders' && (
//           <div>
//             <h2 className="text-lg font-medium mb-4 text-pink-500">Orders</h2>
//             {/* Add your order history content here */}
//           </div>
//         )}
//         {activeSection === 'Wishlist' && (
//           <div>
//             <h2 className="text-lg font-medium mb-4 text-pink-500">Wishlist</h2>
//             {/* Add your wishlist content here */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default AccountPage;
