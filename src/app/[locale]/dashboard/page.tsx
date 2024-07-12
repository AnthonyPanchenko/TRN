import dynamic from 'next/dynamic';

const DashboardApp = dynamic(() => import('../../../DashboardApp'), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <main className="some">
      <DashboardApp />
    </main>
  );
}
