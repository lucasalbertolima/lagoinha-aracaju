import { IconType } from "react-icons";

type LagoinhaHomeProps = {
  title: string;
  icon: IconType;
  description: string;
  estilo: string;
};

const LagoinhaHome: React.FC<LagoinhaHomeProps> = ({ title, icon: Icon, description, estilo }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md mb-4 p-4 ${estilo}`}>
      <div className="flex flex-wrap justify-around items-start text-left">
          <div className="w-5/6">
            <h3 className="text-[#FFD324] font-bold text-3xl lg:text-4xl">{title}</h3>
          </div>
          <Icon size={30} />
      </div>
      <p className="p-4 text-justify">{description}</p>
    </div>
  );
};

export default LagoinhaHome;
