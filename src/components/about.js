import React, { Component } from 'react';
import Drew from "./Drew.jpg";

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var profilepic= "images/" +this.props.data.image;
      var profilepic= "Drew.jpg";
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={Drew} alt="Drew's photo" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <h3>{bio}</h3>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <h1 className="address">
						   <span>{name}</span><br />
						   <span>{city}<br />
						         {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href="mailto:dehaven7777@gmail.com">{email}</a></span>
					   </h1>
               </div>
               <div className="columns download">
                  <h2>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </h2>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;