"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Check, Copy, Wallet } from "lucide-react";

interface CopyAddressProps {
  address: string;
}

const CopyAddress = ({ address }: CopyAddressProps) => {
  const [copied, setCopied] = useState(false);

  // Format address to display first and last few characters
  const formatAddress = (addr: string) => {
    if (addr.length <= 10) return addr;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-1 mt-1">
      <Wallet size={16} className="text-[#385184]" />
      <span className="text-gray-600">{formatAddress(address)}</span>
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-full" onClick={handleCopy}>
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-gray-500" />}
              <span className="sr-only">Copy address</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p className="text-xs">{copied ? "Copied!" : "Copy address"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CopyAddress;
