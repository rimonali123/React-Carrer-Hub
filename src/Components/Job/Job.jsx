import { MdLocationOn } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className=" bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="p-4">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-5">
                    <button className="btn btn-ghost w-32 border-2 rounded-4 border-gray-600">{remote_or_onsite}</button>
                    <button className="btn btn-ghost w-32 border-2 rounded-4 border-gray-600">{job_type}</button>
                </div>
                <div className="flex gap-10">
                    <h2 className="flex gap-2 items-center"><MdLocationOn /> {location}</h2>
                    <h2 className="flex gap-2 items-center"><FaHandHoldingUsd /> {salary}</h2>
                </div>
                <Link to={`/job/${id}`}>
                    <button className="btn btn-primary w-32 mt-2">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Job;