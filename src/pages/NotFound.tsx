
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 rounded-lg border glass-card text-center animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-display font-bold mb-3">404</h1>
        <p className="text-xl mb-6 text-muted-foreground">This page doesn't exist</p>
        <p className="text-sm text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
