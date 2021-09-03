import { Container } from "react-bootstrap";

import About from './components/about/about'
import Landing from './components/landing/landing'
import Contact from './components/contact/contact'
import Execs from './components/execs/execs'
import Footer from '../../components/footer/footer'

import './home.scss'

export default function Home() {
    return (
        <div id='home'>
            <div className='nav-spacing-buffer' />
            <Container>
                <section id='landing'>
                    <Landing />
                </section>
                <div className='spacing-buffer'></div>
                <section id='about'>
                    <About />
                </section>
                <div className='spacing-buffer'></div>
                <section id='execs'>
                    <Execs />
                </section>
                <div className='spacing-buffer'></div>
                <section id='contact'>
                    <Contact />
                </section>
            </Container>
            <Footer />
        </div>
    );
}