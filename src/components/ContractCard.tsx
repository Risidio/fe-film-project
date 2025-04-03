import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Tag from './ui/Tag';

import { IoRocketOutline } from 'react-icons/io5';
import ContractModal from './ContractModal';

import Link from 'next/link';

interface ContractProps {
  title: string;
  type: string;
  description: string;
  functions: string[];
  keyFeatures?: string[];
  useCases?: string[];
  standards?: string[];
  chainSupport?: string[];
}

export function SmartContractCard({
  title,
  type,
  description,
  functions,
  keyFeatures,
  useCases,
  standards,
  chainSupport,
}: ContractProps) {
  return (
    <Card className="h-fit transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="mb-5">
          <Tag text={type} colour="text-blue-500" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="h-10">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-32 items-center justify-between border-t-2 py-6">
          <p className="mb-2 text-sm font-semibold">Key functions:</p>
          <div className="w-fit-content flex flex-wrap gap-2">
            {functions.map((func) => (
              <Tag key={uuidv4()} text={func} />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-10 flex items-center justify-between">
        <ContractModal
          title={title}
          type={type}
          description={description}
          keyFeatures={keyFeatures}
          useCases={useCases}
          standards={standards}
          chainSupport={chainSupport}
        />
        <Link href={`/smart-contracts/${encodeURIComponent(title)}`} passHref>
          <Button>
            <IoRocketOutline />
            Deploy
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
