const job_model = require("../model/job");

const create_job = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobtype,
            position,
            company
        } = req.body;
        const userid = req.id;
         console.log(req.body);

        if (!title || !description || !requirements || !salary || !location || !jobtype || !position || !company) {
            return res.status(400).json({
                message: "something is missing",
                success: false
            });

        };
        const splitRequirement = requirements.split(",").map(item => item.trim());
        const job = await job_model.create({
            title, description, jobtype, position, company, location, salary, requirements: splitRequirement, created_by: userid
        });
        return res.status(201).json({
            message: "job created",
            success: true,
            job
        })

    } catch (error) {
        console.log(error)
    }

};

const getAllJobs = async (req, res) => {
    try {
        const jobs = await job_model.find().populate("company").sort({ createdAt: -1 });
        if (!jobs.length) {
            return res.status(404).json({
                message: "not jobs find",
                success: false
            });
        };
        return res.status(200).json({
            message: "Jobs fetched successfully",
            success: true,
            jobs
        })
    } catch (error) {
        console.log(error)
    }
};

const getjob_ById = async (req, res) => {
    try {
        const jobid = req.params.id;
        const job = await job_model.findById(jobid)
            .populate("company")
            .populate({
                path: "applications",
                populate: {
                    path: "applicant",
                    model: "user"
                }
            });
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            })
        }
        return res.status(200).json({
            success: true,
            job
        });


    } catch (error) {
        console.log(error)
    }
};

const admin_job = async (req, res) => {
    try {
        const userid = req.id;
        const job = await job_model.find({ created_by: userid }).populate("company").sort({ createdAt: -1 });
        if (!job.length) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            })
        }
        return res.status(200).json({
            success: true,
            job
        });


    } catch (error) {
        console.log(error)
    }
};
const update_job = async (req, res) => {
    try {
        const id = req.params.id;
        const update = {};
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobtype,
            position,
            company
        } = req.body;
       
        if (title) { update.title = title };
        if (description) { update.description = description };
        if (requirements) {
            update.requirements = requirements
                .split(",")
                .map(item => item.trim());
        }
        if (salary) { update.salary = salary };
        if (jobtype) { update.jobtype = jobtype };
        if (position) { update.position = position };
        if (company) { update.company = company };
        if (location) {
            update.location = location;
        }
        const job = await job_model.findByIdAndUpdate(id, update, { new: true });
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });

        }
        return res.status(200).json({
            success: true,
            message: "Job updated successfully",
            job
        });


    } catch (error) {
        console.log(error)
    }

};
module.exports = { create_job, admin_job, getjob_ById, update_job, getAllJobs };
