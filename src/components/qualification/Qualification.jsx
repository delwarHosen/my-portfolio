import './Qualification.css'

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className='qualification__container container '>
                <div className="qualification__tabs">
                    <div className='qualification__button qualification__active button-flex'>
                        <i className='uil uil-graduation-cap qualification__icon'></i>Education
                    </div>

                    <div className='qualification__button button-flex'>
                        <i className='uil uil-briefcase-alt qualification__icon'></i>Experience
                    </div>
                </div>
            </div>

            <div className="qualification__sections">
                <div>
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Web Develpment</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Web Design</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>UI/UX Design</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Wordpress development</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>User interface</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>User Experience</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Backend Development</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Frontend Development</h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i> 2021 - present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Qualification;



{/* <div className='qualification__container container'>
<div className='qualification__tabs'>
    <div className='qualification__button qualification__active button--flex'>
        <i className='uil uil-graduation-cap qualification__icon'></i>Education
    </div>

    <div className='qualification__button button--flex'>
        <i className='uil uil-briefcase-alt qualification__icon'></i>Education
    </div>
</div>

<div className='qualification__sections'>
    <div className='qualification__content qualification__content-active'>
        <div className='qualification__data'>
            <div>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'> spain institute</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calender-alt'></i> 2021- Present
                </div>
            </div>
            <div>
                <span className='qualification_rounder'></span>
                <span className='qualification__line'></span>
            </div>
        </div>

        <div className='qualification__data'>
            <div></div>
            <div>
                <span className='qualification_rounder'></span>
                <span className='qualification__line'></span>
            </div>
            <div>
                <h3 className='qualification__title'>UI/UX Design</h3>
                <span className='qualification__subtitle'> spain institute</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calender-alt'></i> 2021- Present
                </div>
            </div>

        </div>

        <div className='qualification__data'>
            <div></div>
            <div>
                <span className='qualification_rounder'></span>
                <span className='qualification__line'></span>
            </div>
            <div>
                <h3 className='qualification__title'>Wordpress Development</h3>
                <span className='qualification__subtitle'> spain institute</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calender-alt'></i> 2021- Present
                </div>
            </div>

        </div>
    </div>

    <div className='qualification__content'>
        <div className='qualification__data'>
            <div>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'> spain institute</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calender-alt'></i> 2021- Present
                </div>
            </div>
            <div>
                <span className='qualification_rounder'></span>
                <span className='qualification__line'></span>
            </div>
        </div>

        <div className='qualification__data'>
            <div></div>
            <div>
                <span className='qualification_rounder'></span>
                <span className='qualification__line'></span>
            </div>
            <div>
                <h3 className='qualification__title'>UI/UX Design</h3>
                <span className='qualification__subtitle'> spain institute</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calender-alt'></i> 2021- Present
                </div>
            </div>

        </div>

        <div className='qualification__data'>
            <div></div>
            <div>
                <span className='qualification_rounder'></span>
                <span className='qualification__line'></span>
            </div>
            <div>
                <h3 className='qualification__title'>Wordpress Development</h3>
                <span className='qualification__subtitle'> spain institute</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calender-alt'></i> 2021- Present
                </div>
            </div>

        </div>
    </div>
</div>
</div> */}