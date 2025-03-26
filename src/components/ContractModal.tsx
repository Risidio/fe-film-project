"use client";

import React, { useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tag from "./ui/Tag";

interface ContractModalProps {
  title: string;
  type: string;
  description: string;
  keyFeatures?: string[];
  useCases?: string[];
  standards?: string[];
  chainSupport?: string[];
}

const ContractModal = ({
  title,
  type,
  description,
  keyFeatures,
  useCases,
  standards,
  chainSupport,
}: ContractModalProps) => {
  const activeTabRef = useRef("overview");

  const handleTabChange = (tab: string) => {
    activeTabRef.current = tab;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-gray-50">
        <DialogHeader className="gap-5">
          <Tag text={type} colour="text-blue-500" />
          <div>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <section className="border-2 p-6 rounded-xl flex flex-col gap-10">
              <div className="h-fit justify-between items-center">
                <p className="text-sm font-semibold mb-2">Key functions:</p>
                <div className=" w-fit-content flex flex-wrap gap-2 text-sm">
                  <ul className=" px-5">
                    {keyFeatures &&
                      keyFeatures.map((feature) => (
                        <li key={feature} className="list-disc">
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="h-fit justify-between items-center">
                <p className="text-sm font-semibold mb-2">Use cases:</p>
                <div className=" w-fit-content flex flex-wrap gap-2 text-sm">
                  <ul className=" px-5">
                    {useCases &&
                      useCases.map((feature) => (
                        <li key={feature} className="list-disc">
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:justify-between mt-5 gap-5">
              <div className="text-sm border-2 p-6 rounded-xl flex-1">
                <h5 className="font-semibold mb-2 ">Standards</h5>
                {standards &&
                  standards.map((standard) => (
                    <Tag key={standard} text={standard} />
                  ))}
              </div>
              <div className="text-sm border-2 p-6 rounded-xl flex-1">
                <h5 className="font-semibold mb-2 ">Chain Support</h5>
                {chainSupport &&
                  chainSupport.map((chain) => <Tag key={chain} text={chain} />)}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="documents">
            <section className="border-2 p-6 rounded-xl flex flex-col gap-10">
              <h2 className="text-sm font-bold">Associated documents</h2>
            </section>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ContractModal;
