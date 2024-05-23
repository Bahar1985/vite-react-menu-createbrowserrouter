import * as tools from "./tools";

const pageIdCode = tools.getArgument();

const pageFileName = `Page${pageIdCode}.tsx`;

console.log(`Creating ${pageFileName}...`);
