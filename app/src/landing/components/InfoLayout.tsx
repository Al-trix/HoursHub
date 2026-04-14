import { PiUsersThreeBold } from 'react-icons/pi';
import { FiCalendar } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { IoMdNotifications } from 'react-icons/io';
import InfoCard from './InfoCard';
import TitleLayout from './TitleLayout';

const InfoLayout = () => {
  return (
    <section className="container mx-auto mt-20">
      <TitleLayout
        subTitle="The framework"
        title="Intuitive and powerful"
        color="text-teal-600"
      />

      <div className="grid grid-cols-4  gap-5 mt-8">
        <InfoCard
          title="Make schedules easy"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque quam ab eaque ipsa vel aperiam quae id a sint, dolore aspernatur aut officiis consequuntur voluptatibus aliquam nesciunt amet iusto?"
          color="bg-teal-600"
          span="3"
          icon={<FiCalendar className="text-teal-300 text-xl" />}
          isFooter
        >
          <div className="flex items-center text-xs gap-2">
            <span className="px-3 uppercase py-1 bg-teal-600/20 text-teal-600 rounded-full">
              active logic
            </span>
            <span className="px-2 py-1 bg-gray-600/20 text-white rounded-full">
              v1.0
            </span>
          </div>
        </InfoCard>

        <InfoCard
          title="Mannage your team"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          color="bg-purple-600"
          span="1"
          icon={<PiUsersThreeBold className="text-purple-300 text-xl" />}
          positionX="-left-80"
          isFooter
          positionY="-bottom-70"
        >
          <div className="flex items-center text-xs ">
            <span className="p-2 bg-purple-600/20 text-purple-600 rounded-full"></span>
            <span className="p-2 bg-purple-600/20 text-purple-600 rounded-full"></span>
            <span className="p-2 bg-purple-600/20 text-purple-600 rounded-full"></span>
          </div>
        </InfoCard>

        <InfoCard
          title="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          color="bg-pink-600"
          span="2"
          icon={<IoMdNotifications className="text-pink-300 text-xl" />}
          positionX="-left-5"
          positionY="-top-90"
        />

        <InfoCard
          title="Dashboards & Analytics"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          color="bg-yellow-600"
          span="2"
          icon={<MdDashboard className="text-yellow-300 text-xl" />}
          positionX="-right-40"
          positionY="-top-90"
        />
      </div>
    </section>
  );
};

export default InfoLayout;
