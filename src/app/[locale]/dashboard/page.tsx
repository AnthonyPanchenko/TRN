import dynamic from 'next/dynamic';

const DashboardApp = dynamic(() => import('../../../DashboardApp'), {
  ssr: false,
  loading: () => <p>Loading DashboardApp...</p>,
});

export default function DashboardPage() {
  return (
    <div className="some">
      <DashboardApp />
    </div>
  );
}
