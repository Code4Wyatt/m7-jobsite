import Button from "react-bootstrap/Button";
import { StarFill } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavouritesAction } from "../redux/actions/index.js";
import { useState } from "react";

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
  const favourites = useSelector((state) => state.favourites.elements);
  const jobs = useSelector((state) => state.jobs.elements);

  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favourites.map((f) => (
            <li key={f} className="my-4">
              <StarFill onClick={() => dispatch(removeFromFavouritesAction(f))} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default FavouritesPage;
