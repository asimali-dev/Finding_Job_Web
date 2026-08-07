const company_model = require("../model/company");
const getdatauri = require("../utils/datauri");
const cloudinary = require("../utils/cloudinary");
const registerCompany = async (req, res) => {
    try {
        let { name, description, website, location } = req.body;
        const file = req.file;
        const fileuri = getdatauri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileuri.content);
        if (!name) {
            return res.status(400).json({
                message: "company name required",
                success: false
            });
        };
        const company = await company_model.findOne({ name });
        if (company) {
            return res.status(400).json({
                message: "company already exist",
                success: false
            });
        };
        const userid = req.id
        const newCompany = await company_model.create({
            name,
            description,
            website,
            location,
            userid,
            logo: cloudResponse.secure_url,
        });
        console.log("Saved:", newCompany);
        return res.status(201).json({
            success: true,
            message: "Company registered",
            company: newCompany
        });

    } catch (error) {
        console.log(error)
    }
};

const get_companies = async (req, res) => {
    try {
        const userid = req.id;
        const companies = await company_model.find({ userid });
        return res.status(201).json({
            message: "company found",
            companies,
            success: true
        });



    } catch (error) {
        console.log(error)
    }
};

const get_companyById = async (req, res) => {
    try {
        const company_id = req.params.id;
        const company = await company_model.findById(company_id);
        if (!company) {
            return res.status(404).json({
                message: "company not found",
                success: false
            })
        }
        return res.status(200).json({
            success: true,
            company
        });

    } catch (error) {
        console.log(error)
    }

};

const updateCompany = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, website, location } = req.body;

        const update = {};
        if (name) { update.name = name };
        if (description) { update.description = description };
        if (location) { update.location = location };
        if (website) { update.website = website };
        if (req.file) {
            const fileUri = getdatauri(req.file);

            const cloudResponse = await cloudinary.uploader.upload(
                fileUri.content
            );

            update.logo = cloudResponse.secure_url;
        }

        const updated_company = await company_model.findByIdAndUpdate(id, update, { new: true });
        if (!updated_company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }
        return res.status(200).json({
            success: true,
            updated_company
        });


    } catch (error) {
        console.log(error)
    }
};
const getAllCompanies = async (req, res) => {
    try {
        const companies = await company_model.find();

        return res.status(200).json({
            success: true,
            companies,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { registerCompany, get_companyById, updateCompany, get_companies, getAllCompanies };