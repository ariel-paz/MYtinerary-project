import './gal-style.css';
import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Others/documentation/img%20(136)-mini.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Others/documentation/img%20(137)-mini.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPage;

class Gallery extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div id="multi-item-example" class="carousel slide carousel-multi-item carousel-multi-item-2" data-ride="carousel">

              <div class="controls-top">
                <a class="black-text" href="#multi-item-example" data-slide="prev"><i class="fas fa-angle-left fa-3x pr-3"></i></a>
                <a class="black-text" href="#multi-item-example" data-slide="next"><i class="fas fa-angle-right fa-3x pl-3"></i></a>
              </div>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                </div>

                <div class="carousel-item">
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(26).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                </div>

                <div class="carousel-item">
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(64).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
            
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(59).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(63).jpg"
                        alt="Card image cap"/>
                    </div>
                  </div>
                </div>             
              </div>
            </div>
            </React.Fragment>
        )
    }
}
//export default Gallery;