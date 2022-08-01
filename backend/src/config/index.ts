import development from './development';
import stage from './stage';

const enviroment = {
  development,
  stage,
};

let CONFIG: any;

if (process.env.NODE_ENV === 'development') {
  CONFIG = { ...enviroment['development'], mode: 'development' };
}

if (process.env.NODE_ENV === 'stage') {
  CONFIG = { ...enviroment['stage'], mode: 'stage' };
}

export default CONFIG;
