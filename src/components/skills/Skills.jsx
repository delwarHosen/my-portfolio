import './Skills.css'
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className='flex justify-center'>
            <div className="skills__container container grid">
                <Frontend></Frontend>

                <Backend></Backend>
            </div>
            </div>
        </section>
    );
};

export default Skills;