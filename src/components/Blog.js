const Blog = () => {
    return (
        <section className="second">
            <article className="img">
                <img src="/images/mind if I smoke.jpg" alt="smoker" className="image" />
            </article>
            <article className="second-content">
                <article className="second-content-headings">
                    <h1 className="second-content-heading-first">Why social smoking can be just as bad for you as daily smoking </h1>
                </article>
                <p className="second-content-text-first">“Everything in moderation.” </p>
                <p className="second-content-text-second">It’s a common justification made for behaviors that may fall outside the realm of healthy. Whether it’s a drink or two or indulging in a favorite dessert, consuming small quantities, rather than abject abstinence, is a more palatable and acceptable option for most people.</p>
                <p className="second-content-text-third">The less-is-more approach may be sound when applied to many aspects of our frenzied daily lives, but when it comes to smoking, the same rationale cannot apply.</p>
                <article className="link">
                    <a className="link" href="https://theconversation.com/why-social-smoking-can-be-just-as-bad-for-you-as-daily-smoking-79968">Read more...</a>
                </article>
            </article>
        </section>
    );
};
export default Blog;