import React from 'react';
import male from '../img/male.png';
import ContactUsForm from './contactUsForm';

class ContactUs extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            btnClicked: false,
            data: {
                name: '',
                email: '',
                message: '',
            }
        };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(e) {
        let key = e.target.name;
        let data = this.state.data;
        data[key] = e.target.value;
        this.setState({data: data});
    }
    
    onSubmit(ev) {
        this.setState({btnClicked: true});
        ev.preventDefault();
        console.log(this.state.data);
    }
    
    render() {
        return (
            <section id="contact">
            <h2>Contact Me</h2>
            <div className="left col-40 text-center">
            <img src={male} />
            <p>Be this cool person</p>   
            </div>
            <div className="right col-60 text-left">
            {this.state.btnClicked ? (<h1>Thank You</h1>) : (<ContactUsForm data={this.state.data} onInputChange={this.onInputChange} onSubmit={this.onSubmit} />)}
            </div>
            <div className="clear"></div>      
            </section>
        );
    }
}

export default ContactUs;