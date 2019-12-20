const { writeFile } = require("fs");
const data = require("./data/latest.json");
const timezones = data.zones.map(({ name }) => name);

writeFile("./timezones.json", JSON.stringify(timezones), err => {
  if (err) throw err;
  console.log("Timezone data file has been saved!");
});
