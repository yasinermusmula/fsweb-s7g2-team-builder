import { useState } from "react";

const initialMember = {
  name: "",
  surname: "",
  departmant: "",
  age: null,
};
const Form = (props) => {
  const { addmember } = props;

  const [member, setMember] = useState(initialMember);

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addmember(member);
    setMember(initialMember);
  };

  return (
    <div className="form-container">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={member.surname}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Departmant:
          <input
            type="text"
            name="departmant"
            value={member.departmant}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={member.age}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
