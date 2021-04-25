export class Timer {
  log_id: string;
  task_id: string;
  start_time: string;
  end_time: string;
  total_time: string;
  active: boolean;

  constructor() {
    this.log_id = '';
    this.task_id = '';
    this.start_time = '';
    this.end_time = '';
    this.total_time = '';
    this.active = false;
  }
}
