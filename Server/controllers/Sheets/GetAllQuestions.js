const { Question } = require("../../models/Problems/Leetcodeproblem");

const GetAllQuestion = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    level = "All",
    topic = "All",
    search = "",
  } = req.query;
  const options = {
    page: parseInt(page) + 1,
    limit: parseInt(limit),
  };

  // console.log("page :",page,"Limit :",limit,"Search :",search);

  try {
    let Sheets;

    const totalDocuments = await Question.countDocuments(
      level === "All" ? {} : { difficulty: level }
    );

    if (search !== "") {
      const searchAsNumber = Number(search);

      Sheets = await Question.find({
        $or: [
          {
            frontendQuestionId: !isNaN(searchAsNumber) ? searchAsNumber : null,
          },
          { title: { $regex: search, $options: "i" } },
          { titleSlug: { $regex: search, $options: "i" } },
        ],
      });

      return res.status(200).json({
        status: true,
        totalDocuments,
        totalPages: Math.ceil(totalDocuments / options.limit),
        currentPage: options.page,
        data: Sheets,
      });
    }

    if (level === "All" && topic === "All") {
      Sheets = await Question.find()
        .skip((options.page - 1) * options.limit)
        .limit(options.limit);
    } else if (level === "All" && topic === "array") {
      Sheets = await Question.find({
        topicTags: { $elemMatch: { slug: topic } },
      });
    } else if (level !== "All" && topic === "array") {
      Sheets = await Question.find(
        { difficulty: level } && { topicTags: { $elemMatch: { slug: topic } } }
      )
        .skip((options.page - 1) * options.limit)
        .limit(options.limit);
    } else if (level !== "All") {
      Sheets = await Question.find({ difficulty: level })
        .skip((options.page - 1) * options.limit)
        .limit(options.limit);
    }

    res.status(200).json({
      status: true,
      totalDocuments,
      totalPages: Math.ceil(totalDocuments / options.limit),
      currentPage: options.page,
      data: Sheets,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching All Questions", err });
  }
};

module.exports = GetAllQuestion;
