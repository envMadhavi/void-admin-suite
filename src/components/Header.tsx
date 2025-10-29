import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-purple">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Super Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage admin invitations
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
