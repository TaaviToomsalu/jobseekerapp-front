import { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Available Jobs</h3>
      {jobs.length === 0 && <p>No jobs found</p>}
      {jobs.map(job => (
        <div key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.description}; {job.company}; {job.location}; {job.salary}; {job.jobType}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;