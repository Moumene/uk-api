import dotenv from 'dotenv';

dotenv.config();

enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa'
}

interface ProcessEnv {
    [key: string]: string | undefined
}

class Environment {
    private readonly environment: String;
    private readonly processEnv: ProcessEnv;

    constructor(environment: String) {
        this.environment = environment;
        this.processEnv = process.env;
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        } else if (this.environment === Environments.qa_environment) {
            return 8083;
        } else {
            return 3000;
        }
    }

    getFixerApiKey() : String {
        return this.processEnv["FIXER_API_KEY"] || "";
    }
}

export default new Environment(Environments.local_environment);
