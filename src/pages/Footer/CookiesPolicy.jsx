import React from 'react';
import { PolicyLayout } from '../../components/PolicyLayout';

const sections = [
    {
        id: 'what-are-cookies',
        title: 'What Are Cookies',
        body: [
            'Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences and help us understand how the site is used. Similar technologies such as local storage work in the same way.',
        ],
    },
    {
        id: 'types',
        title: 'Cookies We Use',
        body: [
            {
                list: [
                    'Essential cookies: required for the website to work, such as page navigation and form submission. These cannot be switched off.',
                    'Preference cookies: remember choices you make, such as language (Bangla or English).',
                    'Analytics cookies: help us understand how visitors use the site, which pages are popular and where we can improve. This information is aggregated and does not identify you personally.',
                ],
            },
        ],
    },
    {
        id: 'third-party',
        title: 'Third-Party Cookies',
        body: [
            'Some features on our website are provided by third parties, such as embedded maps, videos, social media links and our AI assistant. These providers may set their own cookies, which are governed by their own privacy and cookie policies.',
        ],
    },
    {
        id: 'managing',
        title: 'Managing Cookies',
        body: [
            'You can control and delete cookies through your browser settings. Most browsers let you:',
            {
                list: [
                    'See which cookies are stored and delete them individually or all at once.',
                    'Block third-party cookies.',
                    'Block all cookies from specific websites.',
                    'Delete all cookies when you close the browser.',
                ],
            },
            'Please note that blocking essential cookies may stop parts of the website from working properly.',
        ],
    },
    {
        id: 'changes',
        title: 'Changes to This Policy',
        body: [
            'We may update this Cookies Policy when we add new features or services. The latest version will always be available on this page.',
        ],
    },
];

const CookiesPolicy = () => {
    return (
        <PolicyLayout
            title="Cookies Policy"
            description="How Skyroot Real Estate Ltd uses cookies and similar technologies on its website."
            intro="This policy explains what cookies are, which cookies we use on the Skyroot Real Estate Ltd website, and how you can manage them."
            lastUpdated="October 23, 2026"
            sections={sections}
        />
    );
};

export default CookiesPolicy;
