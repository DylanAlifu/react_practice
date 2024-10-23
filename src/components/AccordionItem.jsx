const AccordionItem = ({ data, isOpen, setIsOpen }) => {
  return (
    <div>
      <div className="border border-black">
        <div
          className={`text-xl font-semibold ${
            isOpen ? "bg-slate-300" : "bg-slate-100"
          }  p-2 rounded-sm flex justify-between cursor-pointer`}
          onClick={setIsOpen}
        >
          <span>{data.title}</span>
          <span>⬇</span>
        </div>
        {isOpen && (
          <div className="p-2">
            <p>{data.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
