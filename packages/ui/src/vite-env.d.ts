/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_BACKEND_URL: string;
  readonly VITE_IS_CONF: string;
  readonly VITE_IS_JIRA: string;
  readonly DEV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
