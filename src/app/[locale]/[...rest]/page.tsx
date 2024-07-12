import { notFound } from 'next/navigation';

// Catching unknown routes and display not-found page
const CatchAllPage = () => notFound();

export default CatchAllPage;
