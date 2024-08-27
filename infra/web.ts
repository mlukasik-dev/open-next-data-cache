import { configLambda } from "./config-lambda";

export const web = new sst.aws.Nextjs("Web", {
  path: "apps/web",
  openNextVersion: "3.1.1",
  link: [configLambda],
});
