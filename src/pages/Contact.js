import './Contact.css';


import ContactPageTest from '../components/tester';
import DreaptaCon from '../components/DreaptaCon';

function ContactPage() {
    return (
        <>
        <div className='veliki-interface-contact'>
            <div className='container-contact'>
            
                <div class="heading">
                    <h1 class="titlu-contact">Contact</h1>
                </div>

                <ContactPageTest /> 
            </div>
            
            <div className='container-desna-contact'>
                <DreaptaCon />
            </div>
        </div>    
        </>
    );
}

export default ContactPage;