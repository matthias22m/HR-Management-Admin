import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import Header from "../components/Header";
import { GoDotFill } from "react-icons/go";
import JobCard from "../components/JobCard";
import { useState } from "react";
import AddJobModal from "../components/AddJobModal";

const Jobs = () => {
  const [addJobOpen, setAddJobOpen] = useState(false);
  const onClose = () => {
    setAddJobOpen(false);
  };
  return (
    <>
      <AddJobModal onClose={onClose} isOpen={addJobOpen} />
      <Header title="Jobs" subTitle="Show All Jobs" />
      <section className="pl-8 pt-4 mb-10 pr-8 w-[98%] border rounded-lg">
        <div className="h-20 w-[100%] flex items-center justify-between">
          <div className="w-80 h-[60%] border rounded-md flex items-center">
            <label htmlFor="search-input">
              <CiSearch size={25} />
            </label>
            <input
              className="outline-0 pl-2 pr-2 w-[100%]"
              id="search-input"
              placeholder="Search..."
              type="text"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setAddJobOpen(true)}
              className="flex justify-center items-center gap-1 w-48 h-10 rounded-lg text-white bg-[#7152F3]"
            >
              <IoAddCircleOutline size={20} />
              Add New Job
            </button>
          </div>
        </div>

        <div className="flex  justify-between mb-6">
          <div className="w-[32%] pl-4 pr-4 border rounded-lg">
            <div className="flex h-10 items-center gap-2">
              <GoDotFill color="#EFBE12" />
              Active Jobs
            </div>
            <JobCard
              remote={true}
              fullTime={true}
              jobTitle="UI/UX Designer"
              category="Design"
            />
            <JobCard
              fullTime={true}
              jobTitle="Sr. UX Researcher"
              category="Design"
            />
            <JobCard fullTime={true} jobTitle="BDM" category="Sales" />
            <JobCard fullTime={true} jobTitle="React JS" category="Developer" />
          </div>
          <div className="w-[32%] pl-4 pr-4 border rounded-lg">
            <div className="flex h-10 items-center gap-2">
              <GoDotFill color="#F45B69" />
              Inactive Jobs
            </div>
            <JobCard
              remote={true}
              fullTime={true}
              jobTitle="HR Executive"
              category="HR"
            />
            <JobCard
              fullTime={true}
              jobTitle="Python Developer"
              category="Developer"
            />
          </div>
          <div className="w-[32%] pl-4 pr-4 border rounded-lg">
            <div className="flex h-10 items-center gap-2">
              <GoDotFill color="#3FC28A" />
              Completed Jobs
            </div>
            <JobCard
              remote={true}
              fullTime={true}
              jobTitle="UI/UX Designer"
              category="Design"
            />
            <JobCard
              fullTime={true}
              jobTitle="Sr. UX Researcher"
              category="Design"
            />
            <JobCard fullTime={true} jobTitle="BDM" category="Sales" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
