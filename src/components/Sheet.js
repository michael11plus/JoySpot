import './Sheet.css';

export default function Series( { picture, title, location, rating, noratings, price }) {
    return(
        <div className='sheet'>
            <img src={picture} alt="experience image" className='sheet--picture'/>
            <p className='sheet--title'>
                {title}
            </p>
            <h5 className='sheet--location'>
                • {" " + location}
            </h5>
            <div className='sheet--ratingsdiv'>
                <span className='sheet--rating'>
                 ☆ {rating}
                </span>
                <span className='sheet--noratings'>
                 {noratings} 𖠋
                </span>
            </div>
            <span className='sheet--price'>
                at <b>{price}</b> / person
            </span>
        </div>
    )
};