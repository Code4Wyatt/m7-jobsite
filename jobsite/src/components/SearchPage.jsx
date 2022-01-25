import React, { useState } from "react"
import { Form, Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import uniqid from "uniqid"
import Job from "../components/Job"

function SearchPage() {
  const [ query, setQuery ] = useState('')
  const [ jobs, setJobs ] = useState([])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.get('https://strive-jobs-api.herokuapp.com/jobs?search=' + query)

    if (!response.ok) {
      alert('No jobs found')
      return
    }

    const { data } = await response.json()
    setJobs(data)
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1>Search Remote Jobs</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit()}>
            <Form.Control type="search" value={query} onChange={handleChange()} placeholder="Enter role and press enter" />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {jobs?.map(job => <Job key={uniqid()} data={job} />)}
        </Col>
      </Row>
    </Container>
  );
}

export default SearchPage;
