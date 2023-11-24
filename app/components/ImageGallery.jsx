import imageTextData from "../imageTextData";

const ImageGallery = () => {
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
          className="image"
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