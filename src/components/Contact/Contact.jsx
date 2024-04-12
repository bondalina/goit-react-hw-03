// import css from "./Contact.module.css";
const Contact = ({ contact: { id, name, number }, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
