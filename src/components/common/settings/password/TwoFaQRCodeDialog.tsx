"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PasswordInput } from '@/components/form/password-input';
import QRCode from 'react-qr-code';
import CopyButton from '@/components/ui/copy-button';

interface TwoFaQRCodeDialogProps {
  verifyURI: string | null;
  onShowQRCode: (password: string) => void;
}

export default function TwoFaQRCodeDialog({ verifyURI, onShowQRCode }: TwoFaQRCodeDialogProps) {
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleShowQRCode = () => {
    onShowQRCode(password);
    setPassword('');
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Scan QR Code</DialogTitle>
        </DialogHeader>
        {verifyURI ? (
          <div className="flex flex-col items-center gap-4">
            <QRCode value={verifyURI} />
            <CopyButton textToCopy={verifyURI} />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <PasswordInput
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleShowQRCode}>Show QR Code</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
