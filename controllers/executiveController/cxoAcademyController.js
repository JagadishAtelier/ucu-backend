const cxoAcademyModel = require("../../Model/ExecutiveEduPageModel/CXOAcademy");

// --------------------
// Create new CXO Academy
// --------------------
exports.createCXOAcademy = async (req, res) => {
  try {
    const { title, titleSubContent, keyFeatures, tabeldata } = req.body;

    const newCXO = await cxoAcademyModel.create({
      title,
      titleSubContent,
      keyFeatures,
      tabeldata
    });

    res.status(201).json({ success: true, data: newCXO });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// --------------------
// Get all CXO Academy data
// --------------------
exports.getCXOAcademy = async (req, res) => {
  try {
    const cxoData = await cxoAcademyModel.find();
    res.status(200).json({ success: true, data: cxoData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// --------------------
// Add a table row to a table by table heading
// --------------------
exports.addTableRow = async (req, res) => {
  try {
    const { tableHeading, rowData, linkedContent } = req.body;
    const { id } = req.params; // CXO Academy document ID

    const cxoDoc = await cxoAcademyModel.findById(id);
    if (!cxoDoc) return res.status(404).json({ success: false, message: "CXO Academy not found" });

    const table = cxoDoc.tabeldata.find(t => t.heading === tableHeading);
    if (!table) return res.status(404).json({ success: false, message: "Table not found" });

    table.rows.push({ columns: rowData, linkedContent });

    await cxoDoc.save();
    res.status(200).json({ success: true, data: cxoDoc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// --------------------
// Update linked content for a specific row in a table
// --------------------
exports.updateLinkedContent = async (req, res) => {
  try {
    const { tableHeading, rowIndex, linkedContent } = req.body;
    const { id } = req.params; // CXO Academy document ID

    const cxoDoc = await cxoAcademyModel.findById(id);
    if (!cxoDoc) return res.status(404).json({ success: false, message: "CXO Academy not found" });

    const table = cxoDoc.tabeldata.find(t => t.heading === tableHeading);
    if (!table) return res.status(404).json({ success: false, message: "Table not found" });

    if (!table.rows[rowIndex]) return res.status(404).json({ success: false, message: "Row not found" });

    table.rows[rowIndex].linkedContent = linkedContent;

    await cxoDoc.save();
    res.status(200).json({ success: true, data: cxoDoc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
