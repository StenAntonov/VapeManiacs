const Carousel = () => {
    return (
        <section className="carousel">
            <div className="carousel-wrapper">
                <span id="item-1"></span>
                <span id="item-2"></span>
                <span id="item-3"></span>
                <span id="item-4"></span>
                <span id="item-5"></span>
                <span id="item-6"></span>
                <span id="item-7"></span>
                <span id="item-8"></span>
                <div className="carousel-item item-1">
                    <a href="#item-8" className="arrow-prev arrow"> </a>
                   <a href="#item-2" className="arrow-next arrow"> </a>
               </div>

                <div className="carousel-item item-2">
                    <a href="#item-1" className="arrow-prev arrow"> </a>
                   <a href="#item-3" className="arrow-next arrow"> </a>
               </div>

                <div className="carousel-item item-3">
                    <a href="#item-2" className="arrow-prev arrow"> </a>
                   <a href="#item-4" className="arrow-next arrow"> </a>
               </div>
                <div className="carousel-item item-4">
                    <a href="#item-3" className="arrow-prev arrow"> </a>
                   <a href="#item-5" className="arrow-next arrow"> </a>
               </div>
                <div className="carousel-item item-5">
                    <a href="#item-4" className="arrow-prev arrow"> </a>
                   <a href="#item-6" className="arrow-next arrow"> </a>
               </div>
                <div className="carousel-item item-6">
                    <a href="#item-5" className="arrow-prev arrow"> </a>
                   <a href="#item-7" className="arrow-next arrow"> </a>
               </div>
                <div className="carousel-item item-7">
                    <a href="#item-6" className="arrow-prev arrow"> </a>
                   <a href="#item-8" className="arrow-next arrow"> </a>
               </div>
                <div className="carousel-item item-8">
                    <a href="#item-7" className="arrow-prev arrow"> </a>
                   <a href="#item-1" className="arrow-next arrow"> </a>
               </div>
            </div>
        </section>
    );
};
export default Carousel;