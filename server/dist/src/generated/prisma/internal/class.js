"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.7.0",
    "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum Role {\n  CREATOR\n  USER\n}\n\nenum ScheduleStatus {\n  ACTIVE\n  INACTIVE\n  PENDING\n}\n\nmodel User {\n  id       String  @id @default(uuid())\n  name     String?\n  apellido String?\n  role     Role?\n  email    String? @unique\n  password String?\n\n  createdSchedules  Schedule[] @relation(\"CreatorSchedules\")\n  assignedSchedules Schedule[] @relation(\"AssignedSchedules\")\n}\n\nmodel Schedule {\n  id          String          @id @default(uuid())\n  name        String?\n  description String?\n  startDate   DateTime?\n  endDate     DateTime?\n  status      ScheduleStatus?\n\n  idCreator String\n  creator   User   @relation(\"CreatorSchedules\", fields: [idCreator], references: [id])\n\n  idAsigned String\n  assigned  User   @relation(\"AssignedSchedules\", fields: [idAsigned], references: [id])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"apellido\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdSchedules\",\"kind\":\"object\",\"type\":\"Schedule\",\"relationName\":\"CreatorSchedules\"},{\"name\":\"assignedSchedules\",\"kind\":\"object\",\"type\":\"Schedule\",\"relationName\":\"AssignedSchedules\"}],\"dbName\":null},\"Schedule\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ScheduleStatus\"},{\"name\":\"idCreator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CreatorSchedules\"},{\"name\":\"idAsigned\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"assigned\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AssignedSchedules\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"creator\",\"assigned\",\"createdSchedules\",\"assignedSchedules\",\"_count\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Schedule.findUnique\",\"Schedule.findUniqueOrThrow\",\"Schedule.findFirst\",\"Schedule.findFirstOrThrow\",\"Schedule.findMany\",\"Schedule.createOne\",\"Schedule.createMany\",\"Schedule.createManyAndReturn\",\"Schedule.updateOne\",\"Schedule.updateMany\",\"Schedule.updateManyAndReturn\",\"Schedule.upsertOne\",\"Schedule.deleteOne\",\"Schedule.deleteMany\",\"Schedule.groupBy\",\"Schedule.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"description\",\"startDate\",\"endDate\",\"ScheduleStatus\",\"status\",\"idCreator\",\"idAsigned\",\"equals\",\"in\",\"notIn\",\"not\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"apellido\",\"Role\",\"role\",\"email\",\"password\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\"]"),
    graph: "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_ACE-QAAAAAE_QAAAAAFAQAAAAAFBQAAAAAEHBwAAPQAgGgAAPgAgGwAAPgAgOgAAADcDOwAAADcJPAAAADcJPQAAPDcjBwcAAD0AIBoAAD4AIBsAAD4AIDoAAAA3AzsAAAA3CTwAAAA3CT0AADw3Iwg6AgAAAAE7AgAAAAU8AgAAAAU9AgA9ACE-AgAAAAE_AgAAAAFAAgAAAAFBAgAAAAEEOgAAADcDOwAAADcJPAAAADcJPQAAPjcjCwcAAD0AIBoAAEAAIBsAAEAAIDpAAAAAATtAAAAABTxAAAAABT1AAD8AIT5AAAAAAT9AAAAAAUBAAAAAAUFAAAAAAQg6QAAAAAE7QAAAAAU8QAAAAAU9QABAACE-QAAAAAE_QAAAAAFAQAAAAAFBQAAAAAEOBwAAPQAgGgAAQgAgGwAAQgAgOgEAAAABOwEAAAAFPAEAAAAFPQEAQQAhPgEAAAABPwEAAAABQAEAAAABQQEAAAABQgEAAAABQwEAAAABRAEAAAABCzoBAAAAATsBAAAABTwBAAAABT0BAEIAIT4BAAAAAT8BAAAAAUABAAAAAUEBAAAAAUIBAAAAAUMBAAAAAUQBAAAAAQ4HAABEACAaAABFACAbAABFACA6AQAAAAE7AQAAAAQ8AQAAAAQ9AQBDACE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQAAAAFEAQAAAAEIOgIAAAABOwIAAAAEPAIAAAAEPQIARAAhPgIAAAABPwIAAAABQAIAAAABQQIAAAABCzoBAAAAATsBAAAABDwBAAAABD0BAEUAIT4BAAAAAT8BAAAAAUABAAAAAUEBAAAAAUIBAAAAAUMBAAAAAUQBAAAAAQkuAABGADAvAAAeABAwAABGADAxAQA4ACEyAQA5ACFFAQA5ACFHAABHRyNIAQA5ACFJAQA5ACEHBwAAPQAgGgAASQAgGwAASQAgOgAAAEcDOwAAAEcJPAAAAEcJPQAASEcjBwcAAD0AIBoAAEkAIBsAAEkAIDoAAABHAzsAAABHCTwAAABHCT0AAEhHIwQ6AAAARwM7AAAARwk8AAAARwk9AABJRyMLBQAATgAgBgAATgAgLgAASgAwLwAACwAQMAAASgAwMQEASwAhMgEATAAhRQEATAAhRwAATUcjSAEATAAhSQEATAAhCzoBAAAAATsBAAAABDwBAAAABD0BAEUAIT4BAAAAAT8BAAAAAUABAAAAAUEBAAAAAUIBAAAAAUMBAAAAAUQBAAAAAQs6AQAAAAE7AQAAAAU8AQAAAAU9AQBCACE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQAAAAFEAQAAAAEEOgAAAEcDOwAAAEcJPAAAAEcJPQAASUcjA0oAAAMAIEsAAAMAIEwAAAMAIA0DAABSACAEAABSACAuAABPADAvAAADABAwAABPADAxAQBLACEyAQBMACEzAQBMACE0QABQACE1QABQACE3AABRNyM4AQBLACE5AQBLACEIOkAAAAABO0AAAAAFPEAAAAAFPUAAQAAhPkAAAAABP0AAAAABQEAAAAABQUAAAAABBDoAAAA3AzsAAAA3CTwAAAA3CT0AAD43Iw0FAABOACAGAABOACAuAABKADAvAAALABAwAABKADAxAQBLACEyAQBMACFFAQBMACFHAABNRyNIAQBMACFJAQBMACFNAAALACBOAAALACAAAAAAAVIBAAAAAQFSAQAAAAEBUkAAAAABAVIAAAA3AwUUAACCAQAgFQAAiAEAIE8AAIMBACBQAACHAQAgVQAAAQAgBRQAAIABACAVAACFAQAgTwAAgQEAIFAAAIQBACBVAAABACADFAAAggEAIE8AAIMBACBVAAABACADFAAAgAEAIE8AAIEBACBVAAABACAAAAABUgAAAEcDCxQAAHEAMBUAAHUAME8AAHIAMFAAAHMAMFEAAHQAIFIAAGkAMFMAAGkAMFQAAGkAMFUAAGkAMFYAAHYAMFcAAGwAMAsUAABlADAVAABqADBPAABmADBQAABnADBRAABoACBSAABpADBTAABpADBUAABpADBVAABpADBWAABrADBXAABsADAIAwAAXQAgMQEAAAABMgEAAAABMwEAAAABNEAAAAABNUAAAAABNwAAADcDOAEAAAABAgAAAAUAIBQAAHAAIAMAAAAFACAUAABwACAVAABvACABDQAAfwAwDQMAAFIAIAQAAFIAIC4AAE8AMC8AAAMAEDAAAE8AMDEBAAAAATIBAEwAITMBAEwAITRAAFAAITVAAFAAITcAAFE3IzgBAEsAITkBAEsAIQIAAAAFACANAABvACACAAAAbQAgDQAAbgAgCy4AAGwAMC8AAG0AEDAAAGwAMDEBAEsAITIBAEwAITMBAEwAITRAAFAAITVAAFAAITcAAFE3IzgBAEsAITkBAEsAIQsuAABsADAvAABtABAwAABsADAxAQBLACEyAQBMACEzAQBMACE0QABQACE1QABQACE3AABRNyM4AQBLACE5AQBLACEHMQEAVwAhMgEAWAAhMwEAWAAhNEAAWQAhNUAAWQAhNwAAWjcjOAEAVwAhCAMAAFsAIDEBAFcAITIBAFgAITMBAFgAITRAAFkAITVAAFkAITcAAFo3IzgBAFcAIQgDAABdACAxAQAAAAEyAQAAAAEzAQAAAAE0QAAAAAE1QAAAAAE3AAAANwM4AQAAAAEIBAAAXgAgMQEAAAABMgEAAAABMwEAAAABNEAAAAABNUAAAAABNwAAADcDOQEAAAABAgAAAAUAIBQAAHkAIAMAAAAFACAUAAB5ACAVAAB4ACABDQAAfgAwAgAAAAUAIA0AAHgAIAIAAABtACANAAB3ACAHMQEAVwAhMgEAWAAhMwEAWAAhNEAAWQAhNUAAWQAhNwAAWjcjOQEAVwAhCAQAAFwAIDEBAFcAITIBAFgAITMBAFgAITRAAFkAITVAAFkAITcAAFo3IzkBAFcAIQgEAABeACAxAQAAAAEyAQAAAAEzAQAAAAE0QAAAAAE1QAAAAAE3AAAANwM5AQAAAAEEFAAAcQAwTwAAcgAwUQAAdAAgVQAAaQAwBBQAAGUAME8AAGYAMFEAAGgAIFUAAGkAMAAHBQAAfAAgBgAAfAAgMgAAUwAgRQAAUwAgRwAAUwAgSAAAUwAgSQAAUwAgBzEBAAAAATIBAAAAATMBAAAAATRAAAAAATVAAAAAATcAAAA3AzkBAAAAAQcxAQAAAAEyAQAAAAEzAQAAAAE0QAAAAAE1QAAAAAE3AAAANwM4AQAAAAEHBQAAegAgMQEAAAABMgEAAAABRQEAAAABRwAAAEcDSAEAAAABSQEAAAABAgAAAAEAIBQAAIABACAHBgAAewAgMQEAAAABMgEAAAABRQEAAAABRwAAAEcDSAEAAAABSQEAAAABAgAAAAEAIBQAAIIBACADAAAACwAgFAAAgAEAIBUAAIYBACAJAAAACwAgBQAAYwAgDQAAhgEAIDEBAFcAITIBAFgAIUUBAFgAIUcAAGJHI0gBAFgAIUkBAFgAIQcFAABjACAxAQBXACEyAQBYACFFAQBYACFHAABiRyNIAQBYACFJAQBYACEDAAAACwAgFAAAggEAIBUAAIkBACAJAAAACwAgBgAAZAAgDQAAiQEAIDEBAFcAITIBAFgAIUUBAFgAIUcAAGJHI0gBAFgAIUkBAFgAIQcGAABkACAxAQBXACEyAQBYACFFAQBYACFHAABiRyNIAQBYACFJAQBYACEDBQYCBgcCBwADAgMAAQQAAQIFCAAGCQAAAAADBwAIGgAJGwAKAAAAAwcACBoACRsACgIDAAEEAAECAwABBAABAwcADxoAEBsAEQAAAAMHAA8aABAbABEIAgEJCgEKDQELDgEMDwEOEQEPEwQQFAURFgESGAQTGQYWGgEXGwEYHAQcHwcdIAseIQIfIgIgIwIhJAIiJQIjJwIkKQQlKgwmLAInLgQoLw0pMAIqMQIrMgQsNQ4tNhI"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map