import '../pages/Contact.css';

import Form from "./Form";
import FormTextarea from "./FormTextarea";
import SubmitButton from "./SubmitButton";

function ContactPageTest() {
    return (
        <>
        <Form 
            type='input'
            placeholder='Nume'
            name='nume'
            id='nume'

            for='name'
            denumire='Nume'
        />

        <Form 
            type='input'
            placeholder='Email'
            name='email'
            id='email'

            for='email'
            denumire='Email'
        />

        <FormTextarea 
            Tplaceholder="Mesaj"
            Tname="mesaj"
            Tid="mesaj"

            Tfor='mesaj'
            Tdenumire="Mesaj:"
        />

        <SubmitButton 
            classB="button-30"
            roleB="button"
            denumireB="Trimite"
        />

        </>
    );
}

export default ContactPageTest;