const Contacts = () => {
    return (
        <section>
            <section className="meet-us">
                <h1 className="content-heading-first">MEET AND VAPE WITH US</h1>
                <section className="widgets">
                    <article className="sinoptik">
                        <iframe width= "325" height= "200" title="Weather Widget" scrolling="no" frameBorder="0" allowtransparency="false" loading="lazy"
                            src="https://www.sinoptik.bg/widget/100726050/5/325/200/1?url=https://m.netinfo.bg/sinoptik/js/show_widget.js"
                        />
                    </article>
                    <article className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5987.846599035862!2d27.91581823365138!3d43.19496395723731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a454672371dffd%3A0xcf26f20ab4a27504!2z0KTQsNGAINCx0LDRgA!5e0!3m2!1sbg!2sbg!4v1639867511137!5m2!1sbg!2sbg" title="google map" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                    </article>
                </section>
            </section>
            <article className="content">
                <article className="content-headings">
                    <h1 className="content-heading-first">SEND US MESSAGE</h1>
                </article>
            </article>
            <article className="form">
                <input className="input-email" type="email" placeholder="Your Email" id="email" name="email" />
                <input className="input-subject" type="text" placeholder="Subject" id="subject" name="subject" />
                <textarea className="content-textarea" name="Message" placeholder="Message" id="Message" cols="30" rows="10"></textarea>
                <a className="send" href="mailto:sten.antonov@gmail.com">SEND MESSAGE</a>
            </article>
        </section>
    );
};

export default Contacts;