export class Task {
  task_id: string;
  task_name: string;
  user_id: string;
  date_created: string;

  constructor() {
    this.task_id = '';
    this.task_name = '';
    this.user_id = '';
    this.date_created = '';
  }
}
