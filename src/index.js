//Core functions for setting results, logging, registering secrets and exporting variables across actions
const core = require("@actions/core");
//A hydrated Octokit client
const github = require("@actions/github");
const generateEmote = require("./emoteGenerator");

/**
 * Asynchronous function that is executed when a GitHub Action is triggered.
 * Retrieves the GitHub token from the input, checks if a pull request exists in the context payload,
 * and sets a failure message if no pull request is found. If a pull request exists,
 * it retrieves the pull request number and title from the context payload.
 * It then creates a new instance of the GitHub API client using the token
 * and generates an emote message based on the pull request title.
 * Finally, it creates a comment on the pull request with the generated message.
 *
 * @example
 * const githubToken = "your-github-token";
 * const prTitle = "Example Pull Request Title";
 *
 * run();
 *
 * @returns {Promise<void>} A promise that resolves when the function finishes executing.
 */
async function run() {
  try {
    const githubToken = core.getInput("GITHUB_TOKEN");

    const { context } = github;
    if (context.payload.pull_request == null) {
      core.setFailed("No pull request found.");
    }

    const pullRequestNumber = context.payload.pull_request.number;
    const prTitle = context.payload.pull_request.title;
    const octokit = new github.GitHub(githubToken);
    const message = generateEmote(prTitle);

    octokit.issues.createComment({
      ...context.repo,
      issue_number: pullRequestNumber,
      body: message,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
