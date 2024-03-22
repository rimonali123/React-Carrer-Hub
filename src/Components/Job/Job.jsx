

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className=" card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-ghost w-32 border-2 rounded-4 border-gray-600">{remote_or_onsite}</button>
                    <button className="btn btn-ghost w-32 border-2 rounded-4 border-gray-600">{job_type}</button>
                </div>
                <button className="btn btn-primary w-32">Buy Now</button>
            </div>
        </div>
    );
};

export default Job;