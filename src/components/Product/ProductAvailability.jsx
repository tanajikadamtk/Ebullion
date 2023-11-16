
// import React from 'react';
// import { Badge } from 'react-bootstrap';
// import './ProductAvailability.scss';
// const ProductAvailability = ({ isProductInStock }) => {
//   // Determine the availability status text and Bootstrap class
//   const availabilityText = isProductInStock ? 'In Stock' : 'Out of Stock';
//   const customBadgeStyle = {
//     backGround: "#FFDADA",
//     color: '#5B0000',
//     fontSize: '16px', 
//     backgroundColor: isProductInStock ? 'green' : 'red', // Customize the background color here
    
//     fontFamily: 'Arial, sans-serif'
//   };

//   return (
//     <div>
//       <Badge style={customBadgeStyle} >
//         {availabilityText}
//       </Badge>
//     </div>
//   );
// };

// export default ProductAvailability;





// import React from 'react';
// import { Badge } from 'react-bootstrap';
// import './ProductAvailability.scss';

// const ProductAvailability = ({ isProductInStock }) => {
//   const availabilityText = isProductInStock ? 'In Stock' : 'Out of Stock';

//   const customBadgeStyle = {
//     backgroundColor: isProductInStock ? 'green' : 'red',
//     color: isProductInStock ? 'white' : 'black',
//     fontSize: '16px',
//     fontFamily: 'Arial, sans-serif',
//   };

//   return (
//     <div>
//       <Badge style={customBadgeStyle}>{availabilityText}</Badge>
//     </div>
//   );
// };

// export default ProductAvailability;

// import React from 'react';
// import { Badge } from 'react-bootstrap';
// import './ProductAvailability.scss';

// const ProductAvailability = ({ isProductInStock }) => {
//   const availabilityText = isProductInStock ? 'In Stock' : 'Out of Stock';
//   const customBadgeStyle = {
//     backgroundColor: isProductInStock ? 'green' : 'red',
//     color: 'white',
//     fontSize: '16px',
//     fontFamily: 'Arial, sans-serif',
//   };

//   return (
//     <Badge style={customBadgeStyle}>
//       {availabilityText}
//     </Badge>
    
//   );
// };

// export default ProductAvailability;


// ProductAvailability.js
// import { Badge } from 'react-bootstrap';

// const ProductAvailability = ({data}) => {
//   return (
//     <div>
//       {data.map((product) => (
//         <div key={product.id}>
//           <Badge variant={product.status === 'In Stock' ? 'success' : 'danger'}>
//             {product.status === 'In Stock' ? 'In Stock' : 'Out of Stock'}
//           </Badge>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductAvailability;






// import React from 'react';
// import { data } from './data';

// const ProductAvailability = () => {
//   let inStock = false;
//   let outOfStock = false;

//   data.forEach((product) => {
//     if (product.status === 'In Stock') {
//       inStock = true;
//     } else {
//       outOfStock = true;
//     }
//   });

//   return (
//     <div>
//       {inStock && <p>In Stock</p>}
//       {outOfStock && <p>Out of Stock</p>}
//     </div>
//   );
// };

// export default ProductAvailability;


// import React from 'react';
// import { data } from './data';

// const ProductAvailability = () => {
//   let inStock = false;
//   let outOfStock = false;

//   data.forEach((product) => {
//     if (product.status === 'In Stock') {
//       inStock = true;
//     } else {
//       outOfStock = true;
//     }
//   });

//   return (
//     <>
//       {inStock && (
//         <div>
//           <h2>In Stock Products:</h2>
//           <ul>
//             {data
//               .filter((product) => product.status === 'In Stock')
//               .map((inStockProduct) => (
//                 <li key={inStockProduct.id}>{inStockProduct.name}</li>
//               ))}
//           </ul>
//         </div>
//       )}

//       {outOfStock && (
//         <div>
//           <h2>Out of Stock Products:</h2>
//           <ul>
//             {data
//               .filter((product) => product.status !== 'In Stock')
//               .map((outOfStockProduct) => (
//                 <li key={outOfStockProduct.id}>{outOfStockProduct.name}</li>
//               ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductAvailability;


// import React from 'react';
// import { data } from './data';
// import './ProductAvailability.css'; // Import your CSS file

// const ProductAvailability = () => {
//   return (
//     <div>
//       {data.map((product, index) => (
//         <div key={index} className={product.status === 'In Stock' ? 'inStock' : 'outOfStock'}>
//           {product.name} - {product.status}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductAvailability;
