import React from 'react';
import { PolicyLayout } from '../../components/PolicyLayout';

const sections = [
    {
        id: 'acceptance',
        title: 'Acceptance of Terms',
        body: [
            'By accessing or using the Skyroot Real Estate Ltd website, you agree to these Terms of Service. If you do not agree, please do not use the website.',
        ],
    },
    {
        id: 'website-information',
        title: 'Website Information',
        body: [
            'The content on this website, including project descriptions, images, 3D renders, floor plans, sizes, features and prices, is provided for general information only.',
            {
                list: [
                    'Images and renders are artistic impressions and may differ from the final construction.',
                    'Specifications, layouts, sizes and amenities may change due to design, engineering or regulatory requirements.',
                    'Prices and availability are subject to change without notice.',
                    'Nothing on this website is a binding offer. Only a signed allotment letter or sale agreement creates a contract.',
                ],
            },
        ],
    },
    {
        id: 'bookings',
        title: 'Bookings and Agreements',
        body: [
            'Any booking, allotment or purchase of a property is governed by the separate application form, allotment letter and sale agreement signed between you and Skyroot Real Estate Ltd. If there is any conflict between these Terms and a signed agreement, the signed agreement will prevail.',
        ],
    },
    {
        id: 'consultancy',
        title: 'Consultancy Services',
        body: [
            'Architecture, engineering, interior design, planning, landscape design, construction and project management services are provided under separate written service agreements that set out the scope, fees, timeline and deliverables for each project.',
        ],
    },
    {
        id: 'acceptable-use',
        title: 'Acceptable Use',
        body: [
            'When using this website, you agree not to:',
            {
                list: [
                    'Use the website for any unlawful or fraudulent purpose.',
                    'Submit false, misleading or someone else\'s information through our forms.',
                    'Attempt to gain unauthorised access to the website, its servers or data.',
                    'Copy, scrape or reproduce website content for commercial purposes without our written permission.',
                ],
            },
        ],
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual Property',
        body: [
            'All content on this website, including the Skyroot name and logo, text, designs, drawings, renders, photographs and videos, is owned by or licensed to Skyroot Real Estate Ltd and is protected by copyright and trademark laws. You may not use it without our prior written consent.',
        ],
    },
    {
        id: 'third-party',
        title: 'Third-Party Links and Services',
        body: [
            'The website may link to third-party websites or embed third-party services. We do not control and are not responsible for their content, availability or practices.',
        ],
    },
    {
        id: 'liability',
        title: 'Limitation of Liability',
        body: [
            'We try to keep the information on this website accurate and up to date, but we do not guarantee that it is complete, error-free or always available. To the extent permitted by law, Skyroot Real Estate Ltd is not liable for any loss arising from the use of, or reliance on, this website.',
        ],
    },
    {
        id: 'governing-law',
        title: 'Governing Law',
        body: [
            'These Terms are governed by the laws of the People\'s Republic of Bangladesh. Any dispute relating to this website will be subject to the jurisdiction of the courts of Dhaka, Bangladesh.',
        ],
    },
    {
        id: 'changes',
        title: 'Changes to These Terms',
        body: [
            'We may update these Terms at any time by posting the revised version on this page. Your continued use of the website after changes means you accept the updated Terms.',
        ],
    },
];

const TermsAndCondition = () => {
    return (
        <PolicyLayout
            title="Terms of Service"
            description="Terms and conditions for using the Skyroot Real Estate Ltd website and services."
            intro="These terms explain the rules for using the Skyroot Real Estate Ltd website and how the information on it should be understood. Please read them carefully."
            lastUpdated="October 23, 2026"
            sections={sections}
        />
    );
};

export default TermsAndCondition;
