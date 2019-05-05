import React from 'react';
import './App.css';
import avatar from './img/user.png';
import tools1 from './img/tools1.png';
import tools2 from './img/tools2.png';
import tools3 from './img/tools3.png';
import tools4 from './img/tools4.png';
import tools5 from './img/tools5.png';
import tools6 from './img/tools6.png';

import Header from './components/header';
import About from './components/about';
import Gallery from './components/gallery';
import ContactUs from './components/contactUs';
import Social from './components/social';
import Footer from './components/footer';

class App extends React.Component {
    render() {
      let images = [tools1, tools2, tools3, tools4, tools5, tools6]
        return (
            <div className="App">
                <div className="container">
                    <Header title="Learn React" job="Web Designer" avatar={avatar} />
                    <About />
                    <Gallery images={images} />
                    <ContactUs />
                    <Social />
                    <Footer />
                </div>
            </div>
        );
    }
}
  
export default App;
