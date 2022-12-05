[![Build Status](https://app.travis-ci.com/RedHatInsights/insights-inventory-frontend.svg?branch=master)](https://app.travis-ci.com/RedHatInsights/insights-inventory-frontend) [![codecov](https://codecov.io/gh/RedHatInsights/insights-inventory-frontend/branch/master/graph/badge.svg?token=XC4AD7NQFW)](https://codecov.io/gh/RedHatInsights/insights-inventory-frontend)

# Insights Inventory Frontend

This is the frontend application for [Insights Inventory](https://github.com/RedHatInsights/insights-inventory). It is based on the [insights-frontend-starter-app](git@github.com:RedHatInsights/insights-frontend-starter-app.git).
## First time setup
### Quick start
1. Make sure you have [`Node.js`](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) installed
2. Run [script to patch your `/etc/hosts`](https://github.com/RedHatInsights/insights-proxy/blob/master/scripts/patch-etc-hosts.sh)
3. Make sure you are using [Red Hat proxy](http://hdn.corp.redhat.com/proxy.pac)

### Comprehensive documentation
There is a [comprehensive quick start guide in the Storybook Documentation](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/welcome/quickStart/DOC.md) to setting up an Insights environment.

## Running locally
1. Install dependencies with `npm install`
2. Run development server with `npm run start:proxy:beta`
3. Local version of the app will be available at https://stage.foo.redhat.com:1337/beta/insights/inventory/

## Running with another app

If you want to see changes made in inventory table in another application you will have to run both inventory and desired application. We'll take for example [insights-advisor-frontend](https://github.com/RedHatInsights/insights-advisor-frontend) application as app that uses system detail.

Open new terminal and navigate to desired application (for instance insights-adviror-frontend) and run it (make sure to run it on different port)
```
npm start
```

Run the inventory application with proxy enabled and list of additional applications
```
LOCAL_API=advisor:8003~https npm run start:proxy
```

If you want to run advisor and for instance vulnerability just add new entry to LOCAL_API
```
LOCAL_API=advisor:8003~https,vulnerability:8004
```

## Testing
There is an npm script that runs the build, JS and CSS linters and unit tests. The script can be invoked by
`npm run verify`

## Inventory table and detail

We are serving inventory through federated modules, this means both inventory table and inventory detail is served to you in runtime. No need to install and rebuild when something changes in inventory.

### Applications using InventoryTable

These applications import `InventoryTable` component through federated modules:

- [vulnerability-ui](https://github.com/RedHatInsights/vulnerability-ui)
- [insights-remediations-frontend](https://github.com/RedHatInsights/insights-remediations-frontend)
- [sed-frontend](https://github.com/RedHatInsights/sed-frontend)
- [tasks-frontend](https://github.com/RedHatInsights/tasks-frontend)
- [compliance-frontend](https://github.com/RedHatInsights/compliance-frontend)
- [patchman-ui](https://github.com/RedHatInsights/patchman-ui)
- [malware-detection-frontend](https://github.com/RedHatInsights/malware-detection-frontend)
- [drift-frontend](https://github.com/RedHatInsights/drift-frontend)
- [ros-frontend](https://github.com/RedHatInsights/ros-frontend)
- [insights-advisor-frontend](https://github.com/RedHatInsights/insights-advisor-frontend)
- [edge-frontend](https://github.com/RedHatInsights/edge-frontend)

### Documentation Links

* Components
  * [inventory](https://github.com/RedHatInsights/insights-inventory-frontend/blob/master/doc/inventory.md)
    * [props table](https://github.com/RedHatInsights/insights-inventory-frontend/blob/master/doc/props_table.md)
    * [props detail](https://github.com/RedHatInsights/insights-inventory-frontend/blob/master/doc/props_detail.md)
    * [custom fetch function](https://github.com/RedHatInsights/insights-inventory-frontend/blob/doc/custom_fetch.md)
    * [hide filters](https://github.com/RedHatInsights/insights-inventory-frontend/blob/master/doc/hide_filters.md)
    * [general info tab](https://github.com/RedHatInsights/insights-inventory-frontend/blob/master/doc/general_info.md)
  * [inventory_header](https://github.com/RedHatInsights/insights-inventory-frontend/blob/master/doc/inventory_header.md)
