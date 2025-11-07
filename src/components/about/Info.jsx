

const Info = () => {
    return (
        <div className="flex justify-center ">
            <div className=" grid grid-cols-3 ">
                <div className="about__box">
                    <i className="bx bx-award about_icon"></i>
                    <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle"> 1 Year Experience</span>
                </div>

                <div className="about__box">
                    <i className="bx bx-briefcase-alt about_icon"></i>
                    <h3 className="about__title">Completed </h3>
                    <span className="about__subtitle"> 10 Projects</span>
                </div>

                <div className="about__box">
                    <i className="bx bx-support about_icon"></i>
                    <h3 className="about__title">Support online</h3>
                    <span className="about__subtitle">24/7</span>
                </div>


            </div>
        </div>
    );
};

export default Info;