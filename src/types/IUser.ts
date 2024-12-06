export type IUser = {
  id?: number;
  username: string;
  password: string;
  roles: string;
};

export type IReqLogin = {
  username: string;
  password: string;
};

export type IRespLogin = {
  token: string;
  expire: number;
};

export type ICommResp = {
  ok: boolean;
  error: string;
};
