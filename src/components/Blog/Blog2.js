import { Link } from "react-router-dom";

const Blog2 = () => {

    return (
        <>
            <section className="second">
                <article className="second-content">
                    <article className="second-content-headings">
                        <h1 className="second-content-heading-first">SSSSSSSSSSSSS</h1>
                    </article>
                    <p className="second-content-text-first">Most people, whether or not they smoke, are aware of the damage that smoking can cause to people's lungs. But far fewer people are aware that smoking is also harmful to the heart. Although smoke is inhaled into the lungs, the chemicals absorbed into your bloodstream can also affect the health of your heart and circulatory system.</p>
                    <p className="second-content-text-second"></p>
                    <p className="second-content-text-third"></p>
                    <article className="link2">
                        <a className="link2" href="https://patient.info/news-and-features/what-does-smoking-do-to-your-heart">Read more...</a>
                    </article>
                </article>
                <article className="img2">
                    <img src="https://res.cloudinary.com/raggae/image/upload/v1639958298/VapeManiacs/Smoker_2_thmhtt.png" alt="smoker" className="image2" />
                </article>
            </section>
            <div className="buttons">
                    <Link to={'pages/blog2'} className="button-edit">Next</Link>
                    {/* <Link to={`/Blog2`} className="button-edit">Prev</Link> */}
                </div>
        </>
    );
};
export default Blog2;