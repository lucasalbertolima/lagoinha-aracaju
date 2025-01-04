import { IconType } from "react-icons";

type GcsListProps = {
  title: string;
  icon: IconType;
  location: string;
  boss: string;
  contact: string;
  estilo: string;
};

const GcsList: React.FC<GcsListProps> = ({ title, icon: Icon, location, contact, boss, estilo }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md mb-4 p-4 ${estilo}`}>
      <div className="flex flex-wrap justify-around items-start text-left">
          <div className="w-5/6">
            <h3 className="text-[#FFD324] font-bold text-3xl lg:text-4xl">{title}</h3>
          </div>
          <Icon size={30} />
      </div>
      <p className="px-4 py-2 text-justify">{location}</p>
      <p className="px-4 py-2 text-justify">{boss}</p>
      <p className="px-4 py-2 text-justify">{contact}</p>
    </div>
  );
};

export default GcsList;
