export type IStanza = {
  id?: number;
  prefix: string;
  title: string;
  url: string;
  httpheader: string;
  config: string;
  suffix: string;
  active: boolean;
};
export type ICommRespStanza = {
  ok: boolean; // code
  error: string; // message
};
export type IStanzaList = IStanza[];