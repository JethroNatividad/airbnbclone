import React from 'react';

const Footer = () => {
    const footerItems = [
        {
            section: 'Support', items: [
                { name: 'Help Center', link: '/' },
                { name: 'Safety information', link: '/' },
                { name: 'Cancellation options', link: '/' },
                { name: 'Our COVID-19 Response', link: '/' },
                { name: 'Supporting people with disabilities', link: '/' },
                { name: 'Report a neighborhood concern', link: '/' },
            ]
        },
        {
            section: 'Community', items: [
                { name: 'Airbnb.org: disaster relief housing', link: '/' },
                { name: 'Support Afghan refugees', link: '/' },
                { name: 'Celebrating diversity & belonging', link: '/' },
                { name: 'Combating discrimination', link: '/' },

            ]
        },
        {
            section: 'Hosting', items: [
                { name: 'Try hosting', link: '/' },
                { name: 'AirCover: protection for Hosts', link: '/' },
                { name: 'Explore hosting resources', link: '/' },
                { name: 'Visit our community forum', link: '/' },
                { name: 'How to host responsibly', link: '/' },

            ]
        },
        {
            section: 'About', items: [
                { name: 'Newsroom', link: '/' },
                { name: 'Learn about new features', link: '/' },
                { name: 'Letter from our founders', link: '/' },
                { name: 'Careers', link: '/' },
                { name: 'Investors', link: '/' },
                { name: 'Airbnb Luxe', link: '/' },

            ]
        },
    ]
    return <div>
        {footerItems.map((item) => {
            return <div key={item.section}>
                <h3>{item.section}</h3>
                <ul>
                    {item.items.map((i) => {
                        return <li key={i.link}>
                            <a href={i.link}>{i.name}</a>
                        </li>
                    })}
                </ul>
            </div>
        })}

    </div>;
};

export default Footer;
