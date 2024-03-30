import { ImageList, ImageListItem } from "@mui/material"
import { useMediaQuery } from "react-responsive"

function About() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className="">
            {isTabletOrMobile && isPortrait &&
                <div className="mt-[85px]">
                    <div className="relative z-0">
                        <img src={require("../images/dsu_1.jpg")} className="w-full" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex justify-center items-center">
                            <div className="">
                                <div className="text-center">
                                    About Us
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 mx-10 text-xs">
                        Explore the endless possibilities at Dayananda Sagar University through our International Admissions program. Offering top-tier programs in Engineering, Business, Arts, and Health Sciences. Our vibrant campus in the heart of India awaits, providing global skills and a multicultural environment for your future success! Founded by Sri Dayananda Sagar in the 1960s, Dayananda Sagar Institutions shape students into professionals and conscientious citizens. Established in 2014 under the Karnataka State Act, Dayananda Sagar University meets the demand for high-quality higher education, inspired by its enduring legacy.
                    </div>
                    <div className="p-5">
                        <div className="bg-slate-100 rounded shadow-lg border">
                            <div className="flex flex-col gap-5 m-5 mt-10">
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="font-semibold flex justify-center">Our Mission</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center text-sm">
                                        To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.
                                    </div>
                                </div>
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="font-semibold flex justify-center">Our Vision</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center text-sm">
                                        To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.
                                    </div>
                                </div>
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="font-semibold flex justify-center">Our Values</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center text-sm">
                                        Excellence, Fairness, Leadership, Integrity and Transparency.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="flex justify-center text-center text-xl">Why choose us?</div>
                        <div className="flex justify-center text-center m-5 text-xs">
                            DSU is committed to the success of its international students, offering comprehensive support from visa assistance to career guidance. Our dedicated International Relations Office ensures a seamless integration into the vibrant DSU community, enriching your academic and personal journey.
                        </div>
                    </div>
                    <div className="relative z-0">
                        <img src={require('../images/l_a_dsu.jpeg')} className="w-full object-cover object-left-bottom h-[30vh]" alt="dsu-logo" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex justify-center items-center">
                            <div className="">
                                Life at DSU
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 mx-10 text-xs">
                        Nestled on 130 acres of scenic land, our main campus offers a serene, pollution-free environment away from the hustle and bustle of the city. Located in Harohalli, just 45 kilometres from Bengaluru city, this self-contained campus boasts modern, state-of-the-art infrastructure. Here, we cultivate a conducive setting for immersive learning, empowering you to become innovative thinkers, bold explorers, inspiring leaders, and groundbreaking researchers of tomorrow.
                    </div>
                    <div className="p-10">
                        <ImageList variant="quilted" cols={2} gap={8}>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_3.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_1.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_2.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_6.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_7.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_8.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_9.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_10.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_11.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_4.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_13.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_5.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                    </div>
                </div>
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="mt-[100px]">
                    <div className="relative z-0">
                        <img src={require("../images/dsu_1.jpg")} className="w-full" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex items-center">
                            <div className="ml-20 w-[40%]">
                                <div className="text-xl">
                                    About Us
                                </div>
                                <div className="mt-10 text-sm">
                                    Explore the endless possibilities at Dayananda Sagar University through our International Admissions program. Offering top-tier programs in Engineering, Business, Arts, and Health Sciences. Our vibrant campus in the heart of India awaits, providing global skills and a multicultural environment for your future success! Founded by Sri Dayananda Sagar in the 1960s, Dayananda Sagar Institutions shape students into professionals and conscientious citizens. Established in 2014 under the Karnataka State Act, Dayananda Sagar University meets the demand for high-quality higher education, inspired by its enduring legacy.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="bg-slate-100 rounded p-10 shadow-lg border">
                            <div className="grid grid-cols-3 gap-5 m-5 mt-10">
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="font-semibold flex justify-center">Our Mission</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center text-sm">
                                        To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.
                                    </div>
                                </div>
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="font-semibold flex justify-center">Our Vision</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center text-sm">
                                        To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.
                                    </div>
                                </div>
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="font-semibold flex justify-center">Our Values</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center text-sm">
                                        Excellence, Fairness, Leadership, Integrity and Transparency.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="flex justify-center text-center text-2xl">Why choose us?</div>
                        <div className="flex justify-center text-center m-10">
                            DSU is committed to the success of its international students, offering comprehensive support from visa assistance to career guidance. Our dedicated International Relations Office ensures a seamless integration into the vibrant DSU community, enriching your academic and personal journey.
                        </div>
                    </div>
                    <div className="relative z-0">
                        <img src={require('../images/l_a_dsu.jpeg')} className="w-full object-cover object-left-bottom h-[600px]" alt="dsu-logo" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex items-center">
                            <div className="grid grid-cols-2">
                                <div className="ml-20">
                                    <div className="text-3xl">
                                        Life at DSU
                                    </div>
                                    <div className="mt-10">
                                        Nestled on 130 acres of scenic land, our main campus offers a serene, pollution-free environment away from the hustle and bustle of the city. Located in Harohalli, just 45 kilometres from Bengaluru city, this self-contained campus boasts modern, state-of-the-art infrastructure. Here, we cultivate a conducive setting for immersive learning, empowering you to become innovative thinkers, bold explorers, inspiring leaders, and groundbreaking researchers of tomorrow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <ImageList variant="quilted" cols={3} gap={8}>
                            <ImageListItem cols={2} rows={2} >
                                <img
                                    src={require("../images/hostel_3.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_1.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_2.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_6.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={require("../images/hostel_7.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_8.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={require("../images/hostel_9.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_10.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_11.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_4.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={require("../images/hostel_13.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_5.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                    </div>
                </div>
            }
            {isDesktopOrLaptop &&
                <div className="mt-10">
                    <div className="relative z-0">
                        <img src={require("../images/dsu_1.jpg")} className="w-full" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex items-center">
                            <div className="ml-20 w-[40%]">
                                <div className="text-6xl">
                                    About Us
                                </div>
                                <div className="mt-10 text-lg">
                                    Explore the endless possibilities at Dayananda Sagar University through our International Admissions program. Offering top-tier programs in Engineering, Business, Arts, and Health Sciences. Our vibrant campus in the heart of India awaits, providing global skills and a multicultural environment for your future success! Founded by Sri Dayananda Sagar in the 1960s, Dayananda Sagar Institutions shape students into professionals and conscientious citizens. Established in 2014 under the Karnataka State Act, Dayananda Sagar University meets the demand for high-quality higher education, inspired by its enduring legacy.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="bg-slate-100 rounded p-10 shadow-lg border">
                            <div className="grid grid-cols-3 gap-5 m-5 mt-10">
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="text-xl font-semibold flex justify-center">Our Mission</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center">
                                        To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.
                                    </div>
                                </div>
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="text-xl font-semibold flex justify-center">Our Vision</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center">
                                        To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.
                                    </div>
                                </div>
                                <div className="border border-sky-600 rounded h-[300px] shadow-md bg-white">
                                    <div className="flex justify-center mt-2">
                                        <img src={require('../images/logo_small.svg').default} className="w-[80px]" alt="dsu-logo" />
                                    </div>
                                    <div className="text-xl font-semibold flex justify-center">Our Values</div>
                                    <div className="mt-3 mx-5 flex justify-center text-center">
                                        Excellence, Fairness, Leadership, Integrity and Transparency.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="flex justify-center text-center text-4xl">Why choose us?</div>
                        <div className="flex justify-center text-center text-xl mx-[20rem] m-10">
                            DSU is committed to the success of its international students, offering comprehensive support from visa assistance to career guidance. Our dedicated International Relations Office ensures a seamless integration into the vibrant DSU community, enriching your academic and personal journey.
                        </div>
                    </div>
                    <div className="relative z-0">
                        <img src={require('../images/l_a_dsu.jpeg')} className="w-full object-cover object-left-bottom h-[600px]" alt="dsu-logo" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex items-center">
                            <div className="grid grid-cols-2">
                                <div className="ml-20">
                                    <div className="text-6xl">
                                        Life at DSU
                                    </div>
                                    <div className="mt-10 text-lg">
                                        Nestled on 130 acres of scenic land, our main campus offers a serene, pollution-free environment away from the hustle and bustle of the city. Located in Harohalli, just 45 kilometres from Bengaluru city, this self-contained campus boasts modern, state-of-the-art infrastructure. Here, we cultivate a conducive setting for immersive learning, empowering you to become innovative thinkers, bold explorers, inspiring leaders, and groundbreaking researchers of tomorrow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <ImageList variant="quilted" cols={3} gap={8}>
                            <ImageListItem cols={2} rows={2} >
                                <img
                                    src={require("../images/hostel_3.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_1.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_2.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_6.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={require("../images/hostel_7.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_8.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={require("../images/hostel_9.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_10.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_11.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_4.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={require("../images/hostel_13.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={require("../images/hostel_5.jpeg")}
                                    alt={"hostel"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                    </div>
                </div>
            }
        </div>
    )
}

export default About