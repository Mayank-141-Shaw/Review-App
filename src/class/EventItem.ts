export class EventItem {
  id: number = 0;
  title: string = "";
  description: string = "";
  startDate: string;
  endDate: string;

  constructor(
    id: number,
    title: string,
    desc: string,
    start: string,
    end: string
  ) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.startDate = start;
    this.endDate = end;
  }
}
