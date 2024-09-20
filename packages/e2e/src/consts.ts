export const IS_JIRA = process.env.IS_JIRA;
export const IS_CONF = process.env.IS_CONF;
export const BASE_URL = process.env.BASE_URL ?? '';
export const USER_NAME = process.env.USER_NAME ?? '';
export const USER_PASSWORD = process.env.USER_PASSWORD ?? '';

export const AUTH_FILE = '.auth/user.json';

export const SAMPLE_PAGES = {
  JIRA_ISSUE: `${BASE_URL}/browse/E2E-1`,
  JIRA_ISSUE_PANEL_TITLE: `Let's Sing Together`,
  CONF_SOME_PAGE: `${BASE_URL}/wiki/spaces/TEST/pages/E2E`,
};
