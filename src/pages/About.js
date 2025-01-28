import logo from '../image/logo.jpg';
import './About.css';

function AboutPage() {
    return (
        <>
        <div className='culoare-about'>
            <div className="container-about">
                <div className="about">
                    <div className="about-image">
                        <img className='imagine' src={logo} alt=""/>
                    </div>

                <div className="about-content">
                    <h2 className='about-h2'>Biography</h2>
                    <p className='about-p'>Salut! Eu sunt Deian, am 23 de ani și sunt pasionat de fotografie și videografie. De mic, am fost fascinat de puterea imaginilor de a spune povești și de a captura momente unice. Fiecare proiect pe care îl abordez este o oportunitate de a explora noi perspective și de a transforma momentele speciale în amintiri vizuale de neuitat. Îmi place să surprind detaliile și emoțiile autentice, fie că este vorba de portrete, peisaje sau evenimente speciale, pentru a crea imagini și clipuri video de înaltă calitate.</p>
                    <p className='about-p'>Inspirația mea vine din frumusețea naturii, din expresiile sincere ale oamenilor și din dinamica vibrantă a orașului. Cu fiecare fotografie și video pe care îl realizez, mă străduiesc să aduc un plus de originalitate și profunzime. Cred că fiecare client merită o abordare personalizată și mă dedic să înțeleg și să îndeplinesc nevoile fiecăruia. Dacă îmi alegi serviciile, îți promit că voi pune tot sufletul și toată creativitatea mea pentru a transforma momentele tale importante în adevărate capodopere vizuale.</p>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutPage;