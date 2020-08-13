import dotenv from 'dotenv';
import get from 'lodash/get';

dotenv.config();

const getEnv = (envName, defaultValue = '') => get(process, `env.${envName}`, defaultValue);

export default getEnv;
