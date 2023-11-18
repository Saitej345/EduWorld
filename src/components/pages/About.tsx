import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Bootstrap from 'react-bootstrap'
const About = () => {
  return (
    <div>
      <NavBar/>
      <div className='container'>
      <div className="container mt-5">
        <div className="text-center">
                <h2>Get in Touch</h2>
        </div>
     </div>
     <div className="row justify-content-center my-5">
        <div className="col-lg-5">
            <div  >
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" placeholder="myexample@gmail.com" className="form-control"/>
                <label htmlFor="name" className="form-label"> Name:</label>
                <input type="name" id="name" placeholder="Enter Your Name" className="form-control"/>
                <label htmlFor="subject" className="form-label">Qualification</label>
                <select name="subject" id="subject" className="form-select">
                    <option value="BE">BE/B.Tech</option>
                    <option value="">B.com</option>
                    <option value="">Bsc</option>
                    <option value="">MBA</option>
                    <option value="">MCA</option>
                </select>
                <label htmlFor="query">Write Message</label>
                <textarea name="query" id="query" cols={20} rows={10} className="form-control"></textarea>
                <div className="text-center">
                   <button className="btn btn-primary mt-3">Submit</button>
                </div>
            </div>
        </div>
     </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About