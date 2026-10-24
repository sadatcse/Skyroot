import React from 'react';
import { PolicyLayout } from '../../components/PolicyLayout';

const sections = [
    {
        id: 'information-we-collect',
        title: 'Information We Collect',
        body: [
            'We collect information that you provide to us directly and information that is collected automatically when you use our website.',
            {
                list: [
                    'Contact details such as your name, phone number, email address and postal address when you fill in our contact or inquiry forms.',
                    'Property preferences, budget, preferred location and inquiry type that you share with us.',
                    'Booking and purchase information, including national ID, TIN, nominee details and payment records, when you book or buy a property.',
                    'Technical information such as IP address, browser type, device type, pages visited and time spent on the site.',
                ],
            },
        ],
    },
    {
        id: 'how-we-use',
        title: 'How We Use Your Information',
        body: [
            'We use your information only for legitimate business purposes, including to:',
            {
                list: [
                    'Respond to your inquiries and arrange site visits or meetings.',
                    'Process bookings, allotments, installment schedules and property handover.',
                    'Prepare agreements, deeds and other documents required by law.',
                    'Send project updates, construction progress and offers you have agreed to receive.',
                    'Improve our website, services and customer experience.',
                    'Meet our legal, regulatory and tax obligations in Bangladesh.',
                ],
            },
        ],
    },
    {
        id: 'sharing',
        title: 'Sharing of Information',
        body: [
            'We do not sell or rent your personal information. We may share it only with:',
            {
                list: [
                    'Banks and financial institutions, when you apply for a home loan or make payments through them.',
                    'Legal advisers, land registry and government authorities, for documentation, registration and mutation.',
                    'Trusted service providers (such as IT, hosting and messaging providers) who process data on our behalf under confidentiality obligations.',
                    'Authorities, when required by law, court order or to protect our legal rights.',
                ],
            },
        ],
    },
    {
        id: 'data-security',
        title: 'Data Security',
        body: [
            'We take reasonable technical and organisational measures to protect your information from unauthorised access, loss or misuse. Physical documents are kept in secure office storage and digital records are protected with access controls.',
            'No method of transmission over the internet is completely secure, so we cannot guarantee absolute security, but we work continuously to protect your data.',
        ],
    },
    {
        id: 'retention',
        title: 'Data Retention',
        body: [
            'We keep inquiry information for as long as needed to respond and follow up. Booking, payment and ownership records are kept for as long as required for the property transaction, after-sales service and our legal and tax obligations.',
        ],
    },
    {
        id: 'your-rights',
        title: 'Your Rights',
        body: [
            'You may contact us at any time to:',
            {
                list: [
                    'Request a copy of the personal information we hold about you.',
                    'Ask us to correct inaccurate or incomplete information.',
                    'Ask us to delete information that we no longer need, subject to legal requirements.',
                    'Unsubscribe from marketing messages.',
                ],
            },
        ],
    },
    {
        id: 'cookies',
        title: 'Cookies',
        body: [
            'Our website uses cookies and similar technologies to work properly and to understand how visitors use it. Please read our Cookies Policy for details.',
        ],
    },
    {
        id: 'third-party-links',
        title: 'Third-Party Links',
        body: [
            'Our website may contain links to other websites, such as social media or video platforms. We are not responsible for the privacy practices of those websites and encourage you to read their policies.',
        ],
    },
    {
        id: 'changes',
        title: 'Changes to This Policy',
        body: [
            'We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new "Last updated" date.',
        ],
    },
];

const PrivacyPolicy = () => {
    return (
        <PolicyLayout
            title="Privacy Policy"
            description="How Skyyroot Real Estate Ltd collects, uses and protects your personal information."
            intro="Skyyroot Real Estate Ltd respects your privacy. This policy explains what information we collect when you visit our website or deal with us, how we use it, and the choices you have."
            lastUpdated="October 23, 2026"
            sections={sections}
        />
    );
};

export default PrivacyPolicy;
