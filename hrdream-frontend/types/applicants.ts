export type ApplicantStage = "applied" | "interviewed" | "made_offer" | "hired";

export type ApplicantApi = {
  id: number;
  full_name: string;
  email: string;
  location: string;
  position: string;
  department: string;
  stage: ApplicantStage;
  stage_label?: string;
  created_at: string;
  updated_at: string;
};

export type NewApplicantInput = {
  full_name: string;
  email: string;
  location: string;
  position: string;
  department: string;
  stage: ApplicantStage;
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};