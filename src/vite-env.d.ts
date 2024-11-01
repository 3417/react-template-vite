/// <reference types="vite/client" />


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