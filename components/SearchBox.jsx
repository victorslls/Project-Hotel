"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

import { MapPin } from "lucide-react";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

//components
import DatePicker from "./DatePicker";
import GuestSelect from "./GuestSelect";

const SearchBox = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)} 
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[480px] bg-white max-h-max flex flex-col boder
     border-outline rounded-[20px] p-10 "
    >
      {/**input, claendar, date picker */}
      <div className="mb-[20px]">
        {/**label */}
        <Label htmlFor="destination">Onde você está indo?</Label>
        {/**input & icon */}
        <div className="relative flex  items-center mb-[20px]">
          <Input id="destination" placeholder='tente "Cingapura"' />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>
      </div>
      {/**date pickers */}
      <div className="flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0">
        {/**check in */}
        <div className="flex flex-col flex-1">
          <Label>Check-in</Label>
          <DatePicker />
        </div>
        {/**check out */}
        <div className="flex flex-col flex-1">
          <Label>Check out</Label>
          <DatePicker />
        </div>
      </div>

      {/**select, checkbox, btn */}
      <div className="flex flex-col">
        {/**select */}
        <div className="felx flex-col flex-1 gap-x-3 mb-[24px]">
          <Label className="my-3">Guests</Label>
          <GuestSelect />
        </div>
        {/**checkbox */}
        <div className="flex items-center gap-x-3 mb-[24px]">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className=" font-semibold mb-0">
            Pagar ao fazer o check-in?
          </Label>
        </div>
        {/*btn */}
        <Button
          size="lg"
          className="bg-orange p-7 text-white hover:bg-orange/90  "
        >
          Pesquisar hotel
        </Button>
      </div>
    </motion.div>
  );
};

export default SearchBox;
