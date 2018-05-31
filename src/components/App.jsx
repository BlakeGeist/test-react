import React from 'react';
import { Link } from 'react-router-dom';
import TestFormPage from './TestFormPage';
import Users from './Users';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let services = [
      {
        name: 'IT Consulting',
        icon: '',
        description: 'This is where the description of the service goes.'
      },
      {
        name: 'Network Security',
        icon: '',
        description: 'This is where the description of the service goes.'
      },
      {
        name: 'Hosted VoIP',
        icon: '',
        description: 'This is where the description of the service goes.'
      },
      {
        name: 'Office 365',
        icon: '',
        description: 'This is where the description of the service goes.'
      },
      {
        name: 'Managed IT Services',
        icon: '',
        description: 'This is where the description of the service goes.'
      },
      {
        name: 'Cloud Solutions',
        icon: '',
        description: 'This is where the description of the service goes.'
      },
      {
        name: 'Backup & Disaster Recovery',
        icon: '',
        description: 'This is where the description of the service goes.'
      },
      {
        name: 'Virtualization',
        icon: '',
        description: 'This is where the description of the service goes.'
      }
    ];
    return (
      <main className="">
        <section className="home-header">
          <div className="home-header-content content">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus mi. Proin laoreet placerat diam eu viverra. Pellentesque ac blandit ante. Aliquam erat volutpat. Aliquam elementum ligula quis lectus ullamcorper molestie. Sed sollicitudin nibh vel turpis ornare congue. Etiam porta consectetur dui, et.</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus mi. Proin laoreet placerat diam eu viverra. Pellentesque ac blandit ante. Aliquam erat volutpat. Aliquam elementum ligula</h3>
            <h4>Call For Information or Emergencies at <a href="tel:5038757464">(503) 875 7464</a></h4>
          </div>
        </section>
        <section className="why-choose-us">
          <div className="why-choose-us-content">
            <div className="why-choose-us-heading">Why Choose <strong>NAME</strong></div>
            <div className="why-choose-us-content">
              <div className="why-choose-us-content-image">iamge goes here</div>
              <div className="why-choose-us-content-text"><strong>This</strong> is where the about us content goes.</div>
            </div>
          </div>
        </section>
        <BuildServices services={services}/>
        <section className="about-portland">
          <div className="about-portland-content content">
            <div className="about-portland-content-text">
              <h2>About US - Lorem ipsum dolor sit amet</h2>
              <p>
                <strong>Mission Statement:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus mi. Proin laoreet placerat diam eu viverra. Pellentesque ac blandit ante. Aliquam erat volutpat. Aliquam elementum ligula quis lectus ullamcorper molestie. Sed sollicitudin nibh vel turpis ornare congue. Etiam porta consectetur dui, et fermentum libero vestibulum a. Fusce libero lorem, varius sed diam id, tincidunt vulputate tellus. Phasellus
                suscipit bibendum lacus et cursus. Curabitur non cursus elit, in varius dolor. Suspendisse id dignissim neque, vitae dapibus leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc venenatis aliquet felis, sed consequat tortor. Maecenas at condimentum arcu. Nam porttitor, tortor id congue sodales, massa tellus malesuada nisl, vel condimentum lorem nunc quis augue. Nullam sollicitudin
                urna id risus blandit molestie non eget ante.
              </p>
              <p>
                <strong>Message From the Owner:</strong> Morbi dignissim dolor sed interdum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque a nisi sodales, facilisis lectus nec, lacinia nisi. Donec malesuada sit amet tortor ac dictum. Duis tristique consectetur diam, condimentum suscipit nunc. Curabitur vitae ipsum in tortor faucibus lobortis quis ac augue. Sed sed quam eget enim scelerisque feugiat eu quis risus. Etiam
                in augue hendrerit, vulputate turpis et, blandit quam. Aenean hendrerit nisi nec libero dictum maximus. Morbi blandit, metus ut dictum blandit, mi nisl elementum ante, non molestie dui ex ut dui. Proin quis fermentum est, eget cursus lacus. Fusce urna tellus, congue in blandit sed, varius eu eros. Praesent vel enim vitae ligula rutrum mollis ac laoreet tellus. Donec sed leo id sapien vehicula convallis. Sed non urna aliquet,
                tincidunt ligula quis, pellentesque quam.
              </p>
              <p>
                <strong>What Portland means to us:</strong >Morbi dignissim dolor sed interdum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque a nisi sodales, facilisis lectus nec, lacinia nisi. Donec malesuada sit amet tortor ac dictum. Duis tristique consectetur diam, condimentum suscipit nunc. Curabitur vitae ipsum in tortor faucibus lobortis quis ac augue. Sed sed quam eget enim scelerisque feugiat eu quis risus. Etiam
              </p>
              <p className="align-right signiture">
                Morbi dignissim dolor
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

function BuildServices(props){
  var sections = [];
  for(var i = 0; props.services.length > i; i++){
    sections.push(<BuildService service={props.services[i]}/>)
  }
  return (
    <section className="services">
      <div className="services-content">{sections}</div>
    </section>
  );
}

function BuildService(props){
  return (
    <div className="services-service">
      <div className="services-service-icon">Icon Goes Here</div>
      <div className="services-service-heading">{props.service.name}</div>
      <div className="servies-services-description">{props.service.description}</div>
    </div>
  )
}

export default App;
