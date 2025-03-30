import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [isResetPassword, setIsResetPassword] = useState(false);

  const handleContinue = () => {
    // Handle email submission
    console.log("Email submitted:", email);
  };

  const handleSocialLogin = (provider: string) => {
    // Handle social login
    console.log("Social login with:", provider);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            {isResetPassword ? "Reset Password" : isSignUp ? "Create Account" : "Welcome Back!"}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-4">
          {!isResetPassword ? (
            <>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary/20 transition-colors"
                  onClick={() => handleSocialLogin("google")}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary/20 transition-colors"
                  onClick={() => handleSocialLogin("microsoft")}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="#F25022" d="M1 1h10v10H1z"/>
                    <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                    <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                    <path fill="#FFB900" d="M13 13h10v10H13z"/>
                  </svg>
                  Continue with Microsoft
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary/20 transition-colors"
                  onClick={() => handleSocialLogin("apple")}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="currentColor" d="M14.94 5.19A4.38 4.38 0 0 0 16 2.5a4.38 4.38 0 0 0-2.91 1.52 4.1 4.1 0 0 0-1.02 2.61 3.62 3.62 0 0 0 2.87-1.44zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-1.98c-1.56-.16-3.05.91-3.84.91-.79 0-2-.89-3.3-.86-1.7.02-3.26.99-4.13 2.51-1.77 3.06-.45 7.58 1.26 10.06.84 1.21 1.84 2.57 3.15 2.52 1.26-.05 1.74-.81 3.26-.81 1.52 0 1.95.81 3.28.79 1.35-.03 2.21-1.23 3.04-2.44.96-1.4 1.35-2.75 1.37-2.82a4.42 4.42 0 0 1-2.69-4.04z"/>
                  </svg>
                  Continue with Apple
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary/20 transition-colors"
                  onClick={() => handleSocialLogin("phone")}
                >
                  <Phone className="w-6 h-6" />
                  Continue with Phone
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
                <Button className="w-full h-12 bg-primary hover:bg-primary/90" onClick={handleContinue}>
                  Continue
                </Button>
              </div>
              <div className="text-center text-sm">
                <button
                  onClick={() => setIsResetPassword(true)}
                  className="text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="text-center text-sm">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-primary hover:underline"
                >
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-center text-muted-foreground">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
              <Button className="w-full h-12 bg-primary hover:bg-primary/90" onClick={handleContinue}>
                Send Reset Link
              </Button>
              <div className="text-center">
                <button
                  onClick={() => setIsResetPassword(false)}
                  className="text-sm text-primary hover:underline"
                >
                  Back to login
                </button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 