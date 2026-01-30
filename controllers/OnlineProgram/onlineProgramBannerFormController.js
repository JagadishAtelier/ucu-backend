const OnlineProgramBannerForm = require(
  "../../Model/OnlineProgramModel/OnlineProgramForm"
);

/* =========================
   CREATE
========================= */
exports.createBannerForm = async (req, res) => {
  try {
    const form = await OnlineProgramBannerForm.create(req.body);

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: form,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit form",
      error: error.message,
    });
  }
};

/* =========================
   GET ALL
========================= */
exports.getAllBannerForms = async (req, res) => {
  try {
    const forms = await OnlineProgramBannerForm.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: forms.length,
      data: forms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch forms",
      error: error.message,
    });
  }
};

/* =========================
   GET BY ID
========================= */
exports.getBannerFormById = async (req, res) => {
  try {
    const form = await OnlineProgramBannerForm.findById(req.params.id);

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    res.status(200).json({
      success: true,
      data: form,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch form",
      error: error.message,
    });
  }
};

/* =========================
   UPDATE
========================= */
exports.updateBannerForm = async (req, res) => {
  try {
    const updatedForm =
      await OnlineProgramBannerForm.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

    if (!updatedForm) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Form updated successfully",
      data: updatedForm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update form",
      error: error.message,
    });
  }
};

/* =========================
   DELETE
========================= */
exports.deleteBannerForm = async (req, res) => {
  try {
    const deletedForm =
      await OnlineProgramBannerForm.findByIdAndDelete(
        req.params.id
      );

    if (!deletedForm) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Form deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete form",
      error: error.message,
    });
  }
};
