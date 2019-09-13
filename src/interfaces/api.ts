export interface ApiMethodType {
  endpoint: string
  params: object
  config: object
  'from-date': string
};

export interface ErrorMessage {
  message: string
  status: string
};
