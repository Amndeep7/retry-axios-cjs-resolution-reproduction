import axios from 'axios';
import * as rax from 'retry-axios';

function test() {
  const axiosClient = axios.create();
  axiosClient.defaults.raxConfig = {
    retry: 3
  };
  rax.attach(axiosClient);
}

test();
