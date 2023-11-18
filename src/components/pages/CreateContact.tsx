
const CreateContact = () => {
  return (
    <div>
    <div className="container my-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <div className="card-body">
            <h2 className="text-center">Add Contacts</h2>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" className="form-control" placeholder="Enter Your First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" className="form-control" placeholder="Enter Your Last Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className="form-control" placeholder="Enter Your Email"/>
              </div>
              <button type="submit" className="btn btn-success my-2">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default CreateContact