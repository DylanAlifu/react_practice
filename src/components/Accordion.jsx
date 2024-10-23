import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Video Game",
    content:
      "Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.",
  },
  {
    title: "Basketball",
    content:
      "Wardell Stephen Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association. He plays as a point guard and is considered by some to be the greatest shooter in NBA history.",
  },
  {
    title: "Football",
    content:
      "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleIsOpen = (index) => {
    openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
  };

  return (
    <div className="w-[25%] m-auto mt-10">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          data={item}
          isOpen={index === openIndex}
          setIsOpen={() => handleIsOpen(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
