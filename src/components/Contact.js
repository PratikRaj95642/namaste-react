const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="text" placeholder="Message" className="form-input" />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
