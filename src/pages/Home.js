import React,  {useState, useEffect, useRef} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Misc Icons
import downButton from '../images/down-button.svg';
import leftHero from '../images/left-hero.svg';
import downHero from '../images/down-hero.svg';
import rightHero from '../images/right-hero.svg';
import designLogo from '../images/web-design-logo.svg';
import developmentLogo from '../images/development-logo.svg';
import searchLogo from '../images/search-logo.svg';
import hamburger from '../images/hamburger.svg';
import exit from '../images/exit-menu.svg';
import leftButton from '../images/left-button.svg';
import rightButton from '../images/right-button.svg';


// Raz Realty Pictures
import razRealty1 from '../images/realty/Screens1.png';
import razRealty2 from '../images/realty/Screens2.png';
import razRealty3 from '../images/realty/Screens3.png';
import razRealty4 from '../images/realty/Screens4.png';
import razRealty5 from '../images/realty/Screens5.png';
import razRealty6 from '../images/realty/Screens6.png';

// Choice Counseling Pictures
import choice1 from '../images/choice/Screens1.png';
import choice2 from '../images/choice/Screens2.png';
import choice3 from '../images/choice/Screens3.png';
import choice4 from '../images/choice/Screens4.png';
import choice5 from '../images/choice/Screens5.png';
import choice6 from '../images/choice/Screens6.png';

// Vicky's Pastries Pictures
import vicky1 from '../images/vickys/Screens1.png';
import vicky2 from '../images/vickys/Screens2.png';
import vicky3 from '../images/vickys/Screens3.png';
import vicky4 from '../images/vickys/Screens4.png';
import vicky5 from '../images/vickys/Screens5.png';

// Thanks To My Mother Pictures
import thanks1 from '../images/thanks/Screens1.png';
import thanks2 from '../images/thanks/Screens2.png';
import thanks3 from '../images/thanks/Screens3.png';
import thanks4 from '../images/thanks/Screens4.png';
import thanks5 from '../images/thanks/Screens5.png';

import './Home.css';

const companyName = 'Tona Designs';

