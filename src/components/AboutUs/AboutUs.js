const AboutUs = () => {
    return (
        <section className="about-us-section">
            <article className="about-us-info">
                <h2 className="about-us-info-heading">History</h2>
                <p className="about-us-info-p">Vaping helped me and my friends to quit smoking! Some of us was smokers for about a 20 years. When we decided to try vaping, no one was thinking that this will makes us to stop smoking cigarettes, but it was something new and interesting to give a try. When I tasted it for the first time, I was amazed by the flavour.. it was really "yummy". Then I started to cook my own e-liquid with many different kind of recipes and some of them was even created by me. I really liked it.. ! After vaping, you can not get back to smoking cigarettes. They taste awfull.</p>
                <blockquote className="quotte">-- Smoking is Dead, vaping is the Future and the future is Now!!!</blockquote>
            </article>
            <article className="about-us-images">
                <img className="about-us-vape-left" src="https://res.cloudinary.com/raggae/image/upload/v1640183618/VapeManiacs/Vapes_ll5sqs.jpg" alt="vape"/>
                <img src="https://res.cloudinary.com/raggae/image/upload/v1640183785/VapeManiacs/IMG_20181101_171841_akzlub.jpg" alt="vape" className="middle-img" />
                <img className="about-us-vape-right" src="https://res.cloudinary.com/raggae/image/upload/v1640183784/VapeManiacs/IMG_20181026_235858_lcw7st.jpg" alt="vape"/>
            </article>
        </section>
    );
};

export default AboutUs;