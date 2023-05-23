import { findAndParseConfig } from "@graphql-mesh/cli";
import { getMesh } from "@graphql-mesh/runtime";
import { join } from "path";
import { GetPoolsSushiLiveDocument } from "./clients/sushi_rc/.graphclient";
import {
  GetPoolsUniswapLiveDocument,
  subscribe,
} from "./clients/uniswap_rc/.graphclient";
let DEX_TO_DOCS: any[] = [];

DEX_TO_DOCS.push({
  liveDoc: GetPoolsSushiLiveDocument,
  name: "sushi",
});

DEX_TO_DOCS.push({
  liveDoc: GetPoolsUniswapLiveDocument,
  name: "uniswap",
});

(async () => {
  DEX_TO_DOCS.forEach(async (dex) => {
    const config = await findAndParseConfig({
      dir: join(__dirname, "./clients/" + dex.name + "_rc"),
      configName: "graphclient",
      additionalPackagePrefixes: ["@graphprotocol/client-"],
      throwOnInvalidConfig: true,
      generateCode: false,
    });
    const mesh = await getMesh(config);
    const filter = {
      first: 30000,
      skip: 0,
      totalLocked: 5000,
    };
    const repeater = await subscribe(GetPoolsUniswapLiveDocument, filter);
    // const repeater = await mesh.subscribe(dex.liveDoc, filter, {}, dex.name);
    const iterator = repeater[Symbol.asyncIterator]();

    while (true) {
      const { value, done } = await iterator.next();

      if (done) {
        break;
      }
      if (!value.data) {
        continue;
      }
      const used = process.memoryUsage();
      const row = {
        rss: bytesToMb(used.rss),
        heapTotal: bytesToMb(used.heapTotal),
        heapUsed: bytesToMb(used.heapUsed),
        external: bytesToMb(used.external),
        stack: bytesToMb(used.rss - used.heapTotal),
      };
      console.log(
        new Date().toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          minute: "numeric",
          second: "numeric",
          hour: "numeric",
        })
      );
      console.table(row);
      console.log(
        "new data from graph (dex/v2/v3)",
        dex.name,
        value.data.v2.length,
        value.data.v3.length
      );
    }
  });
})();

const bytesToMb = (bytes: any) => Math.round((bytes / 1024 / 1024) * 100) / 100;
