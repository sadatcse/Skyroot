import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const SITE_URL = 'https://skyyroot.com';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    image?: string;
    url?: string;
}

// Social crawlers need absolute URLs
const absolute = (path: string) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`);

export default function SEO({
    title,
    description = 'SKYROOT - Providing premium services for our real estate clients with excellence and care.',
    name = 'SKYROOT',
    type = 'website',
    image = '/projects/consultancy/ft-mahatab-tower/01.jpg',
    url,
}: SEOProps) {
    const { pathname } = useLocation();
    const pageTitle = title ? `${title} | ${name}` : name;
    const pageUrl = url ?? absolute(pathname === '/' ? '/' : pathname.replace(/\/$/, ''));
    const imageUrl = absolute(image);

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={pageUrl} />
            {/* Open Graph tags for social media */}
            <meta property="og:site_name" content={name} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={imageUrl} />
            {/* Twitter Card tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
}
