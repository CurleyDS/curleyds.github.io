import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Contact() {
    return (
        <main className='flex flex-col justify-center max-w-5xl mx-auto p-2 gap-5'>
            {/* Hidden Section */}
            <section className='invisible' id='top'></section>
            
            {/* Section Contact */}
            <section>
                <h2 className='p-4 text-2xl font-bold'><FormattedMessage id='contactTitle' defaultMessage="Contact" /></h2>
                
                <hr />
                
                <p className='p-5'>
                    <FormattedMessage
                        id='contacts'
                        values={{
                            mail: (chunks) => <a href="mailto:dylanschoop@gmail.com">{chunks}</a>,
                            linkedIn: (chunks) => <a target="_blank" className='underline text-orange-700' href="https://www.linkedin.com/in/dylan-schoop-b5b753174/" rel="noopener noreferrer">{chunks}</a>,
                            instagram: (chunks) => <a target="_blank" className='underline text-orange-700' href="https://www.instagram.com/dylan_cmgt/" rel="noopener noreferrer">{chunks}</a>
                        }}
                        defaultMessage={
                            `U kunt mij bereiken via <mail>dylanschoop@gmail.com</mail> of bezoek mijn socials
                            <linkedIn>LinkedIn</linkedIn> en <instagram>Instagram</instagram>.`
                        }
                    />
                </p>
            </section>
        </main>
    );
}

export default Contact;
