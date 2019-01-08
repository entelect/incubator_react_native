/* eslint-disable import/no-commonjs,no-console */

'use strict';

const packageJson = require('../../package.json');

console.log('Checking dependencies for wildcards');

const dependencySections = [packageJson.dependencies, packageJson.devDependencies];
dependencySections.forEach(checkDependencySection);

function checkDependencySection(dependencySection) {
    Object.keys(dependencySection).forEach(dependencyName => {
        const versionString = dependencySection[dependencyName];
        if (versionString.startsWith('http')) {
            console.warn(`Http dependency detected (${versionString}), skipping.`);
            return;
        }
        const allowedCharacters = /^[a-zA-Z\d.-]+$/;
        const valid = allowedCharacters.test(versionString);
        if (!valid) {
            throw new Error(
                `Dependency ${dependencyName} has a version string (${versionString}) with invalid characters`
            );
        }
    });
}

console.log('All dependencies are wildcard free');
