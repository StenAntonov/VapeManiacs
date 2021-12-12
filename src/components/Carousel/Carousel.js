const Carousel = () => {
    return (
        <section className="carousel">
            <div className="carousel-wrapper">
                <span id="item-2"></span>
                <span id="item-3"></span>
                <span id="item-1"></span>
                <div className="carousel-item item-1">
                    <a href="#item-3" className="arrow-prev arrow"></a>
                   <a href="#item-2" className="arrow-next arrow"></a>
               </div>

                <div className="carousel-item item-2">
                    <a href="#item-1" className="arrow-prev arrow"></a>
                   <a href="#item-3" className="arrow-next arrow"></a>
               </div>

                <div className="carousel-item item-3">
                    <a href="#item-2" className="arrow-prev arrow"></a>
                   <a href="#item-1" className="arrow-next arrow"></a>
               </div>
            </div>
        </section>
    );
};
export default Carousel;