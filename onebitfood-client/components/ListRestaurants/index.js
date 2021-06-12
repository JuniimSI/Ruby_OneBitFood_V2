import {Row, Col} from 'react-bootstrap';
import Restaurant from './Restaurant';
import getRestaurants from '../../services/getRestaurants';

export default function ListRestaurants() {
  const {restaurants, isLoading, isError } = getRestaurants();  

  if(!restaurants)
    return null;

  return(
    <div className="mt-5">
      <h3 className="fw-bold mb-4">Restaurantes</h3>
      <Row>
        {restaurants.map((restaurant, i) => <Restaurant {...restaurant} key={i}/>)}
      </Row>
    </div>
  )
}