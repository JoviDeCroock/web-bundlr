const wbn = require('wbn');
const fs = require('fs');

// Build with rollup
exports.build = ({ entry }) => {

}

// Make a web-bundle
exports.bundle = ({ baseUrl, inputLocation, outputLocation, name }) => {
  const builder = new wbn.BundleBuilder(baseUrl);
  builder.addFilesRecursively(baseUrl, inputLocation);
  fs.writeFileSync(`${outputLocation}/${name}.wbn`, builder.createBundle());
}
