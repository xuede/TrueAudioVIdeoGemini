export type VideoStream = {
  createdAt: Date;
  id: string;
  sourceDevice: string | null;
  status?: "Option1" | null;
  streamId: string | null;
  targetDevice: string | null;
  updatedAt: Date;
};
