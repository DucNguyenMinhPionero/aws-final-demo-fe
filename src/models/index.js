// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Users, Candidates, Posts } = initSchema(schema);

export { Users, Candidates, Posts };
