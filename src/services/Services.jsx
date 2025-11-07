import { useState } from 'react';
import './Services.css'

const Services = () => {

    const [toggleState, setTogglState] = useState(0)

    const toggleTab = (index) => {
        setTogglState(index)
    }

    return (
        <div className='mt-12' id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className=' flex justify-center'>
                <div>
                    <div className='services__container container grid'>
                        <div className='services__content '>
                            <div>
                                <i className='uil uil-web-grid services__icon'></i>
                                <h3 className='services__title'>Frontend <br /> Develope </h3>
                            </div>

                            <span className='services__button' onClick={() => toggleTab(1)}>View more
                                <i className='uil uil-arrow-right services__button-icon'></i>
                            </span>

                            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                                <div className='services__modal-content'>
                                    <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                                    <h3 className='services__modal-title'>Frontend Developer</h3>
                                    <p className='services__modal-description'>Modern, responsive, and user-friendly web interfaces built using clean code and the latest frontend technologies</p>

                                    <ul className='services__modal-services grid'>
                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Fully mobile-friendly and modern website layouts.
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                High-performance web apps built with React and Next.js.
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Connecting UI with backend APIs for dynamic data.
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Improving site speed, performance, and overall user experience.
                                            </p>
                                        </li>

                                        {/* <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Worpress theme customization
                                            </p>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='services__content'>
                            <div>
                                <i className='uil uil-arrow services__icon'></i>
                                <h3 className='services__title'>Ui/Ux <br />Designer</h3>
                            </div>

                            <span onClick={() => toggleTab(2)} className='services__button'>View more
                                <i className='uil uil-arrow-right services__button-icon'></i>
                            </span>

                            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                                <div className='services__modal-content'>
                                    <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                                    <h3 className='services__modal-title'>Ui/Ux Designer</h3>
                                    <p className='services__modal-description'>I create clean, intuitive, and user-friendly interfaces. From wireframes to prototypes, my UI/UX designs focus on seamless navigation, visual clarity, and engaging experiences that make digital products easy and enjoyable to use.</p>

                                    <ul className='services__modal-services grid'>
                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                I develop the user interface
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Clean and visually appealing user interface designs for web & mobile.
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                I create ux element interections
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Interactive prototypes to preview user journeys before development
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Simple, intuitive, and user-friendly experience design
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='services__content'>
                            <div>
                                <i className='uil uil-edit services__icon'></i>
                                <h3 className='services__title'>Wordpress <br /> Developer</h3>
                            </div>

                            <span onClick={() => toggleTab(3)} className='services__button'>View more
                                <i className='uil uil-arrow-right services__button-icon'></i>
                            </span>

                            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                                <div className='services__modal-content'>
                                    <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                                    <h3 className='services__modal-title'>Wordpress Developer</h3>
                                    <p className='services__modal-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eaque quisquam voluptates! Aliquam, pariatur autem!</p>

                                    <ul className='services__modal-services grid'>
                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                I develop the user interface
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Webpage Development
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                I create ux element interections
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Worpress page Builder
                                            </p>
                                        </li>

                                        <li className='services__modal-service'>
                                            <i className='uil uil-check-circle services__modal-icon'></i>
                                            <p className='services__modal-info'>
                                                Worpress theme customization
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;