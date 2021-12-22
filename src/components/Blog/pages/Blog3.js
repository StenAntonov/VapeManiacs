import { Link } from "react-router-dom";

const Blog3 = () => {

    return (
        <>
            <section className="first">
                <article className="img">
                    <img src="https://res.cloudinary.com/raggae/image/upload/v1639958293/VapeManiacs/mind_if_I_smoke_xurfnj.jpg" alt="smoker" className="image" />
                </article>
                <article className="first-content">
                    <article className="first-content-headings">
                        <h1 className="first-content-heading-first">Why social smoking can be just as bad for you as daily smoking</h1>
                    </article>
                    <p className="first-content-text-first">“Everything in moderation.” </p>
                    <p className="first-content-text-second">It’s a common justification made for behaviors that may fall outside the realm of healthy. Whether it’s a drink or two or indulging in a favorite dessert, consuming small quantities, rather than abject abstinence, is a more palatable and acceptable option for most people.</p>
                    <p className="first-content-text-third">The less-is-more approach may be sound when applied to many aspects of our frenzied daily lives, but when it comes to smoking, the same rationale cannot apply.</p>
                    <article className="link">
                        <a className="link" href="https://theconversation.com/why-social-smoking-can-be-just-as-bad-for-you-as-daily-smoking-79968">Read more...</a>
                    </article>
                </article>
            </section>
            <section className="second">
                <article className="second-content">
                    <article className="second-content-headings">
                        <h1 className="second-content-heading-first">What does smoking do to your heart?</h1>
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
        </>
    );
};
export default Blog3;