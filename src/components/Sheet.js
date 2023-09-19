import './Sheet.css';

export default function Sheet(props) {
    return(
        <div className='sheet'>
            {props.rating === "5" && <div className='sheet--tag'>EXCLUSIVE</div>}
            <img src={props.picture} alt="experience image" className='sheet--picture'/>
            <p className='sheet--title'>
                {props.title}
            </p>
            <h5 className='sheet--location'>
                • {" " + props.location}
            </h5>
            <div className='sheet--ratingsdiv'>
                <span className='sheet--rating'>
                 ☆ {props.rating}
                </span>
                <span className='sheet--noratings'>
                 {props.noratings} 𖠋
                </span>
            </div>
            <span className='sheet--price'>
                at <b>{props.price}</b> / person
            </span>
        </div>
    )
};