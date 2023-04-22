var name = "rollup-tsx";
var version = "1.0.0";
var description = "";
var main$1 = "index.js";
var type = "module";
var scripts = {
	build: "rollup --config"
};
var keywords = [
];
var author = "";
var license = "ISC";
var dependencies = {
	"@types/react": "^18.0.38",
	"@types/react-dom": "^18.0.11",
	react: "^18.2.0",
	"react-dom": "^18.2.0",
	rollup: "^3.20.7",
	typescript: "^5.0.4"
};
var devDependencies = {
	"@rollup/plugin-json": "^6.0.0"
};
var json = {
	name: name,
	version: version,
	description: description,
	main: main$1,
	type: type,
	scripts: scripts,
	keywords: keywords,
	author: author,
	license: license,
	dependencies: dependencies,
	devDependencies: devDependencies
};

// src/main.js

function main () {
  console.log(json);
}

export { main as default };
