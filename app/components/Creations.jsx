import ImageGallery from "./ImageGallery";

const Creations = () => {
    return (  
        <section className="creations">
            <div className="container">
                {/* <div className="creation-text"> */}
                    <h1>Our Creations</h1>
                    
                
                
            <ImageGallery />
            <button className="see-btn">See All</button>
           </div>
        </section>
    );
}
 
export default Creations;
