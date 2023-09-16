import './Main.css';
import experienceData from '../data/experienceData';
import Sheet from './Sheet';

const Main = () => {
    return(
        <div className='main'>
            <div className='main--left'>
                    <div className='main--left--margin'> </div>    
                    <h1 className='main--left--title'>
                        Welcome. Please, explore.
                    </h1>
                    <div className='main--left--content-container'>
                        <div className='main--left--content'>
                            {experienceData.map((experience, index) => (
                            <Sheet
                                key={index}
                                picture={experience.picture}
                                title={experience.title}
                                location={experience.location}
                                rating={experience.rating}
                                noratings={experience.noratings}
                                price={experience.price}
                            />
                            ))}
                        </div>
                    </div>
            </div>
            <div className='main--right'>
            </div>


        </div>
    )
};

export default Main;