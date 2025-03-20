import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Tag from "./ui/Tag";

import { IoRocketOutline } from "react-icons/io5";

interface ContractProps {
  title: string;
  type: string;
  description: string;
  functions: string[];
}

export function SmartContractCard({
  title,
  type,
  description,
  functions,
}: ContractProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="mb-5">
          <Tag text={type} colour="text-blue-500" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="h-32 lg:h-10">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border-t-2 py-2">
          <p className="text-sm font-semibold mb-2">Key functions:</p>
          <div className=" w-fit-content flex flex-wrap gap-2">
            {functions.map((func) => (
              <Tag text={func} />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View</Button>
        <Button>
          <IoRocketOutline />
          Deploy
        </Button>
      </CardFooter>
    </Card>
  );
}
