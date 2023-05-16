import './index.scss';

function Contact() {
  const onSubmit = (response) => {
    console.log(response?.target?.elements[2]?.value);
  }
  return (
    <div className="contact-wrapper">
      <h1 id="contact">{`> `}Contact</h1>
      <form className="form-wrapper" onSubmit={onSubmit}>
        <div className="form-item">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="form-item">
          <label className="form-label">Message</label>
          <textarea rows="10" type="text" className="form-control" placeholder="Type your message here" />
        </div>
        <button className='form-btn' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact