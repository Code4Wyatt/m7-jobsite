import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { removeFromFavouritesAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  favourites: state.favourites.companies
})

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourites: (index) => {
    console.log('Company index is', index)
    dispatch(removeFromFavouritesAction(index))
  }
})

const FavouritesPage = ({ companies, removeFromFavourites }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {companies.map((company, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromFavourites(i)}>
              <FaTrash />
            </Button>
            {company.title}
          </li>
        ))}
      </ul>
    </Col>
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);