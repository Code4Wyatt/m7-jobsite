import React from 'react'
import { useState, useEffect } from 'react'

const JobList = () => {
  const [ jobs, setJobs ] = useState([])

  const fetchAllJobs = async () => {
      
      try {
          let allJobs = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?limit=50`)
          if (allJobs.ok) {
              let jobs = await allJobs.json()
              setJobs(jobs)
          }
      } catch (error) {
          console.log(error)
      }
  }  

  useEffect(() => {
    fetchAllJobs()
  }, [])

  return (
  <>
  <div>f\sdf\sdf\sdfhjfgdfgjdghjdghjfgj</div>
  </>
  )
};

export default JobList
