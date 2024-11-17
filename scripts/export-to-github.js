import axios from 'axios';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_NAME = 'vizen-blog';
const GITHUB_USERNAME = 'HBH786'; // Updated with your GitHub username

async function createGitHubRepo() {
  try {
    const response = await axios.post(
      'https://api.github.com/user/repos',
      { name: REPO_NAME, private: false },
      { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
    );
    return response.data.html_url;
  } catch (error) {
    console.error('Error creating GitHub repository:', error.response.data);
    throw error;
  }
}

async function initializeGitRepo() {
  await execAsync('git init');
  await execAsync('git add .');
  await execAsync('git commit -m "Initial commit"');
}

async function pushToGitHub(repoUrl) {
  await execAsync(`git remote add origin ${repoUrl}`);
  await execAsync('git push -u origin main');
}

async function exportToGitHub() {
  if (!GITHUB_TOKEN) {
    console.error('GitHub token not found. Please set the GITHUB_TOKEN environment variable.');
    process.exit(1);
  }

  try {
    console.log('Creating GitHub repository...');
    const repoUrl = await createGitHubRepo();

    console.log('Initializing local Git repository...');
    await initializeGitRepo();

    console.log('Pushing to GitHub...');
    await pushToGitHub(repoUrl);

    console.log(`Successfully exported to GitHub: ${repoUrl}`);
  } catch (error) {
    console.error('Error exporting to GitHub:', error);
  }
}

exportToGitHub();