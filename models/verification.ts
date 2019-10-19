export interface Verification {
  id: string;

  summary: {
    deliverable: number;
    risky: number;
    undeliverable: number;
    unknown: number;
  };

  createdAt: Date;
  updatedAt: Date;
}