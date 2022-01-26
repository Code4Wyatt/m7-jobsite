import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { addToFavouritesAction } from '../redux/actions/index.js'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  username: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (company) => {
    dispatch(addToFavouritesAction(company))
  }
})

const Job = ({ data, addToFavourites, company }) => {
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{data.company_name}</Card.Subtitle>
      <Card.Text>
      {data.publication_date}
      </Card.Text>
      <Card.Text href="#">{data.candidate_required_location}</Card.Text>
      <Card.Link href="/:job">View Job</Card.Link><Button onClick={() => {addToFavourites(data)}} className="ml-5" variant="primary">✰</Button>
    </Card.Body>
  </Card>
      
 )
}

export default connect(mapStateToProps, mapDispatchToProps)(Job)
