import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'
import { fetchJobs } from "../redux/actions/index.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// const mapDispatchToProps = (dispatch) => ({
//     fetchJobs: (baseEndpoint, query) => dispatch(fetchJobs(baseEndpoint, query)),
//   });

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [jobs, setJobs] = useState([])
    const [selectedJob, setSelectedJob] = useState([])
    const params = useParams()
    
  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + query)
      const { data } = await response.json()
      
      setJobs(data)
      console.log("jobs: ", data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setSelectedJob(selectedJob)
    console.log(selectedJob)
  }, [selectedJob])

    // state = {
    //     query: '',
    //     jobs: []
    // }

    const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?title='


    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        getJobs()
        console.log(jobs)
    }


        return (
            <Container className="searchPage">
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Remote Jobs Search</h1>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="search" onChange={handleChange} value={query} placeholder="Type and press enter" />
                        </Form>
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            jobs.map((jobs) =>( <Job key={uniqid()} onChange={handleChange} data={jobs} />))
                        }
                    </Col>
                </Row>
            </Container>
        )
    }

export default SearchPage