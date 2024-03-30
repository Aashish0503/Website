import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import { Link, useLocation, useParams } from "react-router-dom";

function NavBar(props: { scroll: any, mainRef: any }) {

    const path = useLocation().pathname

    useEffect(() => {
        setExpandMenu(false);
        setExpandLinks(false)
    }, [path])

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [expandMenu, setExpandMenu] = useState(false)
    const [expandLinks, setExpandLinks] = useState(false)

    var ref = useRef<any>();
    useEffect(() => {
        let handlerLeave = (e: any) => {
            if (ref.current) {
                if (!ref.current.contains(e.target)) {
                    setExpandMenu(false);
                    setExpandLinks(false);
                }
            }
        }
        document.addEventListener("mousedown", handlerLeave)
    })

    const useScrollDirection = (ref: any) => {
        const [scrollDirection, setScrollDirection] = useState('still');
        const prevScrollY = useRef(0);

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = ref.current.scrollTop;
                const direction = currentScrollY > prevScrollY.current ? 'down' : 'up';

                if (direction !== scrollDirection) {
                    setScrollDirection(direction);
                }

                prevScrollY.current = currentScrollY;
            };

            ref.current.addEventListener('scroll', handleScroll);

            return () => {
                ref.current.removeEventListener('scroll', handleScroll);
            };
        }, [ref]);

        return scrollDirection;
    };

    const direction = useScrollDirection(props.mainRef)

    const onClickExpandMenu = () => {
        setExpandMenu(!expandMenu)
        setExpandLinks(false)
    }

    const onClickExpandLinks = () => {
        setExpandLinks(!expandLinks)
        setExpandMenu(false)
    }

    return (
        <div className="bg-white w-full">
            {isTabletOrMobile && isPortrait &&
                <div ref={ref} className="h-fit p-2 w-screen shadow-md transition-all mr-[-5px]">
                    <div className="flex items-center justify-between">
                    <div className="">
    <img src={require('../images/logo.svg').default} className="w-40 sm:w-60 m-2" alt="dsu-logo" />
</div>
                    <div className="">
                        <img src={require('public\NAAC SVg.svg').default} className="w-40 sm:w-60 m-2"/>
</div>
                        <div className="flex items-center">
                            <div className="cursor-pointer rounded-full hover:bg-slate-100 p-2" onClick={onClickExpandLinks}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>

                            </div>
                            <div className="cursor-pointer rounded-full hover:bg-slate-100 p-2" onClick={onClickExpandMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-rows-6 overflow-hidden transition-all ${expandMenu ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <Link to={'/home'} onClick={props.scroll}><div className={`px-5 py-2 border-b ${path.includes('home') ? 'text-white bg-sky-600 rounded-lg' : ''} `}>Home</div></Link>
                        <Link to={'/about'} onClick={props.scroll}><div className={`px-5 py-2 border-b ${path.includes('about') ? 'text-white bg-sky-600 rounded-lg' : ''}`}>About</div></Link>
                        <Link to={'/schools'} onClick={props.scroll}><div className={`px-5 py-2 border-b ${path.includes('schools') ? 'text-white bg-sky-600 rounded-lg' : ''}`}>Schools</div></Link>
                        <Link to={"https://international-admissions.dsu.edu.in/"} target="_blank" rel="noopener noreferrer"><div className={`px-5 py-2 border-b ${path.includes('admissions') ? 'text-white bg-sky-600 rounded-lg' : ''}`}>Admissions</div></Link>
                        <div
  className={`px-5 py-2 border-b cursor-pointer ${
    path.includes('testimonials') ? 'text-white bg-sky-600 rounded-lg' : ''
  }`}
  onClick={() => {
    /* Handle tab functionality here */
  }}
>
  Testimonials
</div>


                        <div className="px-3 py-1">
                            <Link to={'/home'} target="_blank" rel="noopener noreferrer">
                                <button className="px-2 py-1 w-fit bg-sky-600 text-white rounded cursor-pointer">Apply Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className={`grid grid-rows-3 divide-y ease-in overflow-hidden transition-all ${expandLinks ? 'max-h-10' : 'max-h-0'}`}>
                        <div className="px-5 py-2 hover:bg-slate-100">
                            <div className="flex items-center justify-around gap-5">
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                                            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                                            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                                            <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
                                        </svg>
                                    </div>
                                    <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                                            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                                        </svg>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="h-fit p-2 w-screen shadow-md transition-all mr-[-5px]">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <img src={require('../images/logo.svg').default} className={`m-2 transition-all ${direction === 'down' ? 'w-28' : 'w-60'}`} alt="dsu-logo" />
                        </div>
                        <div className="">
                            <div className={`transition-all overflow-hidden flex justify-end ${direction === 'down' ? 'max-h-0' : 'max-h-64 text-white'}`}>
                                <div className="flex items-center justify-end mb-1 bg-sky-600 rounded-l-full w-[65vw]">
                                    <div className="px-4 py-2 hover:text-slate-300 cursor-pointer">
                                        <div className="flex justify-center items-center gap-5">
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                                                    </svg>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex justify-end items-center ease-in overflow-hidden transition-all max-[930px]:text-sm`}>
                                <Link to={'/home'} onClick={props.scroll}><div className={`px-2 py-2 hover:bg-slate-100 ${path.includes('home') ? 'border-b-2 border-blue-300' : ''} `}>Home</div></Link>
                                <Link to={'/about'} onClick={props.scroll}><div className={`px-2 py-2 hover:bg-slate-100 ${path.includes('about') ? 'border-b-2 border-blue-300' : ''}`}>About</div></Link>
                                <Link to={'/schools'} onClick={props.scroll}><div className={`px-2 py-2 hover:bg-slate-100 ${path.includes('schools') ? 'border-b-2 border-blue-300' : ''}`}>Schools</div></Link>
                                <Link to={"https://international-admissions.dsu.edu.in/"} target="_blank" rel="noopener noreferrer"><div className={`px-2 py-2 hover:bg-slate-100 ${path.includes('admissions') ? 'border-b-2 border-blue-300' : ''}`}>Admissions</div></Link>
                                <div
  className={`px-5 py-2 border-b cursor-pointer ${
    path.includes('testimonials') ? 'text-white bg-sky-600 rounded-lg' : ''
  }`}
  onClick={() => {
    /* Handle tab functionality here */
  }}
>
  Testimonials
</div>

                                <div className="">
                                    <Link to={'/home'} target="_blank" rel="noopener noreferrer">
                                        <button className="px-2 py-1 bg-sky-600 text-white rounded shadow-md cursor-pointer">Apply Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isDesktopOrLaptop &&
                <div className="h-fit p-2 w-screen shadow-md transition-all mr-[-5px]">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <img src={require('../images/logo.svg').default} className={`transition-all m-2 ${direction === 'down' ? 'w-28' : 'w-60'}`} alt="dsu-logo" />
                        </div>
                        <div className="">
                            <div className={`transition-all overflow-hidden flex justify-end ${direction === 'down' ? 'max-h-0' : 'max-h-64 text-white'}`}>
                                <div className="flex items-center justify-end mb-1 bg-sky-600 rounded-l-full w-[70vw]">
                                    <div className="px-4 py-2 hover:text-slate-300 cursor-pointer">
                                        <div className="flex justify-center items-center gap-5">
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
                                                    </svg>
                                                </div>
                                                <div className="transition-all hover:scale-[1.2] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                                                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                                                    </svg>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex items-center justify-end ease-in overflow-hidden transition-all`}>
                                <Link to={'/home'} onClick={props.scroll}><div className={`px-4 py-2 hover:bg-slate-100 ${path.includes('home') ? 'border-b-2 border-blue-300' : ''} `}>Home</div></Link>
                                <Link to={'/about'} onClick={props.scroll}><div className={`px-4 py-2 hover:bg-slate-100 ${path.includes('about') ? 'border-b-2 border-blue-300' : ''}`}>About</div></Link>
                                <Link to={'/schools'} onClick={props.scroll}><div className={`px-4 py-2 hover:bg-slate-100 ${path.includes('schools') ? 'border-b-2 border-blue-300' : ''}`}>Schools</div></Link>
                                <Link to={'/home'} target="_blank" rel="noopener noreferrer"><div className={`px-4 py-2 hover:bg-slate-100 ${path.includes('admissions') ? 'border-b-2 border-blue-300' : ''}`}>Admissions</div></Link>
                                <div
  className={`px-5 py-2 border-b cursor-pointer ${
    path.includes('testimonials') ? 'text-white bg-sky-600 rounded-lg' : ''
  }`}
  onClick={() => {
    /* Handle tab functionality here */
  }}
>
  Testimonials
</div>

                                <div className="px-2 py-1">
                                    <Link to={'/home'} target="_blank" rel="noopener noreferrer">
                                        <button className="px-2 py-1 bg-sky-600 hover:bg-sky-700 transition-all shadow-md text-white rounded cursor-pointer">Apply Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavBar