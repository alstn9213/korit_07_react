import { useState } from "react";

function MyForm4() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (event) => {
    alert(`Hello, ${firstName} ${lastName}`);
    event.preventDefault();
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name : </label>
        <input type="text" name="firstName" onChange={event=>setFirstName(event.target.value)} value={firstName}/>
        <br />
        <label>Last Name : </label>
        <input type="text" name="lastName" onChange={event=>setLastName(event.target.value)} value={lastName}/>
        <br />
        <label>Email : </label>
        <input type="text" name="email" onChange={event=>setEmail(event.target.value)} value={email}/>
        <br />
        <input type="submit" value='클릭하세요'/>
      </form>
    </>
  );
}

export default MyForm4