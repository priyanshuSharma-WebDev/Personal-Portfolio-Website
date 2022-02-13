import React,{useState} from 'react'
import {FiGithub, FiLink} from "react-icons/fi"
import {IconContext} from 'react-icons'
import SearchBar from './Search/Search.jsx'
import FilterBtn from './Filter/Filter.jsx'
import Search from "../../Assets/icons/search.svg"
import img1 from "../../Assets/images/img1.jpg"
import img2 from "../../Assets/images/img2.jpg"
import img3 from "../../Assets/images/img3.jpg"
import img4 from "../../Assets/images/img4.jpg"
import img5 from "../../Assets/images/img5.jpg"
import img6 from "../../Assets/images/img6.jpg"
import "./Work.css"


export default function Work() {


    const [searchComp, setSearchComp] = useState(false)
    const [opacity, setOpacity] = useState(false)
    const [card1, setCard1] = useState(false)
    const [card2, setCard2] = useState(false)
    const [card3, setCard3] = useState(false)
    const [card4, setCard4] = useState(false)
    const [card5, setCard5] = useState(false)
    const [card6, setCard6] = useState(false)






    const handleSearchComponent = () => {
        setSearchComp(!searchComp)
    } 


    return (
      <div className='w-full flow-root h-screen lg:mt-20'>
        <div className="relative text-txt-primary-dark-bg flex flex-col w-full justify-between items-center 400:mt-32  mx-auto z-10 sm:flex-row sm:items-center sm:justify-between sm:w-10/12 lg:w-8/12">
          <h1 className={` custom-animation ${searchComp && "active"} font-primaryHeading relative before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:transform before:-translate-x-2/4 before:w-11/12 max-w-16rem before:h-1 before:bg-background-secondary-accent-color before:rounded-full text-base leading-5 text-center mb-8  normal:text-lg normal:before:w-full sm:text-2xl sm:before:h-2 sm:before:-bottom-4 sm:before:left-60 sm:mb-0 sm:max-w-128`}>Project, that I've worked on -</h1>
                <div className="actions flex">
                    <img onClick={handleSearchComponent} className={`${searchComp && "active"} w-6 custom-animation hover:opacity-60  cursor-pointer`} src={Search}  alt="search btn" />
                  <FilterBtn searchComp={searchComp} />
                </div>
                <SearchBar searchComp={searchComp} handleSearchComponent={handleSearchComponent} />
            </div>
            <div className="projects  w-8/12 mx-auto mt-4 tiny:mt-8 normal:mt-10 fit:mt-14  pb-8 tiny:w-full  tiny:px-4 fit:px-6 sm:px-8 lg:max-w-76rem" >
                <div onMouseEnter={() => {
                    setCard1(true)
                }} onMouseLeave={() => {
                    setCard1(false)
                }} className="w-full h-full  mx-auto relative overflow-hidden">
                    <img className="opacity-80" src={img1} alt="project 1" />
                    <div className={` ${true ? "projects-overlay": "hide-project-overlay"} absolute top-0 left-0 bottom-0 right-0   flex flex-col justify-between`}>
                        <h1 className=" tiny:mt-4 tiny:mr-4 normal:mt-6 normal:mr-6 fit:mt-8 fit:mr-8 sm:mt-12 sm:mr-12 md:mt-8 md:mr-8 lg:mt-12 lg:mr-12">01</h1>
                        <div className="h-full  w-52 ml-6 pt-4 normal:w-72 normal:ml-8 fit:ml-12 tempScreen:w-96 tempScreen:pt-8 tempScreen:ml-12">
                            <h2 className="font-primaryHeading text-txt-primary-dark-bg/80 text-xl normal:text-3xl tempScreen:text-4xl">Bug Traker - A project to track and solve bugs.</h2>
                            <p className="text-tiny my-4 text-txt-primary-dark-bg/50 fit:text-base fit:my-6 fit:leading-5 sm:my-8">Reactjs / Nodejs / MongoDB / RestAPI</p>
                            <button className="mr-4 tempScreen:mr-8 cursor-pointer">
                              <IconContext.Provider
                                  value={{ className: 'text-txt-primary-dark-bg opacity-60 w-5 h-5 fit:w-6 fit:h-6 ' }}
                              >
                                    <FiGithub />
                              </IconContext.Provider>
                            </button>
                            <button className="cursor-pointer">
                              <IconContext.Provider
                                value={{ className: 'text-txt-primary-dark-bg opacity-60 w-5 h-5  fit:w-6 fit:h-6' }}
                              >
                                    <FiLink />
                              </IconContext.Provider>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full mx-auto relative overflow-hidden">
                    <img className="opacity-80" src={img2} alt="tu tu tu" />
                    <div className={`projects-overlay absolute top-0 left-0 bottom-0 right-0 hide-project-overlay hover:bg-background-secondary-dark-color/80`}>
                        <h1>02</h1>
                        <div className="w-96 mt-20 ml-14">
                            <h2 className="font-heading text-2xl">Project</h2>
                            <p className="my-3 text-sm font-secondaryHeading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quae reiciendis? Est voluptates nemo, ipsa officiis atque amet harum esse, laudantium explicabo ut, placeat corporis perferendis!</p>
                            <button className="font-secondaryHeading underline cursor-pointer">Find More -</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full mx-auto relative overflow-hidden">
                    <img className="opacity-80" src={img3} alt="project 3" />
                    <div className={`projects-overlay absolute top-0 left-0 bottom-0 right-0 hide-project-overlay hover:bg-background-secondary-dark-color/80`}>
                        <h1>03</h1>
                        <div className="w-96 mt-20 ml-14">
                            <h2 className="font-heading text-2xl">Project</h2>
                            <p className="my-3 text-sm font-secondaryHeading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quae reiciendis? Est voluptates nemo, ipsa officiis atque amet harum esse, laudantium explicabo ut, placeat corporis perferendis!</p>
                            <button className="font-secondaryHeading underline cursor-pointer">Find More -</button>
                        </div>
                    </div>
                </div>
                <div className=" w-full h-full mx-auto relative overflow-hidden">
                    <img className="opacity-80" src={img4} alt="project 4" />
                    <div className={` projects-overlay absolute top-0 left-0 bottom-0 right-0 hide-project-overlay hover:bg-background-secondary-dark-color/80`}>
                        <h1>04</h1>
                        <div className="w-96 mt-20 ml-14">
                            <h2 className="font-heading text-2xl">Project</h2>
                            <p className="my-3 text-sm font-secondaryHeading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quae reiciendis? Est voluptates nemo, ipsa officiis atque amet harum esse, laudantium explicabo ut, placeat corporis perferendis!</p>
                            <button className="font-secondaryHeading underline cursor-pointer">Find More -</button>
                        </div>
                    </div>
                </div>
                <div  className="w-full h-full mx-auto relative overflow-hidden">
                    <img className="opacity-80" src={img5} alt="project 5" />
                    <div className={`projects-overlay absolute top-0 left-0 bottom-0 right-0 hide-project-overlay hover:bg-background-secondary-dark-color/80`}>
                        <h1>05</h1>
                        <div className="w-96 mt-20 ml-14">
                            <h2 className="font-heading text-2xl">Project</h2>
                            <p className="my-3 text-sm font-secondaryHeading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quae reiciendis? Est voluptates nemo, ipsa officiis atque amet harum esse, laudantium explicabo ut, placeat corporis perferendis!</p>
                            <button className="font-secondaryHeading underline cursor-pointer">Find More -</button>
                        </div>
                    </div>
                </div>
                <div  className="w-full h-full mx-auto relative overflow-hidden">
                    <img className="opacity-80" src={img6} alt="project 6" />
                    <div className={`projects-overlay absolute top-0 left-0 bottom-0 right-0 hide-project-overlay hover:bg-background-secondary-dark-color/80`}>
                        <h1>06</h1>
                        <div className="w-96 mt-20 ml-14">
                            <h2 className="font-heading text-2xl">Project</h2>
                            <p className="my-3 text-sm font-secondaryHeading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quae reiciendis? Est voluptates nemo, ipsa officiis atque amet harum esse, laudantium explicabo ut, placeat corporis perferendis!</p>
                            <button className="font-secondaryHeading underline cursor-pointer">Find More -</button>
                        </div>
                    </div>
                </div>
                
            </div>
      </div>
    )
}
