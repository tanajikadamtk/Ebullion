
import React, { useState, useRef } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import thumbnailOne from '../../assets/images/product/img1.jpg';
import thumbnailTwo from '../../assets/images/product/img2.jpg'
import thumbnailThree from '../../assets/images/product/img3.jpg'
import thumbnailFour from '../../assets/images/product/img4.jpg'
import thumbnailFive from '../../assets/images/product/img5.jpg'

const images = [
  thumbnailOne, thumbnailTwo, thumbnailThree, 
  // '../../assets/images/product/img1.jpg',
  // '../../assets/images/product/img2.jpg',
  // '../../assets/images/product/img3.jpg',
  // '../../assets/images/product/img4.jpg',
  // '../../assets/images/product/img5.jpg',
];

function ProductSwiper() {
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add('active');
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove('active');
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className='custom-swiper'>
      <div className="left">
        <div className="left_1">
          {images.map((image, i) => (
            <div
              className={i == 0 ? 'img_wrap active' : 'img_wrap'}
              key={i}
              onMouseOver={() => hoverHandler(image, i)}
              ref={addRefs}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Yet to be defined',
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: img,
                width: 1200,
                height: 1800,
              },

              // Not Required creating ssues in mobile
              // enlargedImageContainerDimensions: {
              //   max-width: '150%',
              //   max-height: '150%',
              // },
            }}
          />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default ProductSwiper;


// import ImageGallery from "react-image-gallery";
// import ImgLarge from '../../assets/images/product/product_large.png';
// import ImgSmall from '../../assets/images/product/product3_small.png'

// const images = [
//   {
//     original: ImgLarge,
//     thumbnail: ImgLarge,
//   },
//   {
//     original: ImgSmall,
//     thumbnail: ImgSmall,
//   },
//   {
//     original: ImgSmall,
//     thumbnail: ImgSmall,
//   },
//   {
//     original: ImgSmall,
//     thumbnail: ImgSmall,
//   },
//   {
//     original: ImgSmall,
//     thumbnail: ImgSmall,
//   },
// ];

////////////////////////////////////////////////////////////

// import ImageGallery from "react-image-gallery";
// import ImgLarge from '../../assets/images/product/product_large.png';
// import ImgSmall from '../../assets/images/product/product3_small.png'
// import ReactImageMagnify from "react-image-magnify";


// const ProductSwiper = ({ thumbnailPosition }) => {
//   const myRenderItem =(props)=> {
//     return <ReactImageMagnify
//     {...props}
//     {...{
//       smallImage: {
//         isFluidWidth: true,
//         src: props.thumbnail
//       },
//       largeImage: {
//         src:props.original,
//         isFluidWidth:true,
//         width: 640,
//         height: 480
//       },
//       enlargedImageContainerStyle: {
//         zIndex: "1500"
//       },
//       enlargedImageContainerDimensions: {
//         width: "50%",
//         height: "50%"
//       }
//     }}
//   />;
//   }
//   const properties = {
//     thumbnailPosition: thumbnailPosition,
//     useBrowserFullscreen: false,
//     showFullscreenButton:false,
//     showPlayButton: false,
//     renderItem: myRenderItem.bind(this),
//     showNav:false,
//     items : [
//       {
//         original: ImgLarge,
//         thumbnail: ImgSmall,
//       },
//       {
//         original: ImgLarge,
//         thumbnail: ImgSmall,
//       },
//       {
//         original: ImgLarge,
//         thumbnail: ImgSmall,
//       },
//       {
//         original: ImgLarge,
//         thumbnail: ImgSmall,
//       },
//       {
//          original: ImgLarge,
//         thumbnail: ImgSmall,
//       },
//     ]
//   };
//     return (
//     <ImageGallery {...properties} />
//     )
// }

// export default ProductSwiper


// const ProductSwiper = ({ thumbnailPosition }) => {
//     return (
//     <ImageGallery items={images}
//     thumbnailPosition={thumbnailPosition}
//     // thumbnailPosition='left'
//     showFullscreenButton={false}
//     showPlayButton={false}
//     showNav={false}/>
//     )
// }

// export default ProductSwiper