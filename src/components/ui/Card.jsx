const Card = ({price, tittle, image, avatar, href}) => {
  return (
    <a className="overflow-hidden h-[480px] flex flex-col rounded-3xl border border-slate-100" href={`/bookingdetail/${href}`}>
      <div className="rounded-3xl overflow-hidden h-full">
        <img
          className="hover:scale-[1.1] transition-all duration-500 w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="py-7 px-6 flex justify-between items-center">
        <div>
          <p className="font-bold text-[18px]">{tittle}</p>
          <p className="text-[16px]"><span className="font-semibold">Rp.{price}</span>/hari</p>
        </div>
        <div className="overflow-hidden w-[45px] h-[45px] rounded-full">
          <img
            src={avatar}
            alt=""
          />
        </div>
      </div>
    </a>
  );
};

export default Card;
