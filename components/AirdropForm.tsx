"use client"

import { useState } from 'react'
import { InputField } from './ui/InputField'
import { useChainId, useReadContract, useAccount } from 'wagmi'
import { chainsToTSender, tsenderAbi, erc20Abi } from '@/constants'
import { config } from "config"

const Airdrop = () => {
  const [recipients, setRecipients] = useState("")
  const [tokenAddress, setTokenAddress] = useState("")
  const [amount, setAmount] = useState("")
  const chainId = useChainId()
  const { address } = useAccount() // Added to get account address

  async function getApprovedAmount(tSenderAddress: string | null): Promise<number> {
    if (!tSenderAddress) {
      alert("No address found, Please use a supported chain")
      return 0
    }
    
    if (!tokenAddress || !address) {
      alert("Please provide token address and ensure wallet is connected")
      return 0
    }

    const response = await useReadContract({
      abi: erc20Abi,
      address: tokenAddress as `0x${string}`,
      functionName: "allowance",
      args: [address, tSenderAddress as `0x${string}`]
    })

    return Number(response.data || 0)
  }

  async function handleSubmit() {
    const tSenderAddress = chainsToTSender[chainId]?.tsender
    const approvedAmount = await getApprovedAmount(tSenderAddress)
    console.log(approvedAmount)
  }

  return (
    <div className=''>
      <InputField 
        label="Token Address"
        placeholder="0x"
        value={tokenAddress}
        onChange={setTokenAddress}
      />
      <InputField 
        label="Recipient"
        placeholder="0x12223443, 0x233546474"
        value={recipients}
        onChange={setRecipients}
        large={true}
      />
      <InputField 
        label="Amount"
        placeholder="100, 200, 300 "
        value={amount}
        onChange={setAmount}
      />
      <button 
        className="flex mx-auto
                  bg-gradient-to-r from-blue-500 to-purple-600
                  hover:from-blue-600 hover:to-purple-700
                  active:from-blue-700 active:to-purple-800
                  text-white font-semibold
                  text-sm md:text-base
                  rounded-full
                  px-6 py-3
                  mt-4
                  transition-all duration-300 ease-in-out
                  transform hover:-translate-y-0.5
                  shadow-lg hover:shadow-xl
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
        onClick={handleSubmit}
      >
        Send Tokens
      </button>
    </div>
  )
}

export default Airdrop