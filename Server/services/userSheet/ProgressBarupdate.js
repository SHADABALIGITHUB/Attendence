const { UserSheets } = require("../../models/UserSheets/DefaultSheets");

const usersheetInprogressBar = async (sheetid, index) => {
  try {
    const user = await UserSheets.findOne({
      sheetid: sheetid,
      "Listquestion.frontendQuestionId": index, // Ensure that the question is part of the Listquestion array
    });

    if (!user) {
      return false;
    }

    const question = user.Listquestion.find(
      (q) => q.frontendQuestionId === index
    );
    if (question) {
      question.hasSolution = !question.hasSolution; // Toggle between true and false
      await user.save(); // Save the updated document
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log("Error in UserSheet Data upgradation", err);
    return null;
  }
};

module.exports = usersheetInprogressBar;
