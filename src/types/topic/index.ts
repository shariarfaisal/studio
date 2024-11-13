import { BaseTypes } from "../base";
import { Status } from "../status";

export interface Topic extends BaseTypes {
  name: string;
  data: string;
  status: Status;
}
