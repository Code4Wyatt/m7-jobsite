import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap'
import { addToFavouritesAction } from '../redux/actions/index.js'
import { useSelector, useDispatch } from "react-redux"
import {
  Heart,
  HeartFill,
} from "react-bootstrap-icons";


const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (company) => {
    dispatch(addToFavouritesAction(company))
  }
})

const Job = ({ data, addToFavourites }) => {
  const [job, setJob] = useState([])
  const [selected, setSelected] = useState(false)
  const [favourite, setFavourite] = useState(false)
  const jobData = useSelector(state => state.jobs.elements)
  const favourited = useSelector(state => state.favourites.elements)

 
  const dispatch = useDispatch()

  return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{data.company_name}</Card.Subtitle>
      <Card.Text>
      {data.publication_date}
      </Card.Text>
      <Card.Text href="#">{data.candidate_required_location}</Card.Text>
      <Card.Link href="/:job">View Job</Card.Link><Button onClick={() => dispatch(addToFavouritesAction(data))} className="ml-5" variant="primary">{favourited ? <HeartFill /> : <Heart />}</Button>
    </Card.Body>
  </Card> 
  )
}

export default Job