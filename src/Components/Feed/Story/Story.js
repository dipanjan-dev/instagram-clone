import { Avatar } from '@mui/material'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

import './Story.css'

import StoryAPI from '../../../API/StoryAPI';

const Story = () => {

    function StoryLoop(data) {

        function Profilepicshow() {
            if (data.profile_pic == " ") {
                return (
                    <Avatar />
                );
            }
            else {
                return (
                    <Avatar src={data.profile_pic} />
                )
            }
        }
        return (
            <>
                <SwiperSlide>
                    <div className="story__wrap">
                        <div className="story__user">
                            {Profilepicshow()}
                        </div>
                        <div className="story__user__name">
                        <p>{data.username}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </>
        )

    }

    return (
        <div className='story'>
            <Swiper 
             slidesPerView={5}
             spaceBetween={2}
             pagination={{
               clickable: true,
             }}
            className="mySwiper">
                {StoryAPI.map(StoryLoop)}
            </Swiper>
        </div>
    )
}

export default Story