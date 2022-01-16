import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''})

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})
    }
    const OnSubmit = (e) => {
        e.preventDefault()
        getFilter(form)


    }

    return (
        <div>
            <form>
              Name:  <input type="text" name={'name'} value={form.name} onChange={formHandler}/>
               Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/>
               Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/>
            <button onClick={OnSubmit}>Find Me</button>
            </form>
        </div>
    );
};

export default Form;