import { ConnectionOptions } from "typeorm";

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export default async ({
  prod = false,
  name,
}: {
  prod: boolean;
  name: string;
}) => {
  let config: ConnectionOptions = {
    type: "mongodb",
    useNewUrlParser: true,
    synchronize: true,
    logging: false,

    entities: ["src/data/_entities/*.ts"],
    subscribers: ["src/data/subscriber/*.ts"],
    migrations: ["src/data/migration/*.ts"],

    cli: {
      entitiesDir: "src/data/_entities",
      migrationsDir: "src/data/migration",
      subscribersDir: "src/data/subscriber",
    },
  };

  if (prod) {
    const DB_URL = `mongodb+srv://${username}:${password}@cluster0.fpqe5.mongodb.net/${name}?retryWrites=true&w=majority`;

    config = {
      ...config,
      url: DB_URL,
    };
  } else {
    config = {
      ...config,
      host: "localhost",
      database: name,
    };
  }

  return config;
};
