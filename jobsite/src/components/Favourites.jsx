import Button from "react-bootstrap/Button"
import { StarFill } from 'react-bootstrap-icons'
import { Col, Row } from "react-bootstrap"
import { connect } from 'react-redux'
import { removeFromFavouritesAction } from "../redux/actions"

const mapStateToProps = (state) => ({
  favourites: state.favourites.jobs
})

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourites: (index) => {
    console.log('Job removed: ', index)
    dispatch(removeFromFavouritesAction(index))
  }
})

const FavouritesPage = ({ favourites, removeFromFavourites}) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {favourites.map((favourite, i) => (
          <li key={i} className="my-4">
                <StarFill onClick={() => removeFromFavourites(i)} />
                <span>{i}</span>
          </li>
        ))}
      </ul>
    </Col>
  </Row>
)

export default connect(s => s, mapDispatchToProps)(FavouritesPage)