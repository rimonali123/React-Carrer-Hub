import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id)
    const job = jobs.find(job => job.id === intId)
    console.log(job)
    return (
        <div>
            <h2>Job Details : </h2>
            <div className="grid grid-col lg:grid-cols-4 gap-6">
                <div className="border col-span-3 px-2">
                    <h2 className=" txt-4xl">data coming here</h2>
                </div>
                <div className="border col-span-1 px-2">
                    <h2 className=" txt-4xl">Some Things</h2>
                    <button className="btn btn-primary w-full ">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;