import { TimeStatus } from './TimeStatus';

export interface User extends TimeStatus {
  name: string;
  email: string;
  id: string;
}
