const { User, Thought } = require("../../src/models");

const createReactionForThought = async (req, res) => {
  const { id } = req.params;
  const { reactionBody, username } = req.body;

  try {
    if (reactionBody && username) {
      await Thought.findOneAndUpdate(
        { _id: id },
        { $addToSet: { reactions: { reactionBody, username } } },
        { new: true, runValidators: true }
      );
      return res.json({ success: true });
    } else {
      res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: could not add a new reaction | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const removeReactionFromThought = async (req, res) => {
  const { thoughtId, reactionId } = req.params;

  try {
    if (thoughtId && reactionId) {
      await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: { _id: reactionId } } },
        { new: true, runValidators: true }
      );

      return res.json({ success: true });
    } else res.status(500).json({ success: false });
  } catch (error) {
    console.log(`[ERROR]: could not delete the reaction | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createReactionForThought, removeReactionFromThought };
