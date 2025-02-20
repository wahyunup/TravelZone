const Invoice = ({price}) => {

  return (
    <div className="bg-black/20 fixed flex justify-center items-end inset-0 z-20">
      <div className=" bg-white p-4">
        <p>asdasd</p>
        <p>{price}</p>
        <button>travel detail</button>
        <button>remove</button>
      </div>
    </div>
  );
};

export default Invoice;
