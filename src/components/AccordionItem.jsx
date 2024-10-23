const AccordionItem = ({ data, isOpen, setIsOpen }) => {
  return (
    <div>
      <div className="border border-black">
        <div
          className={`text-xl font-semibold ${
            isOpen ? "bg-slate-300" : "bg-slate-100"
          } p-2 rounded-sm flex justify-between cursor-pointer transition-all duration-200`}
          onClick={setIsOpen}
        >
          <span>{data.title}</span>
          <span
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            ⇢
          </span>
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-2">
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
