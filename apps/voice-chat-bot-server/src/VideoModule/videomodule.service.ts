import { Injectable } from "@nestjs/common";

@Injectable()
export class VideoModuleService {
  constructor() {}
  async StartVideoStream(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async StopVideoStream(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SwitchCamera(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
