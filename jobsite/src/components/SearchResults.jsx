import React from "react"
import Job from "../components/Job"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import uniqid from "uniqid"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
// const mapStateToProps = (s) => s

// const mapDispatchToProps = (dispatch) => ({
//   addToFavourites: (job) => dispatch(addToFav(job)),
//   removeFromFavourites: (job) => dispatch(removeFromFav)
// })
const SearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()
  const dispatch = useDispatch()

  const getJobs = async () => {
    try {
      const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?company=' + params.companyName)
      const { data } = await response.json()
      
      setJobs(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map(job => <Job key={uniqid} data={job}/>)}        
        </Col>
      </Row>
    </Container>
  )
}

export default SearchResults
