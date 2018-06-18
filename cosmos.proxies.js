import createRouterProxy from 'react-cosmos-router-proxy';
import FormWrapperProxy from './config/cosmos-proxies/FormWrapperProxy';
import ParentLayoutProxy from './config/cosmos-proxies/ParentLayoutProxy';
import SimulateSubmissionProxy from './config/cosmos-proxies/SimulateSubmissionProxy';
import WrapperProxy from './config/cosmos-proxies/WrapperProxy';

export default [
  FormWrapperProxy,
  createRouterProxy(),
  ParentLayoutProxy,
  SimulateSubmissionProxy,
  WrapperProxy,
];
