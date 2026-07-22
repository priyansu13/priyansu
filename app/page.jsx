import { PortfolioClient } from '@/components/PortfolioClient';
// Home page and structured SEO data.
export default function Home() { const schema = { '@context': 'https://schema.org', '@type': 'Person', name: 'Priyansu Kumar', jobTitle: 'Data Analyst', email: 'priyansukumar38517@gmail.com', address: { '@type': 'PostalAddress', addressLocality: 'Dhanbad', addressCountry: 'IN' } }; return <><PortfolioClient/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/></>; }
