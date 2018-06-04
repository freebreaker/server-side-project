import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";

// import "./carousel.css"

class BannerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['', '', ''],
      imgHeight: 176,
    };
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [carousel1, carousel2, carousel3],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite={true}
          selectedIndex={1}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a
              key={ii}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                src={`${ii}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}

export default BannerCarousel