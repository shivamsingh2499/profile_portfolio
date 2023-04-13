import React from "react";
import "./Testimonial.css";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import ProfilePic1 from "../../img/profile1.jpg";
import ProfilePic2 from "../../img/profile2.jpg";
import ProfilePic3 from "../../img/profile3.jpg";
import ProfilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const clients = [
    {
      img: ProfilePic1,
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus dolorum officia optio, beatae voluptate et omnis libero assumenda accusantium, a, aspernatur ut architecto nemo  neque sint accusamus ratione saepe nam dicta ducimus, suscipit obcaecati molestias officia, exercitationem error quaerat. ",
    },
    {
    
      img: ProfilePic2,
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus dolorum officia optio, beatae voluptate et omnis libero assumenda accusantium, a, aspernatur ut architecto nemo  neque sint accusamus ratione saepe nam dicta ducimus, suscipit obcaecati molestias officia, exercitationem error quaerat. ",
    },
    {
      
      img: ProfilePic3,
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus dolorum officia optio, beatae voluptate et omnis libero assumenda accusantium, a, aspernatur ut architecto nemo  neque sint accusamus ratione saepe nam dicta ducimus, suscipit obcaecati molestias officia, exercitationem error quaerat. ",
    },
    {
      
      img: ProfilePic4,
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus dolorum officia optio, beatae voluptate et omnis libero assumenda accusantium, a, aspernatur ut architecto nemo  neque sint accusamus ratione saepe nam dicta ducimus, suscipit obcaecati molestias officia, exercitationem error quaerat. ",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper
        modules={[ Pagination ]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client,index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="Client profile" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
