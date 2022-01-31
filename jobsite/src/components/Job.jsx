import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap'
import { addToFavouritesAction, removeFromFavouritesAction } from '../redux/actions/index.js'
import { useSelector, useDispatch } from "react-redux"
import {
  Heart,
  HeartFill,
} from "react-bootstrap-icons"
import "../style/styles.css"

// const mapDispatchToProps = (dispatch) => ({
//   addToFavourites: (company) => {
//     dispatch(addToFavouritesAction(company))
//   }
// })

const Job = ({ data, addToFavourites }) => {

  const jobData = useSelector(state => state.jobs.elements)
  const favourited = useSelector(state => state.favourites.elements)

 
  const dispatch = useDispatch()

  return(
    <Card className="m-5">
            <Card.Header>{data.category}</Card.Header>
            <Card.Body>
              <Card.Title><h1>{data.title}</h1></Card.Title>
              <Card.Title>{data.company_name}</Card.Title>
              <Card.Text>
                {data.job_type}
              </Card.Text>
              <Card.Text>
                {data.publication_date}
              </Card.Text>
              {/* <Card.Text>
              <div dangerouslySetInnerHTML={{__html: data["description"]}}></div>
              </Card.Text> */}
              <Button variant="primary" className="mr-2">Apply</Button>
              <Button onClick={() => dispatch(addToFavouritesAction(data))} className="ml-5" variant="success">{favourited ? <HeartFill /> : <Heart />}</Button>
            </Card.Body>
          </Card>
  )
}

export default Job