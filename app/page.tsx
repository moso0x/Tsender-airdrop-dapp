import Image from "next/image";
import  {RainbowKitProvider, ConnectButton }  from "@rainbow-me/rainbowkit"
import Header from "@/components/Header";
import AirdropForm from "@/components/AirdropForm";
export default function Home() {
  return (
    <div className="">
     <Header/>
     <AirdropForm/>
    </div>
  );
}