export default function Home() {

    // Contact Information State
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [useMessage, setUseMessage] = useState();

    // Nav Menu State
    const [mobileNav, setMobileNav] = useState(false);

    // Modal States
    const [modal, setModal] = useState({
        display: false,
        title: '',
        subheading: '',
        description: '',
        images: [],
        link: '',
        displayLink: false,
    })

    // Arrival States
    const [aboutArrived, setAboutArrived] = useState(false);
    const [portfolioArrived, setPortfolioArrived] = useState(false);

    // Carousel Image
    const [current, setCurrent] = useState(0);
    const timeout = useRef(null);

    // useEffect( () => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === modal.images.length - 1 ? 0 : current + 1 ));
    //     };

    //     timeout.current = setTimeout(nextSlide, 3000);

    //     return function(){
    //         if(timeout.current){
    //             clearTimeout(timeout.current);
    //         }
    //     };
    // }, [current, modal.images.length]);

    const nextSlide = () => {
        setCurrent(current === modal.images.length - 1 ? 0 : current + 1 );
    };

    const prevSlide = () => {
        setCurrent(current === 0? modal.images.length - 1 : current - 1 );
    };


    const changeArrivalStates = () => {
        if(window.scrollY<175){
            setAboutArrived(false);
            setPortfolioArrived(false);
        }
        else if(window.scrollY >= 175 && window.scrollY <= 400)
        {
            setAboutArrived(true);
            setPortfolioArrived(false);
        }
        else if(window.scrollY < 800){
            setAboutArrived(true);
            // setPortfolioArrived(false);
        }
        else if(window.scrollY >= 1000 && window.scrollY <= 1600)
        {
            setAboutArrived(true);
            setPortfolioArrived(true);
        }
        else
        {
            setAboutArrived(true);
            setPortfolioArrived(false);
        }
    }

    window.addEventListener('scroll', changeArrivalStates);

    const submit = async (e) => {
        e.preventDefault();
        alert('Thank you for your reaching out! A consultant will get back to you shortly!')
        const templateID = process.env.REACT_APP_TEMPLATE_ID;
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        
        sendFeedback(serviceID, templateID, {area: name, email:email, useMessage: useMessage});

        // window.location.reload(false);

    }

    const sendFeedback = (serviceID, templateID, vairables) =>{
        window.emailjs.send(
            serviceID, templateID,
            vairables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.',err))
    }

    return (
        <div className='home-page'>
            <header className='navbar'>
                <div className='nav-container'>
                    <div className='mobile-nav-row'>
                    <a href='/' className='company-name'>{companyName}</a>
                    <ul className='hide-mobile desktop-list'>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li id='last-nav-op'><a href='#services'>Services</a></li>
                    </ul>
                    
                    <img src={hamburger} className={mobileNav ? 'hide-desktop hide' : 'hide-desktop show-hamburger'} onClick={()=>setMobileNav(true)}/>
                    <img src={exit} className={mobileNav ? 'hide-desktop show-exit' : 'hide-desktop hide'} onClick={()=>setMobileNav(false)}/>
                    </div>
                   
                </div>
                <a href='#contact' className='hide-mobile contact-desktop'>Contact Us</a>
                <ul className = {mobileNav ? 'hide-desktop mobile-list' : 'hide-desktop hide-menu'}>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                    </ul>
            </header>

            <section className='hero-section'>
                <div className='hero-container hide-mobile'>
                    <div className='left-hero'>
                        <h1>Innovative and Captivating Web Designs</h1>
                        <a href='#about'>What We Can Do For You</a>
                        <a href='#about'><img src={downButton}/></a>
                    </div>
                    <div className='right-hero'>
                        <div className = 'desktop-hero-images'>
                            <img className='left-hero-img' src={leftHero} />
                            <img className='right-hero-img' src={rightHero} />
                        </div>
                        <img className='down-hero-img' src={downHero} />
                    </div>
                </div>

                <div className='hero-container-mobile hide-desktop'>
                    <div className='top-hero'>
                        <div className='shared-images'>
                        <img src={leftHero} />
                        <img src={rightHero} />
                        </div>
                        <img className='lone-bottom' src={downHero} />
                    </div>
                    <div className='bottom-hero'>
                        <h1>Leader in Captivating Web Experiences</h1>
                        <a href='#about'>What We Can Do For You</a>
                        <a href='#about'><img id='downarrow' src={downButton}/></a>
                    </div>
                   
                </div>
            </section>

            <section className={aboutArrived ? 'about-section about-section-arrived' : 'about-section'} id='about'>
                <h1>{companyName}</h1>
                <div className='about-row'>
                    <div className='left-about'>
                        <img src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'/>
                    </div>
                    <div className='right-about'>
                        <p>{companyName} is a Web Development company based out of Southern California. Although we cater to the Palm Springs and Coachella Valley area, we offer our services to all reaches of the globe, to help provide beautiful and effective websites. </p>
                    </div>
                </div>
            </section>

            <section className='featured-projects-section' id='portfolio'>
                <div className='featured-projects-container'>
                    <h3>Featured Projects</h3>
                    
                    <div className={portfolioArrived ? 'project-row featured-projects-arrived' : 'project-row'} onClick={ () => setModal({
                            display: true,
                            title: 'RazRealty',
                            subheading: 'Real Estate Website',
                            description: 'Real Estate Website our team completed using ReactJS, HTML, JavaScript, and CSS. It uses the Realtor API data to find local listings, property data, and calculate mortgage rates. A Google Maps module displays the location of the focused property.',
                            images: [razRealty1,razRealty2,razRealty3,razRealty4,razRealty5,razRealty6],
                            link: '',
                            displayLink: false
                        })}>
                        <div className='left-project' id='realty'>
                            <img src={razRealty1} alt='razrealty home page'/>
                        </div>
                        <div className='right-project'>
                            <h4>Real Estate Website</h4>
                            <h2>RazRealty</h2>
                            <p>Real Estate Website our team completed using ReactJS, HTML, JavaScript, and CSS. It uses the Realtor API data to find local listings, property data, and calculate mortgage rates. A Google Maps module displays the location of the focused property.</p>
                        </div>
                    </div>

                    <div className='project-row hide-mobile' onClick={ () => setModal({
                            display: true,
                            title: 'Choice Counseling',
                            subheading: 'Counseling Website',
                            description: 'Counseling Service site built using WordPress and Elementor. This unique and professional site holds necessary forms for future clients, allows for session scheduling, and properly communicates the reach of the company.',
                            images: [choice1,choice2,choice3,choice4,choice5,choice6],
                            link: 'https://choicecounselingc3.com/',
                            displayLink: true
                        })}>
                        <div className='left-project'>
                            <h4>Counseling Website</h4>
                            <h2>Choice Counseling</h2>
                            <p>Counseling Service site built using WordPress and Elementor. This unique and professional site holds necessary forms for future clients, allows for session scheduling, and properly communicates the reach of the company.</p>
                            
                        </div>
                        <div className='right-project' id='choice'>
                            <img src={choice1} alt='choice counseling home page'/>
                        </div>
                    </div>

                    <div className='project-row hide-desktop' onClick={ () => setModal({
                            display: true,
                            title: 'Choice Counseling',
                            subheading: 'Counseling Website',
                            description: 'Counseling Service site built using WordPress and Elementor. This unique and professional site holds necessary forms for future clients, allows for session scheduling, and properly communicates the reach of the company.',
                            images: [choice1,choice2,choice3,choice4,choice5,choice6],
                            link: 'https://choicecounselingc3.com/',
                            displayLink: true
                        })}>
                        <div className='left-project' id='choice'>
                            <img src={choice1} alt='choice counseling home page'/>
                        </div>
                        <div className='right-project' id='choice'>
                            <h4>Counseling Website</h4>
                            <h2>Choice Counseling</h2>
                            <p>Counseling Service site built using WordPress and Elementor. This unique and professional site holds necessary forms for future clients, allows for session scheduling, and properly communicates the reach of the company.</p>
                        </div>
                    </div>

                    <div className='project-row' onClick={ () => setModal({
                            display: true,
                            title: 'Vicky\'s Pastries',
                            subheading: 'Small Business Website',
                            description: 'Small Bakery Website built using the MERN stack. These technologies include ReactJS, Express, MongoDB, and NodeJs. This site includes functionality for order submission, newsletter subscriptions, and an employee site. The employee site allows the admin to upload and delete new menu items.',
                            images: [vicky1,vicky2,vicky3,vicky4,vicky5],
                            link: 'https://blooming-dusk-55431.herokuapp.com/',
                            displayLink: true
                        })}>
                        <div className='left-project' id='vickys'>
                            <img src={vicky1} alt='vickys pastries home page'/>
                        </div>
                        <div className='right-project'>
                            <h4>Small Business Website</h4>
                            <h2>Vicky's Pastries</h2>
                            <p>Small Bakery Website built using the MERN stack. These technologies include ReactJS, Express, MongoDB, and NodeJs. This site includes functionality for order submission, newsletter subscriptions, and an employee site. The employee site allows the admin to upload and delete new menu items.</p>
                        </div>
                    </div>

                    <div className='project-row hide-mobile' onClick={ () => setModal({
                            display: true,
                            title: 'Thanks To My Mother',
                            subheading: 'Lifestyle Blog Website',
                            description: 'A Mother\'s Lifestyle Blog built using WordPress and Elementor. This blog is about the journey of becoming a mother and all the interesting stories that come with it. Our team took a proactive approach to make this client a site that best communicated the theme of the concept.',
                            images: [thanks1,thanks2,thanks3,thanks4,thanks5],
                            link: 'https://thankstomymother.com/',
                            displayLink: true
                        })}>
                        <div className='left-project'>
                            <h4>Lifestyle Blog Website</h4>
                            <h2>Thanks To My Mother</h2>
                            <p>A Mother's Lifestyle Blog built using WordPress and Elementor. This blog is about the journey of becoming a mother and all the interesting stories that come with it. Our team took a proactive approach to make this client a site that best communicated the theme of the concept.</p>
                        </div>
                        <div className='right-project' id='choice'>
                            <img src={thanks1} alt='choice counseling home page'/>
                        </div>
                    </div>

                    <div className='project-row hide-desktop' onClick={ () => setModal({
                            display: true,
                            title: 'Thanks To My Mother',
                            subheading: 'Lifestyle Blog Website',
                            description: 'A Mother\'s Lifestyle Blog built using WordPress and Elementor. This blog is about the journey of becoming a mother and all the interesting stories that come with it. Our team took a proactive approach to make this client a site that best communicated the theme of the concept.',
                            images: [thanks1,thanks2,thanks3,thanks4,thanks5],
                            link: 'https://thankstomymother.com/',
                            displayLink: true
                        })}>
                        <div className='left-project'>
                            <img src={thanks1} alt='choice counseling home page'/>
                        </div>
                        <div className='right-project' id='choice'>
                            <h4>Lifestyle Blog Website</h4>
                            <h2>Thanks To My Mother</h2>
                            <p>A Mother's Lifestyle Blog built using WordPress and Elementor. This blog is about the journey of becoming a mother and all the interesting stories that come with it. Our team took a proactive approach to make this client a site that best communicated the theme of the concept.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='services-section' id='services'>
                <div className='services-container'>
                    <h2>Services</h2>
                    <ul className='services'>
                        <li id='wd'>
                            <img src={designLogo} alt='web design logo'/>
                            <h3>Web Design</h3>
                            <p>{companyName} gives clients a web presence like no other before. Our business works to convey the heart of the client, while also bringing innovative design elements to the table.</p>
                            <a>Web Design Rates</a>
                        </li>
                        <li>
                            <img src={developmentLogo} alt='web development logo'/>
                            <h3>Full Stack Development</h3>
                            <p>In addition to website design and creation, {companyName} has in-house programmers that are capable of all layers of Full Stack Development. No problem is too big or too small for our developers.</p>
                            <a>Web Development Rates</a>
                        </li>
                        <li id='seo'>
                            <img src={searchLogo} alt='search engine opitimization seo logo'/>
                            <h3>Search Engine Optimization</h3>
                            <p>Help your business be easy to discover with our SEO packages. We ensure that our clients rank better on online searches, maximizing potential exposure. </p>
                            <a>SEO Rates</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className='contact-section' id='contact'>
                <div className='contact-container'>
                    <div className='contact-row'>
                        <div className='left-contact'>
                            <h2>Schedule a Consultation</h2>
                            <h3>Fill out this form if you are interested in our services. Or better yet, email us!</h3>
                            <p>Pavalenzuela428@gmail.com</p>
                        </div>
                        <div className='right-contact'>
                            <form className='contact-form' onSubmit={submit} encType='multipart/form-data'>
                                <label htmlFor='Name'>Name:</label>
                                <input id='Name'  onChange = {e => setName(e.target.value)} />

                                <label htmlFor='Email'>Email:</label>
                                <input id='email' type='email' onChange = {e => setEmail(e.target.value)} />

                                <label htmlFor='Phone Number'>Phone Number:</label>
                                <input id='phonenumber' type='number' onChange = {e => setPhoneNumber(e.target.value)} />

                                <label htmlFor='Message' id='contact-msg'>Details about your project:</label>
                                <textarea id="useMessage" name="useMessage" rows="40" cols="50" onChange = {e => setUseMessage(e.target.value)}></textarea>

                                <input type='submit' value='Submit'/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <ul className='hide-mobile' id='left-footer'>
                    <li>Web Design</li>
                    <li>Full Stack Development</li>
                    <li>SEO</li>
                    <li>{companyName} &copy;2021</li>
                </ul>
                <ul>
                    <li>Full Portfolio</li>
                    <li>Terms of Service</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
                <ul id='right-footer'>
                    <li>Pricing</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                </ul>
                <ul className='hide-desktop'>
                    <li>Web Design</li>
                    <li>Full Stack Development</li>
                    <li>SEO</li>
                    <li>{companyName} &copy;2021</li>
                </ul>
            </footer>

            
                <div className={modal.display ? 'modal' : 'hidden-modal'}>
                    <div className='modal-container'>
                        <div className='modal-nav'>
                            <a className='modal-title'>{companyName}</a>
                            <img src={exit} onClick={() => setModal({
                                display:false,
                                title: '',
                                subheading: '',
                                description: '',
                                images: [],
                                link: ''
                            })}/>
                        </div>
                        
                        <div className='carousel'>
                            <img src={leftButton} className='car-btn' onClick={prevSlide}/>
                        { modal.images.map((item,index) => 
                        <img src={item} key={index} className={current==index ? 'car-active' : 'car-hide'}/>
                        )}
                        <img src={rightButton} className='car-btn' onClick={nextSlide}/>
                        </div>
                        <h4>{modal.subheading}</h4>
                        <h2>{modal.title}</h2>
                        <p>{modal.description}</p>
                        <a className={modal.displayLink ? 'visit' : 'hide'}href={modal.link}>Visit This Site</a>
                    </div>
                </div>
            
        </div>
    )
}
