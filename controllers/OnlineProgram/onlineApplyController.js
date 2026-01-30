// controllers/onlineApplyController.js
const OnlineApply = require("../../Model/OnlineProgramModel/OnlineApply");

/**
 * CREATE workflow
 */
exports.createWorkflow = async (req, res) => {
  try {
    const workflow = await OnlineApply.create(req.body);

    res.status(201).json({
      success: true,
      message: "Workflow created successfully",
      data: workflow
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET ALL workflows
 */
exports.getAllWorkflows = async (req, res) => {
  try {
    const workflows = await OnlineApply.find();

    res.status(200).json({
      success: true,
      data: workflows
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET workflow BY ID
 */
exports.getWorkflowById = async (req, res) => {
  try {
    const workflow = await OnlineApply.findById(req.params.id);

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Workflow not found"
      });
    }

    res.status(200).json({
      success: true,
      data: workflow
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET single step by STEP ID
 */
exports.getStepById = async (req, res) => {
  try {
    const stepId = req.params.stepId;

    const workflow = await OnlineApply.findOne({
      "steps._id": stepId
    });

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Step not found"
      });
    }

    const step = workflow.steps.id(stepId);

    res.status(200).json({
      success: true,
      data: step
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


/**
 * UPDATE workflow BY ID
 */
exports.updateWorkflowById = async (req, res) => {
  try {
    const workflow = await OnlineApply.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Workflow not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Workflow updated successfully",
      data: workflow
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * DELETE workflow BY ID
 */
exports.deleteWorkflowById = async (req, res) => {
  try {
    const workflow = await OnlineApply.findByIdAndDelete(req.params.id);

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Workflow not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Workflow deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteStepById = async (req, res) => {
  try {
    const { stepId } = req.params;

    const workflow = await OnlineApply.findOneAndUpdate(
      { "steps._id": stepId },
      { $pull: { steps: { _id: stepId } } },
      { new: true }
    );

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Step not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Step deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.updateStepById = async (req, res) => {
  try {
    const { stepId } = req.params;

    const workflow = await OnlineApply.findOne({
      "steps._id": stepId
    });

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Step not found"
      });
    }

    // Get step subdocument
    const step = workflow.steps.id(stepId);

    // Update only provided fields
    Object.keys(req.body).forEach((key) => {
      step[key] = req.body[key];
    });

    await workflow.save();

    res.status(200).json({
      success: true,
      message: "Step updated successfully",
      data: step
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
