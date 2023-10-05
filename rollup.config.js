import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default {
    input: "src/index.ts",
    output: {
        file: "dist/lite.bundle.js",
        format: "iife",
    },
    plugins: [
        typescript(),
        babel({ extensions: [".js", ".ts"] }),
    ],
};
