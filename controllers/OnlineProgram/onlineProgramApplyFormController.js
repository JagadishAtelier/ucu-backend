const OnlineProgramApplyForm = require("../../Model/OnlineProgramModel/OnlineProgramApplyForm");
const bcrypt = require("bcryptjs");

// ========================
// CREATE - Submit Application
// ========================
exports.submitApplication = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      prefix,
      mobileNumber,
      email,
      gender,
      maritalStatus,
      dateOfBirth,
      category,
      educationCompleted,
      interestedIn,
      appliedVia,
      wantsEducationLoan,
      residentialCountry,
      state,
      city,
      password,
      contactAuthorization,
    } = req.body;

    if (!firstName || !lastName || !prefix || !mobileNumber || !email || !gender || !maritalStatus || !dateOfBirth || !category || !educationCompleted || !interestedIn || !residentialCountry || !state || !city || !password) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    // Check for duplicate email
    const existingApplicant = await OnlineProgramApplyForm.findOne({ email });
    if (existingApplicant) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newApplication = new OnlineProgramApplyForm({
      firstName,
      middleName,
      lastName,
      prefix,
      mobileNumber,
      email,
      gender,
      maritalStatus,
      dateOfBirth,
      category,
      educationCompleted,
      interestedIn,
      appliedVia,
      wantsEducationLoan,
      residentialCountry,
      state,
      city,
      password: hashedPassword,
      contactAuthorization,
    });

    await newApplication.save();

    return res.status(201).json({
      message: "Application submitted successfully",
      application: newApplication,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// ========================
// READ - Get All Applications
// ========================
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await OnlineProgramApplyForm.find();
    return res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// ========================
// READ - Get Single Application by ID
// ========================
exports.getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await OnlineProgramApplyForm.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    return res.status(200).json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// ========================
// UPDATE - Update Application by ID
// ========================
exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    // If password is updated, hash it
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updatedApplication = await OnlineProgramApplyForm.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    return res.status(200).json({
      message: "Application updated successfully",
      application: updatedApplication,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// ========================
// DELETE - Delete Application by ID
// ========================
exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedApplication = await OnlineProgramApplyForm.findByIdAndDelete(id);
    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }
    return res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
