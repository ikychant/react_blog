import React from 'react';

const ContactUsForm = ({data, onInputChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onInputChange} type="text" name="name" placeholder="Your Name" value={data.name} />
            <input onChange={onInputChange} type="email" name="email" placeholder="Your Email" value={data.email} />
            <textarea onChange={onInputChange} name="message" placeholder="Say Something" value={data.message} />
            <button className="btn"type="submit">Send</button>
        </form>
    );
};

export default ContactUsForm;