import { useMediaQuery } from "react-responsive"

function Schools() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className="">
            {isTabletOrMobile && isPortrait &&
                <div className="mt-[85px]">
                    <div className="relative z-0">
                        <img src={require("../images/dsu_3.jpg")} className="w-full" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex justify-center items-center">
                            <div className="">
                                Our Programs
                            </div>
                        </div>
                    </div>
                    <div className="m-10 text-xs">
                        DSU presents a diverse array of undergraduate programs meticulously crafted to align with the dynamic needs of the global job market. Whether your passion lies in Engineering and Technology, Health Sciences, Commerce and Management, or Computer Applications, each program is intricately designed to foster innovation, practical expertise, and industry alignment. Our curriculum seamlessly blends hands-on experiential learning with theoretical foundations, equipping students with the skills and knowledge needed to excel in their desired professions.
                    </div>
                    <div className="">
                        <div className="p-5 bg-slate-100">
                            <div className="m-5">
                                <div className="flex justify-center">
                                    <img src={require("../images/s_engineering.jpg")} className=" h-[200px] object-cover rounded" />
                                </div>
                                <div className="text-lg mt-5 text-center">
                                    School of Engineering
                                </div>
                                <div className="text-xs mt-5">
                                    Step into a world of innovation at DSU's School of Engineering, established in 2015. Offering B.Tech, M.Tech, and research programs in cutting-edge fields like AI, Machine Learning, Data Science, Cyber Security, Robotics, and more. Our goal is to provide a world-class education, preparing students to be future leaders and problem solvers in engineering. Experience dynamic teaching, research, and a focus on sustainable, inclusive technology to make a difference in society.
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="m-5">
                                <div className="flex justify-center">
                                    <img src={require("../images/s_management.jpg")} className="rounded h-[200px] object-cover" />
                                </div>
                                <div className="">
                                    <div className="text-lg mt-5 text-center">
                                        School of Commerce & Management Studies
                                    </div>
                                    <div className="text-xs mt-5">
                                        Experience excellence in commerce and management education at Dayananda Sagar University, with a legacy of over five decades in delivering global-standard higher education. Our programs offer a rich learning environment, supported by top-class faculty and world-class infrastructure. Through innovative learning methods like case studies, role plays, internships, and guest lectures, we develop the managerial and leadership skills of our students, ensuring they're ready to excel in the competitive world of business.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-slate-100">
                            <div className="m-5">
                                <div className="flex justify-center">
                                    <img src={require("../images/s_nursing.jpg")} className="h-[200px] object-cover rounded" />
                                </div>
                                <div className="text-lg mt-5 text-center">
                                    School of Nursing
                                </div>
                                <div className="text-xs mt-5">
                                    Dayananda Sagar University's Nursing course prepares graduates to deliver high-quality, complex care to patients. Our program focuses on creating efficient, safe practitioners of international standards, providing a strong foundation in education, practice, research, innovation, and collaboration. With a vision to be a centre of excellence in nursing education, our College of Nursing Sciences aims to create exceptional human resources to meet global healthcare needs through interdisciplinary teaching and research.
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="m-5">
                                <div className="flex justify-center">
                                    <img src={require("../images/s_health.jpeg")} className="rounded h-[200px] object-cover object-right" />
                                </div>
                                <div className="">
                                    <div className="text-lg mt-5 text-center">
                                        School of Allied Science
                                    </div>
                                    <div className="text-xs mt-5">
                                        Join the dynamic field of Allied Health Science at Dayananda Sagar University, where you'll be part of India's booming healthcare sector. Our program prepares you to be a crucial part of the medical team, contributing expertise in preventive, curative, and rehabilitative care. Gain hands-on experience in technology-driven procedures and a solid foundation in global health issues, ethical considerations, evidence-based practice, and healthcare management. With the healthcare industry's rapid growth, Allied Health Science graduates are in high demand both nationally and internationally as Medical Technologists.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="">
                    <div className="relative z-0">
                        <img src={require("../images/dsu_3.jpg")} className="w-full" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex items-center">
                            <div className="ml-20 mt-20 w-[40%]">
                                <div className="text-xl">
                                    Our Programs
                                </div>
                                <div className="mt-10 text-sm">
                                    DSU presents a diverse array of undergraduate programs meticulously crafted to align with the dynamic needs of the global job market. Whether your passion lies in Engineering and Technology, Health Sciences, Commerce and Management, or Computer Applications, each program is intricately designed to foster innovation, practical expertise, and industry alignment. Our curriculum seamlessly blends hands-on experiential learning with theoretical foundations, equipping students with the skills and knowledge needed to excel in their desired professions.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-10">
                            <div className="grid grid-cols-2">
                                <div className="pr-5">
                                    <div className="text-xl">
                                        School of Engineering
                                    </div>
                                    <div className="text-sm mt-5">
                                        Step into a world of innovation at DSU's School of Engineering, established in 2015. Offering B.Tech, M.Tech, and research programs in cutting-edge fields like AI, Machine Learning, Data Science, Cyber Security, Robotics, and more. Our goal is to provide a world-class education, preparing students to be future leaders and problem solvers in engineering. Experience dynamic teaching, research, and a focus on sustainable, inclusive technology to make a difference in society.
                                    </div>
                                </div>
                                <div className="">
                                    <img src={require("../images/s_engineering.jpg")} className=" h-[300px] object-cover rounded w-[90%]" />
                                </div>
                            </div>
                        </div>
                        <div className="p-10 bg-slate-100">
                            <div className="grid grid-cols-2">
                                <div className="">
                                    <img src={require("../images/s_management.jpg")} className="rounded h-[300px] object-cover w-[90%]" />
                                </div>
                                <div className="">
                                    <div className="text-xl">
                                        School of Commerce & Management Studies
                                    </div>
                                    <div className="text-sm mt-5">
                                        Experience excellence in commerce and management education at Dayananda Sagar University, with a legacy of over five decades in delivering global-standard higher education. Our programs offer a rich learning environment, supported by top-class faculty and world-class infrastructure. Through innovative learning methods like case studies, role plays, internships, and guest lectures, we develop the managerial and leadership skills of our students, ensuring they're ready to excel in the competitive world of business.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10">
                            <div className="grid grid-cols-2">
                                <div className="pr-5">
                                    <div className="text-xl">
                                        School of Nursing
                                    </div>
                                    <div className="text-sm mt-5">
                                        Dayananda Sagar University's Nursing course prepares graduates to deliver high-quality, complex care to patients. Our program focuses on creating efficient, safe practitioners of international standards, providing a strong foundation in education, practice, research, innovation, and collaboration. With a vision to be a centre of excellence in nursing education, our College of Nursing Sciences aims to create exceptional human resources to meet global healthcare needs through interdisciplinary teaching and research.
                                    </div>
                                </div>
                                <div className="">
                                    <img src={require("../images/s_nursing.jpg")} className="h-[300px] object-cover rounded w-[90%]" />
                                </div>
                            </div>
                        </div>
                        <div className="p-10 bg-slate-100">
                            <div className="grid grid-cols-2">
                                <div className="">
                                    <img src={require("../images/s_health.jpeg")} className="rounded h-[300px] object-cover object-right w-[90%]" />
                                </div>
                                <div className="">
                                    <div className="text-xl">
                                        School of Allied Science
                                    </div>
                                    <div className="text-sm mt-5">
                                        Join the dynamic field of Allied Health Science at Dayananda Sagar University, where you'll be part of India's booming healthcare sector. Our program prepares you to be a crucial part of the medical team, contributing expertise in preventive, curative, and rehabilitative care. Gain hands-on experience in technology-driven procedures and a solid foundation in global health issues, ethical considerations, evidence-based practice, and healthcare management. With the healthcare industry's rapid growth, Allied Health Science graduates are in high demand both nationally and internationally as Medical Technologists.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isDesktopOrLaptop &&
                <div className="">
                    <div className="relative z-0">
                        <img src={require("../images/dsu_3.jpg")} className="w-full" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] opacity-90 w-full" />
                        <div className="absolute inset-0 z-20 text-white flex items-center">
                            <div className="ml-20 w-[40%]">
                                <div className="text-6xl">
                                    Our Programs
                                </div>
                                <div className="mt-10 text-lg">
                                    DSU presents a diverse array of undergraduate programs meticulously crafted to align with the dynamic needs of the global job market. Whether your passion lies in Engineering and Technology, Health Sciences, Commerce and Management, or Computer Applications, each program is intricately designed to foster innovation, practical expertise, and industry alignment. Our curriculum seamlessly blends hands-on experiential learning with theoretical foundations, equipping students with the skills and knowledge needed to excel in their desired professions.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-20">
                            <div className="grid grid-cols-2">
                                <div className="pr-10">
                                    <div className="text-4xl">
                                        School of Engineering
                                    </div>
                                    <div className="text-lg mt-10">
                                        Step into a world of innovation at DSU's School of Engineering, established in 2015. Offering B.Tech, M.Tech, and research programs in cutting-edge fields like AI, Machine Learning, Data Science, Cyber Security, Robotics, and more. Our goal is to provide a world-class education, preparing students to be future leaders and problem solvers in engineering. Experience dynamic teaching, research, and a focus on sustainable, inclusive technology to make a difference in society.
                                    </div>
                                </div>
                                <div className="">
                                    <img src={require("../images/s_engineering.jpg")} className="ml-10 h-[400px] object-cover rounded w-[90%]" />
                                </div>
                            </div>
                        </div>
                        <div className="p-20 bg-slate-100">
                            <div className="grid grid-cols-2">
                                <div className="">
                                    <img src={require("../images/s_management.jpg")} className="rounded h-[400px] object-cover w-[90%]" />
                                </div>
                                <div className="ml-10">
                                    <div className="text-4xl">
                                        School of Commerce & Management Studies
                                    </div>
                                    <div className="text-lg mt-10">
                                        Experience excellence in commerce and management education at Dayananda Sagar University, with a legacy of over five decades in delivering global-standard higher education. Our programs offer a rich learning environment, supported by top-class faculty and world-class infrastructure. Through innovative learning methods like case studies, role plays, internships, and guest lectures, we develop the managerial and leadership skills of our students, ensuring they're ready to excel in the competitive world of business.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-20">
                            <div className="grid grid-cols-2">
                                <div className="pr-10">
                                    <div className="text-4xl">
                                        School of Nursing
                                    </div>
                                    <div className="text-lg mt-10">
                                        Dayananda Sagar University's Nursing course prepares graduates to deliver high-quality, complex care to patients. Our program focuses on creating efficient, safe practitioners of international standards, providing a strong foundation in education, practice, research, innovation, and collaboration. With a vision to be a centre of excellence in nursing education, our College of Nursing Sciences aims to create exceptional human resources to meet global healthcare needs through interdisciplinary teaching and research.
                                    </div>
                                </div>
                                <div className="">
                                    <img src={require("../images/s_nursing.jpg")} className="ml-10 h-[400px] object-cover rounded w-[90%]" />
                                </div>
                            </div>
                        </div>
                        <div className="p-20 bg-slate-100">
                            <div className="grid grid-cols-2">
                                <div className="">
                                    <img src={require("../images/s_health.jpeg")} className="rounded h-[400px] object-cover object-right w-[90%]" />
                                </div>
                                <div className="ml-10">
                                    <div className="text-4xl">
                                        School of Allied Science
                                    </div>
                                    <div className="text-lg mt-10">
                                        Join the dynamic field of Allied Health Science at Dayananda Sagar University, where you'll be part of India's booming healthcare sector. Our program prepares you to be a crucial part of the medical team, contributing expertise in preventive, curative, and rehabilitative care. Gain hands-on experience in technology-driven procedures and a solid foundation in global health issues, ethical considerations, evidence-based practice, and healthcare management. With the healthcare industry's rapid growth, Allied Health Science graduates are in high demand both nationally and internationally as Medical Technologists.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Schools