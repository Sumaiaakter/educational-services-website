import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';

const About = () => {
    return (
        <div className="text-primary">
            <Banner />

            <br />
            <h1 className="text-primary m-50">University Wikipidea</h1>
            <br />

            <img className="w-100 m-10 p-10" src="https://www.wichita.edu/academics/majors/_images/FREDS7.jpg" alt="" />
            <br />

            <p className="mt-5">A university (Latin: universitas, 'a whole') is an institution of higher (or tertiary) education and research which awards academic degrees in several academic disciplines. Universities typically offer both undergraduate and postgraduate programs in different schools or faculties of learning.

                The word university is derived from the Latin universitas magistrorum et scholarium, which roughly means "community of teachers and scholars".[1]

                The first universities were created in Europe by Catholic Church monks. The University of Bologna (Università di Bologna), founded in 1088, is the first university in the sense of:

                being a high degree-awarding institute;
                having independence from the ecclesiastic schools, although conducted by both clergy and non-clergy;
                using the word universitas (which was coined at its foundation);
                issuing secular and non-secular degrees: grammar, rhetoric, logic, theology, canon law, notarial law.</p>
            <Footer />
        </div>
    );
};

export default About;
