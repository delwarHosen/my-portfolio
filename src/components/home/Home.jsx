import Data from './Data';
import './Home.css'
import ScrollDowb from './ScrollDowb';
import Social from "./Social";


const Home = () => {
    return (
        <section className='home section' id='home '>
            <div className="home__container container grid w-4/5 md:w-full">
                <div className="home__content grid ">
                    <Social></Social>
                    <div className="home__img"></div>
                    <Data></Data>
                </div>
                <ScrollDowb></ScrollDowb>
            </div>
        </section>
    );
};

export default Home;