import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactForm = (props) => {
    const [name, setName] = React.useState(''),
        [email, setEmail] = React.useState(''),
        [text, setText] = React.useState(''),
        nameRef = React.createRef(),
        emailRef = React.createRef(),
        textRef = React.createRef();
    const nameChange = () => {
            setName(nameRef.current.value);
        },
        emailChange = () => {
            setEmail(emailRef.current.value);
        },
        textChange = () => {
            setText(textRef.current.value);
        }
    return (
        <form id={'contactForm'}>
            <label htmlFor='nameInput' className={'label'}>
                <input type='text' id={'nameInput'} placeholder={'Name'} className={'form-control'} value={name}
                       ref={nameRef} onChange={nameChange}/>
            </label>

            <label htmlFor='emailInput' className={'label'}>
                <input type='text' id={'emailInput'} placeholder={'E-mail'} className={'form-control'} value={email}
                       ref={emailRef} onChange={emailChange}/>
            </label>

            <label htmlFor='textInput' className={'label'}>
                <textarea id={'textInput'} className={'form-control'} placeholder={'Message'} rows={'7'} value={text}
                          ref={textRef} onChange={textChange}/>
            </label>
            <button className={'submit'} type={'submit'}>Send message</button>
        </form>
    )
}

const ContactPage = (props) => {
    return (
        <section id={'contact'}>
            <div className={'container'}>
                <ScrollAnimation animateIn='fadeIn'>
                    <div className={'contact_header'}>
                        <div className='title'>
                            DROP ME A LINE
                        </div>
                        <div className='subtitle'>
                            No one lights a lamp in order to hide it behind the door: the purpose of light is to create
                            more light, to open people’s eyes, to reveal the marvels around.
                        </div>
                    </div>
                </ScrollAnimation>
                <ContactForm/>
            </div>
        </section>
    )
}

export default ContactPage;