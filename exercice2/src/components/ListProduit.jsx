import PropTypes from 'prop-types';
import './ListProduit.css'
const ListProduit = (props) => {
    const {produits} = props;


    if(produits)
    {
        const listProduits = produits.map(produit => (

            <li key={produit.id}>
                {produit.nom} 
                {produit.EnPromo && <span className='produitPromot'>  {produit.prix}</span>}
                {!produit.EnPromo && <span> {produit.prix}</span>} 
                {produit.EnPromo && <span>  En Promotion</span>}
            </li>
        ))
        return (
            <>
              
                <ul>
                    {listProduits}
                </ul>
            </>
        )
    }

}

ListProduit.propTypes = {
    
    listProduit: PropTypes.array
}

export default ListProduit;

