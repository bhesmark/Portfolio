import React, { Component , Fragment } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import TeamOne from "../blocks/team/TeamOne";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers ,FiChevronUp , FiCheck } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterOne";
import BrandTwo from "../elements/BrandTwo";
import AboutOne from "../blocks/about/AboutOne";


const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--32',
        category: '',
        title: 'Business.',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--31',
        category: '',
        title: 'Corporate.',
        description: 'There are many variations of passages but the majority have suffered alteration.There are many variations of passages but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    
]

const ServiceListOne = [
    {
        icon: <FiCast />,
        title: 'Business Stratagy',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
]

class CorporateBusiness extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        
        const PostList = BlogContent.slice(0 , 3);

        return(
            <Fragment> 
                <Helmet pageTitle="Corporate Business" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper" >
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title ">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}
                
                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row service-main-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2 text-left bg-gray">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}


                {/* Start About Area */}
                <div className="about-area rm-about-style-2 ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <AboutOne />
                    </div>
                </div>
                {/* End About Area */} 


                {/* Start Counterup Area */}
                <div className="counterup-area pb--80 pt--40 bg_image bg_image--17 theme-text-white" data-black-overlay="3">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-4.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <span className="subtitle">Our Working Plan</span>
                                        <h2 className="title">Working Process</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</p>
                                    </div>
                                    <div className="accordion-wrapper mt--30">
                                        <Accordion01 />
                                    </div>
                                    <div className="about-button mt--30">
                                        <a className="btn-default" href="/about">See how it works</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--25 mb_sm--0">
                                    <span className="subtitle">Our Experts</span>
                                    <h2 className="title">Managing Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <TeamOne column="col-lg-4 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="3" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <span className="subtitle">Our Budget Plan</span>
                                    <h2 className="title">Pricing Plan</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Free</h4>
                                            <div className="pricing">
                                                <span className="price">$45</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Business</h4>
                                            <div className="pricing">
                                                <span className="price">$45</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Advanced</h4>
                                            <div className="pricing">
                                                <span className="price">$99</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                        </div>
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}

                {/* Start Brand Area  */}
                <div className="rn-brand-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--25 mb_sm--0">
                                    <span className="subtitle">Top clients</span>
                                    <h2 className="title">Clients Say What About Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--30">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="/assets/images/about/about-10.png" alt="About Images"/>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="row pt--120">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--80 bg_color--5">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center">
                                    <span className="subtitle">Latest News</span>
                                    <h2 className="title">Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={i}>
                                    <div className="im_box">
                                        <div className="thumbnail">
                                            <Link to="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <div className="content_heading">
                                                    <div className="category_list">
                                                        <Link to="/portfolio-details">{value.category}</Link>
                                                    </div>
                                                    <h4 className="title">
                                                        <Link to="/blog-details">{value.title}</Link>
                                                    </h4>
                                                </div>
                                                <div className="content_footer">
                                                    <Link to="/blog-details" className="rn-btn btn-opacity">Read More</Link>
                                                </div>
                                            </div>
                                            <Link className="transparent_link" to="/blog-details"></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Footer Style  */}
                <Footer />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default CorporateBusiness;