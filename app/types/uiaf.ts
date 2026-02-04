export interface UIAF {
  info: Info;
  list: List[];
}

interface Info {
  export_app: string;
  export_app_version: string;
  export_timestamp: number;
  uiaf_version: string;
}

interface List {
  id: number;
  status: number;
  current: number;
  timestamp: number;
}
