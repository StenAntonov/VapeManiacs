const Blog = () => {
    return (
        <section className="video-blog">
            <h2 className="video-blog-heading">Video Blog:</h2>
            <div class="carousel-wrapper">
                <span id="item-1"></span>
                <span id="item-2"></span>
                <span id="item-3"></span>
                <div class="carousel-item item-1">
                    <a href="#item-3" class="arrow-prev arrow"></a>
                    <a href="#item-2" class="arrow-next arrow"></a>
                </div>

                <div class="carousel-item item-2">
                    <a href="#item-1" class="arrow-prev arrow"></a>
                    <a href="#item-3" class="arrow-next arrow"></a>
                </div>

                <div class="carousel-item item-3">
                    <a href="#item-2" class="arrow-prev arrow"></a>
                    <a href="#item-1" class="arrow-next arrow"></a>
                </div>
            </div>
        </section>
    );
};
export default Blog;