import PropTypes from 'prop-types';
import './Details.css';

const Details = (props) => {
    const { id, title, synopsis, actors } = props;

    return (
        <>
            <h2 className='title'>{title}</h2>
            <p>{synopsis}</p>
            <ul>
                {/* {actors.map(actor=>(
                <li>{actor}</li>//Error : tous les enfants doivent avoir une clé unique
            ))} */}


                {
                    actors.map((actor, index) => (
                        <li key={index}>{actor}</li>
                    ))
                }


            </ul>
        </>
    )
};

Details.defaultProps = 
{
    title:'Taxi Driver'
}

Details.prototype = {
    id: PropTypes.number,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    actors: PropTypes.array,
}

export default Details;