import { BaseTypes } from "../base";
import { IFile } from "../file";

// Source.ts
export interface Source extends BaseTypes {
  file: IFile;
  data: string;
  type: string;
  status: string;
}
