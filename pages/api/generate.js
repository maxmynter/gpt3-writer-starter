import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const styleTextforInput = () => {};

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "";
const generateAction = async (req, res) => {
  const userInput =
    req.body.nameAndRole +
    " " +
    req.body.companyName +
    " " +
    req.body.mission +
    " " +
    req.body.jobSummary +
    " " +
    req.body.candidateSummary;
  // Run first prompt

  // Can use prompt chaining to first select best experience from linkedIn profile and then write the Outreach

  const prompt = `Write a convincing and short recruiting linkedIn message for me and my company to hire a candidate. The message should briefly describe the role, mention the candidates experience and their potential impact in the new role
    Company Name: ${req.body.companyName.replaceAll("\n", ",")}
    Company Mission: ${req.body.mission.replaceAll("\n", ",")}
    Candidate: ${req.body.candidateSummary.replaceAll("\n", ",")}
    Job: ${req.body.jobSummary.replaceAll("\n", ",")}
    Sender: ${req.body.nameAndRole.replaceAll("\n", ",")}
    
    Message:\n`;
  console.log(`API: ${userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.83,
    max_tokens: 200,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
