import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://jackfernando.com';

export function usePageMeta(title, description, robots = 'index, follow') {
    const location = useLocation();

    useEffect(() => {
        document.title = title;

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) descriptionTag.setAttribute('content', description);

        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            const path = location.pathname === '/' ? '' : location.pathname.replace(/\/$/, '');
            canonicalTag.setAttribute('href', `${SITE_ORIGIN}${path}/`);
        }

        let robotsTag = document.querySelector('meta[name="robots"]');
        if (!robotsTag) {
            robotsTag = document.createElement('meta');
            robotsTag.setAttribute('name', 'robots');
            document.head.appendChild(robotsTag);
        }
        robotsTag.setAttribute('content', robots);
    }, [title, description, robots, location.pathname]);
}
