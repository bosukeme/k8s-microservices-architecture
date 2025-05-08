import http from "http";
import config from '../src/config/config';
import { IHealthOption } from "../src/types/interfaces";


const options: IHealthOption = {
    timeout: 2000,
    host: 'localhost',
    port: config.port || 3000,
    path: "/ping"
}


const request = http.request(options, (res) => {
        console.info("STATUS: " + res.statusCode);
        process.exitCode = res.statusCode === 200 ? 0 : 1;
        process.exit();
})


request.on("error", function (err) {
  console.error("ERROR", err);
  process.exit(1);
});

request.end();