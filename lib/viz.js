'use strict';

const Viz = require('viz.js');
const graph = require('./graph');
const {Module, render} = require('viz.js/full.render.js');

module.exports = function (modules, config) {
	const viz = new Viz({Module, render});
	return graph.dot(modules, config).then((dot) => {
		return viz.renderString(dot);
	});
};
