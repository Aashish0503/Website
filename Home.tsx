import { useState } from "react"
import { useMediaQuery } from "react-responsive"

import { Carousel } from 'flowbite-react';
import { IconButton, ImageList, ImageListItem, Snackbar } from "@mui/material";
import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import Form from "../components/Form";

function Home() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [snackOpen, setSnackOpen] = useState(true)

    return (
        <div className="">
            <Snackbar
                open={snackOpen}
                autoHideDuration={3000}
                onClose={() => { setSnackOpen(false) }}
                message={
                    <div className="flex items-center">
                        <span style={{ marginRight: '2px' }}>Admissions are open for the 2024 session. Apply now! Hurry up and avail a 40% scholarship.</span>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => { setSnackOpen(false) }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </div>
                }
                ContentProps={{
                    sx: {
                        fontSize: "15px",
                        width: "60%"
                    }
                }}
            />
            {isTabletOrMobile && isPortrait &&
                <div className="mt-[85px]">
                    <div className="">
                        <Carousel pauseOnHover indicators={false}>
                            <div className="w-full h-[50vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_1.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[50vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[80px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[80px] text-white flex p-10 items-center" >
                                    <div className="">
                                        <div className="text-xs">India is inviting you</div>
                                        <div className="text-xs">Admission is open for 2024 Dayananda Sagar University extends invitations to students from across the globe.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[50vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_2.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[50vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[80px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[80px] text-white flex p-10 items-center" >
                                    <div className="">
                                        <div className="text-xs"></div>
                                        <div className="text-xs">Engage with a vibrant academic community bustling with diverse ideas, collaborations, and opportunities for growth and exploration.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[50vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_3.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[50vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[80px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[80px] text-white flex p-10 items-center" >
                                    <div className="">
                                        <div className="text-xs"></div>
                                        <div className="text-xs">The university boasts state-of-the-art classrooms, equipped with the latest technology and amenities to enhance the learning experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[50vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_4.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[50vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[80px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[80px] text-white flex p-10 items-center" >
                                    <div className="">
                                        <div className="text-xs"></div>
                                        <div className="text-xs">Embark on a journey of academic excellence like never before, immersed in a dynamic global environment that broadens your horizons.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="p-10 bg-slate-100">
                        <div className="text-lg text-center">
                            Embark on a Journey of Academic Excellence and Innovation at Our Multidisciplinary University
                        </div>
                        <div className="mt-10">
                            <div className="">
                                <video src={require("../images/dsu_no_audio.mp4")} autoPlay loop muted className="w-full rounded object-cover" />
                            </div>
                            <div className="mt-10">
                                <div className="text-xs">
                                    Experience the epitome of academic excellence at our truly multidisciplinary and interdisciplinary university, where innovation thrives and students are encouraged to grow, excel, invent, and innovate. With a vibrant community boasting over 50,000 alumni, on-campus hostel facilities, and an emphasis on interactive learning, our institution fosters a dynamic environment for personal and professional development. Our state-of-the-art infrastructure supports cutting-edge research and technology, providing unparalleled opportunities for students to engage in groundbreaking discoveries. Recognized as a premium university for placement and internship opportunities, we offer a new world of academic excellence within a global environment, shaping the leaders of tomorrow.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="text-center text-2xl">
                            Innovation Centers
                        </div>
                        <div className="mt-10">
                            <ImageList variant="masonry" cols={1} gap={10}>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_2.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_4.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_5.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_6.png")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_7.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_8.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_3.png")}
                                        alt={"hostel"}
                                        loading="lazy"
                                        className="w-[100px]"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_1.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_9.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </ImageList>
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="mt-[100px]">
                    <div className="">
                        <Carousel pauseOnHover>
                            <div className="w-full h-[80vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_1.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[80vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[100px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[100px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-sm">India is inviting you</div>
                                        <div className="text-sm">Admission is open for 2024 Dayananda Sagar University extends invitations to students from across the globe.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[80vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_2.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[80vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[100px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[100px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-sm"></div>
                                        <div className="text-sm">Engage with a vibrant academic community bustling with diverse ideas, collaborations, and opportunities for growth and exploration.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[80vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_3.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[80vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[100px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[100px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-sm"></div>
                                        <div className="text-sm">The university boasts state-of-the-art classrooms, equipped with the latest technology and amenities to enhance the learning experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[80vh] relative z-0">
                                <img
                                    src={require("../images/home_slide_4.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-[80vh]"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[100px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[100px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-sm"></div>
                                        <div className="text-sm">Embark on a journey of academic excellence like never before, immersed in a dynamic global environment that broadens your horizons.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="p-10 bg-slate-100">
                        <div className="text-2xl text-center">
                            Embark on a Journey of Academic Excellence and Innovation at Our Multidisciplinary University
                        </div>
                        <div className="grid grid-cols-2 mt-10">
                            <div className="">
                                <video src={require("../images/dsu_no_audio.mp4")} autoPlay loop muted className="w-full rounded object-cover" />
                            </div>
                            <div className="ml-10">
                                <div className="text-sm">
                                    Experience the epitome of academic excellence at our truly multidisciplinary and interdisciplinary university, where innovation thrives and students are encouraged to grow, excel, invent, and innovate. With a vibrant community boasting over 50,000 alumni, on-campus hostel facilities, and an emphasis on interactive learning, our institution fosters a dynamic environment for personal and professional development. Our state-of-the-art infrastructure supports cutting-edge research and technology, providing unparalleled opportunities for students to engage in groundbreaking discoveries. Recognized as a premium university for placement and internship opportunities, we offer a new world of academic excellence within a global environment, shaping the leaders of tomorrow.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="text-center text-2xl">
                            Innovation Centers
                        </div>
                        <div className="mt-10">
                            <ImageList variant="masonry" cols={3} gap={10}>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_2.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_4.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_5.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_6.png")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_7.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_8.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_3.png")}
                                        alt={"hostel"}
                                        loading="lazy"
                                        className="w-[100px]"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_1.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_9.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </ImageList>
                        </div>
                    </div>
                </div>
            }
            {isDesktopOrLaptop &&
                <div className="mt-[100px]">
                    <div className="h-[680px] relative z-0">
                        <Carousel pauseOnHover>
                            <div className="w-full h-full relative z-0">
                                <img
                                    src={require("../images/home_slide_1.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[200px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[200px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-lg">India is inviting you</div>
                                        <div className="text-lg">Admission is open for 2024 Dayananda Sagar University extends invitations to students from across the globe.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full relative z-0">
                                <img
                                    src={require("../images/home_slide_2.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[200px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[200px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-lg"></div>
                                        <div className="text-lg">Engage with a vibrant academic community bustling with diverse ideas, collaborations, and opportunities for growth and exploration.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full relative z-0">
                                <img
                                    src={require("../images/home_slide_3.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[200px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[200px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-lg"></div>
                                        <div className="text-lg">The university boasts state-of-the-art classrooms, equipped with the latest technology and amenities to enhance the learning experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full relative z-0">
                                <img
                                    src={require("../images/home_slide_4.jpg")}
                                    alt={"home"}
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 z-10 bg-[#000000] opacity-60 w-full h-[200px]" />
                                <div className="absolute bottom-0 z-20 w-full h-[200px] text-white flex p-10 items-center" >
                                    <div className="w-[50%] mr-10">
                                        <div className="text-lg"></div>
                                        <div className="text-lg">Embark on a journey of academic excellence like never before, immersed in a dynamic global environment that broadens your horizons.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <Form />
                        </div>
                    </div>
                    <div className="p-20 bg-slate-100">
                        <div className="text-4xl text-center">
                            Embark on a Journey of Academic Excellence and Innovation at Our Multidisciplinary University
                        </div>
                        <div className="grid grid-cols-2 mt-10">
                            <div className="">
                                <video src={require("../images/dsu_no_audio.mp4")} autoPlay loop muted className="w-full rounded object-cover" />
                            </div>
                            <div className="ml-10">
                                <div className="text-lg">
                                    Experience the epitome of academic excellence at our truly multidisciplinary and interdisciplinary university, where innovation thrives and students are encouraged to grow, excel, invent, and innovate. With a vibrant community boasting over 50,000 alumni, on-campus hostel facilities, and an emphasis on interactive learning, our institution fosters a dynamic environment for personal and professional development. Our state-of-the-art infrastructure supports cutting-edge research and technology, providing unparalleled opportunities for students to engage in groundbreaking discoveries. Recognized as a premium university for placement and internship opportunities, we offer a new world of academic excellence within a global environment, shaping the leaders of tomorrow.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="text-center text-4xl">
                            Innovation Centers
                        </div>
                        <div className="mt-10">
                            <ImageList variant="masonry" cols={3} gap={10}>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_2.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_4.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_5.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_6.png")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_7.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_8.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_3.png")}
                                        alt={"hostel"}
                                        loading="lazy"
                                        className="w-[100px]"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_1.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={require("../images/ino_9.jpg")}
                                        alt={"hostel"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </ImageList>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home