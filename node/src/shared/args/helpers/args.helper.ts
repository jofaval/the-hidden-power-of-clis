import { Args } from "../types/args.type";

export const parseArgs = (raw: string[]): Args => {
  const args = {} as Args;

  const [agent, origin, ...playground] = raw;

  if (agent) {
    args.agent = agent;
  }

  if (origin) {
    args.origin = origin;
  }

  return args;
};
