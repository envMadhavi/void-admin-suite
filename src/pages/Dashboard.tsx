import Header from '@/components/Header';
import InvitationForm from '@/components/InvitationForm';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <InvitationForm />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
