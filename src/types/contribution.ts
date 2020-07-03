export enum Status {
  Pending = 'PENDING',
  Cancelled = 'CANCELLED',
  Processed = 'PROCESSED',
}

export interface Contribution {
  uuid: string;
  status: Status,
  total: number;
  tfsa: number;
  rrsp: number;
  date: Date;
}

export interface WithContribution {
  contribution: Contribution;
}

export interface Contributions {
  [uuid:string]: Contribution;
}

export interface WithContributions {
  contributions: Contributions;
}

export interface WithSelectedContribution {
  selectedContribution: Nullable<Contribution>;
}
