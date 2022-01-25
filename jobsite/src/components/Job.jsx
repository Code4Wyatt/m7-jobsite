import React from 'react';
import { Card } from 'react-bootstrap'

const Job = ({ job }) => {
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{job.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
      <Card.Text>
      {job.publication_date}
      </Card.Text>
      <Card.Text href="#">{job.candidate_required_location}</Card.Text>
      <Card.Link href="/:job">View Job</Card.Link>
    </Card.Body>
  </Card>
      
 )
}

export default Job
