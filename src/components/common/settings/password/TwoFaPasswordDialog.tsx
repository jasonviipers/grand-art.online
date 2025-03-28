"use client";
import { ReactNode, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { PasswordInput } from '@/components/form/password-input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface TwoFaPasswordDialogProps {
  isEnabling: boolean;
  isPending: boolean;
  onSubmit: (password: string) => void;
  children: ReactNode;
}

export default function TwoFaPasswordDialog({
  isEnabling,
  isPending,
  onSubmit,
  children,
}: TwoFaPasswordDialogProps) {
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = () => {
    onSubmit(password);
    setPassword('');
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {children}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEnabling ? 'Enable 2FA' : 'Disable 2FA'}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <PasswordInput
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button disabled={isPending} onClick={handleSubmit}>
            {isPending ? <Loader2 size={16} className="animate-spin" /> : isEnabling ? 'Enable' : 'Disable'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
