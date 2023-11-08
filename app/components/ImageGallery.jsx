const ImageGallery = () => {

  const imageTextData = [ 
    { id: 1, text: 'Deep earth' },
    { id: 2, text: 'Night arcade' },
    { id: 3, text: 'Soccer team VR' },
    { id: 4, text: 'The grid' },
    { id: 5, text: 'From up above VR' },
    { id: 6, text: 'Pocket borealis' },
    { id: 7, text: 'The curiosity' },
    { id: 8, text: 'Make it fisheye' },
  ];

  const images = imageTextData.map((item) => {
    const desktopImagePath = `/assets/image${item.id}-desktop.jpg`;
    const mobileImagePath = `/assets/image${item.id}-mobile.jpg`;

    return (
      <div key={item.id} className="image-container">
        <img
          srcSet={`${desktopImagePath} 1024w, ${mobileImagePath} 512w`}
          sizes="(max-width: 600px) 50vw, 1024px"
          src={desktopImagePath}
          alt={`Creation Image ${item.id}`}
        />
        <div className="image-text">{item.text}</div>
      </div>
    );
  });
    return ( 
      <div className="image-gallery">
        {images}
      </div>
     );
}
 
export default ImageGallery;