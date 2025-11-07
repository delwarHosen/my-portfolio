import './portfolio.css'
import Menu from "./Menu"
import { useState } from 'react';

const Portfolio = () => {
    const [items, setItems] = useState(Menu)

    const filterItem = (categoryItem) => {
        const updateItem = Menu.filter((currentItem) => {
            return currentItem.category === categoryItem;
        })
        setItems(updateItem)
    }

    return (
        <div className='section' id='portfolio'>
            <h2 className="section__title portfolioTitle">My Portfolio</h2>
            <span className="section__subtitle">Recent Work</span>

            <div className='work__filters'>
                <span className='work__item' onClick={() => setItems(Menu)}>All Works</span>
                <span className='work__item' onClick={() => filterItem('NEXT JS')}>NEXT JS</span>
                <span className='work__item' onClick={() => filterItem('REACT JS')}>REACT</span>
                <span className='work__item' onClick={() => filterItem('UI/UX')}>UI/UX</span>
            </div>

            <div className='work__container container grid'>
                {items.map((element) => {
                    const { id, title, image, category, project, github } = element;
                    return (
                        <div className='work__card' key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="img" className='work__img' />
                                <div className='work__mask'></div>
                            </div>

                            <span className='work__category'>{category}</span>
                            <h3 className="work__title">{title}</h3>


                            <div className="work__buttons">

                                <a href={project} className="work__button px-[10px] py-[5px]">
                                    live link
                                </a>
                                {github && (
                                    <a href={github} className="work__button px-[10px] py-[5px]">
                                        Github
                                    </a>
                                )}
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Portfolio;