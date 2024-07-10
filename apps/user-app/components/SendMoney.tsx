"use client"
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import sendMoneyP2P from "../app/lib/actions/p2ptransfer";

export default function SendMoneyCard() {
    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");
    return (
        <div className="bg-white/50 py-8 px-10 rounded-xl h-fit">
            <p className="text-2xl text-center font-bold mb-5">Send Money</p>
            <TextInput value={number} label="Reciver Number" placeholder="number" onChange={(value) => {
                setNumber(value)
            }} />
            <TextInput value={amount} label="Amount" placeholder="amount" onChange={(value) => {
                setAmount(value)
            }} />
            <div className="text-center mt-5">
                <Button onClick={async () => {
                   const response = await sendMoneyP2P(number, Number(amount) * 100);
                   alert(response.message);
                   setNumber('');
                   setAmount('');
                }}>
                Send Money
                </Button>
            </div>
        </div>
    )
}