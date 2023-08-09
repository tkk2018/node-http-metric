export interface HttpMetric {
  method?: string;
  url?: string;
};

export interface RequestMetric {
  start_time: number;
  headers: Record<string, any>;
  data?: any; // request body if has
};

export interface EndMetric {
  end_time: number;
  response_time: number;
  request?: RequestMetric;
  headers?: Record<string, any>; // not sure whether error will change the headers, play defensive here.
}

export interface ResponseMetric extends EndMetric {
  response: {
    // headers?: Record<string, any>;
    status_code: number,
    status_message: string,
    data?: any
  };
};

export interface ErrorMetric extends EndMetric {
  error: unknown;
};
