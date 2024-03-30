import { useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';

function Footer(props: { scroll: any, mainRef: any }) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className="">
            {isTabletOrMobile && isPortrait &&
                <div className="">
                    <div className="bg-sky-950 text-white p-10">
                        <div className="w-full flex justify-center">
                            <img src={require('../images/logo_white.png')} className={`transition-all w-40`} alt="dsu-logo" />
                        </div>
                        <div className="mt-10">
                            <div className="">
                                <Link to="https://maps.app.goo.gl/6UCnuoXYvBqZNH4H7" target="_blank" rel="noopener noreferrer">
                                    <div className="cursor-pointer hover:text-slate-300">
                                        <span className="text-xs">Dayananda Sagar University City Campus</span>
                                        <br />
                                        <span className="text-xs">Hosur Rd, Kudlu Gate,
                                            Srinivasa Nagar, Hal Layout,
                                            Singasandra,
                                            Karnataka <br />
                                            Bengaluru 560068</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-10">
                                <Link to="https://maps.app.goo.gl/Cgx9HVJcFHPt33wE8" target="_blank" rel="noopener noreferrer">
                                    <div className="cursor-pointer hover:text-slate-300">
                                        <span className="text-xs">DSU Main Campus</span>
                                        <br />
                                        <span className="text-xs">Devarakaggalahalli, Harohalli,
                                            Kanakapura Road, Ramanagara Dt., <br />
                                            Bengaluru 562112</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-10">
                                <Link to="https://maps.app.goo.gl/A9i4Bynv6QvYrWjn8" target="_blank" rel="noopener noreferrer">
                                    <div className="cursor-pointer hover:text-slate-300">
                                        <span className="text-xs"> Dayananda Sagar University
                                            Main Campus</span>
                                        <br />
                                        <span className="text-xs"> Shavige Malleshwara Hills,
                                            1st Stage, Kumaraswamy
                                            Layout, Karnataka, <br />
                                            Bengaluru 560078</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-col text-center justify-center mt-10">
                                <Link to={'/home'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Home</div></Link>
                                <Link to={'/about'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">About</div></Link>
                                <Link to={'/schools'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Schools</div></Link>
                                <Link to={'/admissions'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Admissions</div></Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5 mt-10">
                            <Link to={"mailto:international-admissions@dsu.edu.in"} >
                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                    <EmailRoundedIcon />
                                </div>
                            </Link>
                            <Link to={"tel:+080 24496999"} >
                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                    <PhoneRoundedIcon />
                                </div>
                            </Link>
                            <Link to={"tel:+91 9606022150"} >
                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                    <SmartphoneRoundedIcon fontSize="small" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center gap-5 mt-5">
                            <div className="flex justify-center items-center gap-5">
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                                        </svg>
                                    </div>
                            </div>
                        </div>
                        <div className="mb-[-30px] text-xs text-center mt-10">
                            Copyright © 2024 DSU. All Rights Reserved
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="">
                    <div className="bg-sky-950 text-white p-10">
                        <img src={require('../images/logo_white.png')} className={`transition-all w-40`} alt="dsu-logo" />
                        <div className="grid grid-cols-4 mt-10">
                            <div className="mr-10">
                                <Link to="https://maps.app.goo.gl/6UCnuoXYvBqZNH4H7" target="_blank" rel="noopener noreferrer">
                                    <div className="cursor-pointer hover:text-slate-300">
                                        <span className="text-sm">Dayananda Sagar University City Campus</span>
                                        <br />
                                        <span className="text-xs">Hosur Rd, Kudlu Gate,
                                            Srinivasa Nagar, Hal Layout,
                                            Singasandra,
                                            Karnataka <br />
                                            Bengaluru 560068</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="mr-10">
                                <Link to="https://maps.app.goo.gl/Cgx9HVJcFHPt33wE8" target="_blank" rel="noopener noreferrer">
                                    <div className="cursor-pointer hover:text-slate-300">
                                        <span className="text-sm">DSU Main Campus</span>
                                        <br />
                                        <span className="text-xs">Devarakaggalahalli, Harohalli,
                                            Kanakapura Road, Ramanagara Dt., <br />
                                            Bengaluru 562112</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="mr-10">
                                <Link to="https://maps.app.goo.gl/A9i4Bynv6QvYrWjn8" target="_blank" rel="noopener noreferrer">
                                    <div className="cursor-pointer hover:text-slate-300">
                                        <span className="text-sm"> Dayananda Sagar University
                                            Main Campus</span>
                                        <br />
                                        <span className="text-xs"> Shavige Malleshwara Hills,
                                            1st Stage, Kumaraswamy
                                            Layout, Karnataka, <br />
                                            Bengaluru 560078</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <div className="">
                                    <Link to={'/home'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Home</div></Link>
                                    <Link to={'/about'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">About</div></Link>
                                    <Link to={'/schools'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Schools</div></Link>
                                    <Link to={'/admissions'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Admissions</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items center mt-14 mb-5">
                            <div className="flex justify-center items-center gap-5">
                                <Link to={"mailto:international-admissions@dsu.edu.in"} >
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <EmailRoundedIcon />
                                    </div>
                                </Link>
                                <Link to={"tel:+080 24496999"} >
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <PhoneRoundedIcon />
                                    </div>
                                </Link>
                                <Link to={"tel:+91 9606022150"} >
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <SmartphoneRoundedIcon fontSize="small" />
                                    </div>
                                </Link>
                            </div>
                            <div className="flex items-center gap-5 mr-20">
                                <div className="text-sm">Follow us on social media</div>
                                <div className="flex justify-center items-center gap-5">
                                        <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                                            </svg>
                                        </div>
        
                                        <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                            </svg>
                                        </div>
                                        <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                            </svg>
                                        </div>
                                        <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                                            </svg>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[-30px] text-sm">
                            Copyright © 2024 DSU. All Rights Reserved
                        </div>
                    </div>
                </div>
            }
            {isDesktopOrLaptop &&
                <div className="bg-sky-950 text-white p-10">
                    <img src={require('../images/logo_white.png')} className={`transition-all w-60`} alt="dsu-logo" />
                    <div className="grid grid-cols-4 mt-10">
                        <div className="mr-10">
                            <Link to="https://maps.app.goo.gl/6UCnuoXYvBqZNH4H7" target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer hover:text-slate-300">
                                    <span className="">Dayananda Sagar University City Campus</span>
                                    <br />
                                    <span className="text-sm">Hosur Rd, Kudlu Gate,
                                        Srinivasa Nagar, Hal Layout,
                                        Singasandra,
                                        Karnataka <br />
                                        Bengaluru 560068</span>
                                </div>
                            </Link>
                        </div>
                        <div className="mr-10">
                            <Link to="https://maps.app.goo.gl/Cgx9HVJcFHPt33wE8" target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer hover:text-slate-300">
                                    <span className="">DSU Main Campus</span>
                                    <br />
                                    <span className="text-sm">Devarakaggalahalli, Harohalli,
                                        Kanakapura Road, Ramanagara Dt., <br />
                                        Bengaluru 562112</span>
                                </div>
                            </Link>
                        </div>
                        <div className="mr-10">
                            <Link to="https://maps.app.goo.gl/A9i4Bynv6QvYrWjn8" target="_blank" rel="noopener noreferrer">
                                <div className="cursor-pointer hover:text-slate-300">
                                    <span className=""> Dayananda Sagar University
                                        Main Campus</span>
                                    <br />
                                    <span className="text-sm"> Shavige Malleshwara Hills,
                                        1st Stage, Kumaraswamy
                                        Layout, Karnataka, <br />
                                        Bengaluru 560078</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-lg">
                                <Link to={'/home'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Home</div></Link>
                                <Link to={'/about'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">About</div></Link>
                                <Link to={'/schools'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Schools</div></Link>
                                <Link to={'/admissions'} onClick={props.scroll}><div className="m-2 cursor-pointer hover:text-slate-300">Admissions</div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items center mt-14 mb-5">
                        <div className="flex justify-center items-center gap-5">
                            <Link to={"mailto:international-admissions@dsu.edu.in"} >
                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                    <EmailRoundedIcon />
                                </div>
                            </Link>
                            <Link to={"tel:+080 24496999"} >
                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                    <PhoneRoundedIcon />
                                </div>
                            </Link>
                            <Link to={"tel:+91 9606022150"} >
                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                    <SmartphoneRoundedIcon fontSize="small" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-5 mr-20">
                            <div className="">Follow us on social media</div>
                            <div className="flex justify-center items-center gap-5">
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                                        </svg>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[-30px]">
                        Copyright © 2024 DSU. All Rights Reserved
                    </div>
                </div>
            }
        </div >
    )
}

export default Footer