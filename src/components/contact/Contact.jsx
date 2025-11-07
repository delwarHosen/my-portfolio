import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { TbSend } from "react-icons/tb";
import './contact.css'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gqo0qkn', 'template_hwhhq5a', form.current, {
                publicKey: 'Ex-StCmXgAIQqmOtQ',
            })
        e.target.reset()
        // .then(
        //     () => {
        //         console.log('SUCCESS!');
        //     },
        //     (error) => {
        //         console.log('FAILED...', error.text);
        //     },
        // );
    };

    return (
        <section className='contact section' id='contact'>
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h2 className="contact__title">Talk to me </h2>
                        <div className="w-full flex justify-center items-center">
                            <div className='contact__info'>
                                <div className="contact__card ">
                                    <i className="bx bx-mail-send contact__card-icon"></i>

                                    <h3 className="contact__card-title">Email</h3>
                                    <span className="contact__card-data">delwar.hosen008@gmail.com</span>

                                    <a href="mailto:delwar.hosen008@gmail.com" className="contact__button">Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                                </div>

                                <div className="contact__card ">
                                    <i className="bx bxl-whatsapp contact__card-icon"></i>

                                    <h3 className="contact__card-title">Whatsapp</h3>
                                    <span className="contact__card-data">++8801878865256</span>

                                    <a href="https://whatsapp.com/dl/" className="contact__button">Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                                </div>

                                <div className="contact__card w">
                                    <i className="bx bxl-messenger contact__card-icon"></i>

                                    <h3 className="contact__card-title">Messenger</h3>
                                    <span className="contact__card-data">User.fb232</span>

                                    <a href="" className="contact__button">Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="m-2 contact__content ">
                    <h2 className="contact__title">Write me your Project </h2>

                    <form ref={form} onSubmit={sendEmail} className="contact__form  ">
                        <div className="contact__form-div">
                            <label className="contact__form-tag" htmlFor="">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert Your Name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag" htmlFor="">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert Your email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag" htmlFor="">Project</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project"></textarea>

                        </div>
                        <div className='md:ml-0 ml-5'>
                            <button className="button  button--flex"> Send Message <TbSend></TbSend></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;