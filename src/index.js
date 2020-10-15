import _ from 'lodash';
import csvData from './data.csv';
import json from './data.json5';
import toml from './data.toml';
import xmlData from './data.xml';
import yaml from './data.yaml';
import './style.css';
import Temi from './temi.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'oluwasetemi'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const img = new Image();
  img.src = Temi;

  element.appendChild(img);

  console.log(csvData);
  console.log(xmlData);

  window.toml = toml;
  console.log(toml.title); // output `TOML Example`
  console.log(toml.owner.name); // output `Tom Preston-Werner`

  window.yaml = yaml;
  console.log(yaml.title); // output `YAML Example`
  console.log(yaml.owner.name); // output `Tom Preston-Werner`

  window.json = json;
  console.log(json.title); // output `JSON5 Example`
  console.log(json.owner.name); // output `Tom Preston-Werner`

  return element;
}

document.body.appendChild(component());
