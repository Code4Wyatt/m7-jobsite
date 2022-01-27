import Button from "react-bootstrap/Button"
import { StarFill } from 'react-bootstrap-icons'
import { Col, Row } from "react-bootstrap"
import { connect } from 'react-redux'
import { removeFromFavouritesAction } from "../redux/actions/index.js"

const mapStateToProps = (state) => ({
  favourites: state.favourites.jobs
})

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourites: (index) => {
    console.log('Job removed: ', index)
    dispatch(removeFromFavouritesAction(index))
  }
})

const FavouritesPage = ({ favourites, removeFromFavourites, jobs}) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {jobs.map(f => (
          <li key={f} className="my-4">
                <StarFill onClick={() => removeFromFavourites(f)} />
                <span>{f}</span>
          </li>
        ))}
      </ul>
    </Col>
  </Row>
)

export default connect(s => s, mapDispatchToProps)(FavouritesPage)