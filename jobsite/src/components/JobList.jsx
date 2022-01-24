import React from 'react'
import SingleJob from "./SingleJob"

const JobList = ({ jobs, fetchAllJobs }) => {
  return (
    <div>
      {jobs?.map((element) => (<SingleJob fetchAllJobs={fetchAllJobs} jobs={jobs} element={element} key={element._id} />))}
    </div>
  )
};

export default JobList
