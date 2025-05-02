"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function WalletConnectButton() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleConnect = (walletType: string) => {
    setIsConnecting(true)
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false)
      setIsOpen(false)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="px-8 gap-2">
          <Wallet className="h-5 w-5" /> Start Verifying Skills
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Choose a wallet to connect and start verifying your skills on the blockchain.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="flex justify-between items-center"
            onClick={() => handleConnect("pera")}
            disabled={isConnecting}
          >
            <span>Pera Wallet</span>
            {isConnecting ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary"></div>
            ) : (
              <img src="/placeholder.svg?height=20&width=20" alt="Pera Wallet" className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="outline"
            className="flex justify-between items-center"
            onClick={() => handleConnect("myalgo")}
            disabled={isConnecting}
          >
            <span>MyAlgo Wallet</span>
            {isConnecting ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary"></div>
            ) : (
              <img src="/placeholder.svg?height=20&width=20" alt="MyAlgo Wallet" className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="outline"
            className="flex justify-between items-center"
            onClick={() => handleConnect("walletconnect")}
            disabled={isConnecting}
          >
            <span>WalletConnect</span>
            {isConnecting ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary"></div>
            ) : (
              <img src="/placeholder.svg?height=20&width=20" alt="WalletConnect" className="h-5 w-5" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
