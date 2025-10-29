import Header from '@/components/Header';
import InvitationForm from '@/components/InvitationForm';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <InvitationForm />
          
          {/* Placeholder for future invitation history */}
          <div className="mt-8 rounded-xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Invitation History
            </h3>
            <p className="text-sm text-muted-foreground">
              Recent admin invitations will appear here
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
