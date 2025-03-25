import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Tag from './ui/Tag';

interface ContractModalProps {
  title: string;
  type: string;
  description: string;
}

const ContractModal = ({ title, type, description }: ContractModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-50 sm:max-w-[425px]">
        <section className="my-5 rounded-lg border-2 bg-white p-6">
          <DialogHeader className="gap-5">
            <div>
              <Tag text={type} colour="text-blue-500" />
            </div>
            <div>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </div>
          </DialogHeader>
          <div className="gap-4 py-4">
            <div className="items-center gap-4">
              <h1>What this smart contract does:</h1>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p>Hello</p>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ContractModal;
