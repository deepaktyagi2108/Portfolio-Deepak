import React from 'react'
import project from'./data/projects.json'

const Projects = () => {
  return (
    <section id="projects">
   <div className="container projects my-3">
<h1>PROJECTS</h1>
<div className="row d-flex justify-content-center align-content-center">
  {project.map((data)=>(
    <>
 <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-4 mx-3 '>
 <div className="card bg-dark text-light" style={{width:'18rem' ,border:'2px solid yellow',boxShadow:'5px 5px 10px 10px rgba(101, 175, 10, 0.5)',

 }}
  data-aos="flip-right"
  data-aos-duration="1000"
 >
  <div className="img d-flex justify-content-center align-content-center p-3">
  <img src={data.imageSrc} className="card-img-top" alt="..."
  style={{
    width:'250px',
    height:'200px',
    border:'5px solid rgb(255, 215, 0)',
    borderRadius:'10px'
  }}
  />
  </div>
 
  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.demo} className="btn btn-primary" target="_blank">Demo</a>
  </div>
</div>
  </div> 
  </>))}

</div>
   </div>
   </section>
  
  )
}

export default Projects