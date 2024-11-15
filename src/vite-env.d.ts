/// <reference types="vite/client" />


interface ImportMetaEnv {
 readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


interface IQuery {
  [key: string]: string | number | boolean | undefined;
}

interface IResponse {
  code: number;
  data: any;
  msg: string;
}


interface IDataProps {
    key:string;
    title:string;
}