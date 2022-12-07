/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(["require", "exports", "ojs/ojcorerouter", "ojs/ojknockoutrouteradapter", "ojs/ojurlparamadapter", "ojs/ojarraydataprovider", "knockout", "ojs/ojbootstrap", "ojs/ojknockout", "ojs/ojnavigationlist"],
 function(require, exports, CoreRouter, KnockoutRouterAdapter, UrlParamAdapter, ArrayDataProvider, ko, ojbootstrap_1) {
    function DashboardViewModel() {
      this.routes = [
        { path: "", redirect: "dashboard" },
        { path: "dasboard", detail: { label: "Dashboard" } },
        { path: "", detail: { label: "Incidents" } },
        { path: "", detail: { label: "Customers" } },
        { path: "", detail: { label: "About" } },
    ];
    // Create ADP with partial array, excluding first redirect route
    this.dataProvider = new ArrayDataProvider(this.routes.slice(1), {
        keyAttributes: "path",
    });
    // Create the router with the routes
    this.router1 = new CoreRouter(this.routes, {
        urlAdapter: new UrlParamAdapter(),
    });
    // Create an observable to react to the current router state path
    this.selection = new KnockoutRouterAdapter(this.router);
    // Synchronize the router, causing it to go to its default route
        }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
