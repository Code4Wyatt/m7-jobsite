import Button from "react-bootstrap/Button"
import { StarFill } from "react-bootstrap-icons"
import { Col, Row, Card } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { removeFromFavouritesAction } from "../redux/actions/index.js"
import { useState } from "react"
import "../style/styles.css"

// const mapStateToProps = (state) => ({
//   favourites: state.favourites.elements
// })

// const mapDispatchToProps = (dispatch) => ({
//     removeFromFavourites: (index) => {
//     console.log('Job removed: ', index)
//     dispatch(removeFromFavouritesAction(index))
//   }
// })

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.elements)

  console.log(favourites)

  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favourites.map((favourite, i) => (
            <Card>
            <Card.Header>{favourite.category}</Card.Header>
            <Card.Body>
              <Card.Title>{favourite.title}</Card.Title>
              <Card.Text>
                {favourite.job_type}
              </Card.Text>
              <Card.Text>
                {favourite.publication_date}
              </Card.Text>
              <Card.Text>
              <div dangerouslySetInnerHTML={{__html: favourite["description"]}}></div>
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>


            // <li key={i} className="my-4 favourite">
            //   <StarFill onClick={() => dispatch(removeFromFavouritesAction(favourite))} />
            //   <span>{favourite.title}</span>
            //   <span>{favourite.company_name}</span>
            // </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default FavouritesPage
