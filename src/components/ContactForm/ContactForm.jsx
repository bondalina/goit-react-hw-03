// import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" name="username" />
        <label>Number</label>
        <input type="text" name="usernumber" />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
