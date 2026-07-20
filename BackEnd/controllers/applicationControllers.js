const application_model = require("../model/application");
const job_model = require("../model/job");

const apply_job = async (req, res) => {
    try {
        const jobId = req.params.id;
        const userId = req.id;

        if (!jobId) {
            return res.status(400).json({
                message: "something is missing",
                success: false,
            });
        }

        const isApplicationExsit = await application_model.findOne({
            job: jobId,
            applicant: userId
        });

        if (isApplicationExsit) {
            return res.status(400).json({
                message: "you are already applied for this job",
                success: false,
            });
        }

        const isJobExist = await job_model.findById(jobId);

        if (!isJobExist) {
            return res.status(400).json({
                message: "Job not found",
                success: false,
            });
        }

        const new_application = await application_model.create({
            job: jobId,
            applicant: userId
        });

        // Ye tabhi chalega jab job schema me applications array ho
        isJobExist.applications.push(new_application._id);
        await isJobExist.save();

        return res.status(201).json({
            message: "job applied successfully",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
};

const getAppliedJobs = async (req, res) => {
    try {

        const userId = req.id;
        const jobId = req.params.jobId;

        const application = await application_model
            .find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: "job",
                populate: {
                    path: "company"
                }
            });

        if (application.length === 0) {
            return res.status(400).json({
                message: "no application",
                success: false,
            });
        }

        return res.status(200).json({
            application,
            success: true
        });

    } catch (error) {
        console.log(error);
    }
};

const getApplicants = async (req, res) => {
    try {

        const jobId = req.params.id;

        const job = await job_model.findById(jobId).populate({
            path: "applications",
            options: {
                sort: { createdAt: -1 }
            },
            populate: {
                path: "applicant"
            }
        });

        if (!job) {
            return res.status(400).json({
                message: "no job exist",
                success: false,
            });
        }

        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {
        console.log(error);
    }
};

const updateApplicant = async (req, res) => {
    try {

        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return res.status(400).json({
                message: "status is required",
                success: false,
            });
        }

        const application = await application_model.findById(applicationId);

        if (!application) {
            return res.status(400).json({
                message: "application is not found",
                success: false,
            });
        }

        application.status = status.toLowerCase();

        await application.save();

        return res.status(200).json({
            application,
            success: true
        });

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    apply_job,
    getAppliedJobs,
    getApplicants,
    updateApplicant
};