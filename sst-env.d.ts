/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "ConfigLambda": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "Web": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
export {}
