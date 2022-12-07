/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(["require", "exports", "ojs/ojbootstrap", "knockout", "ojs/ojarraydataprovider", "ojs/ojknockout", "ojs/ojcollapsible", "ojs/ojlistitemlayout", "ojs/ojlistview", "ojs/ojavatar", "ojs/ojselectcombobox"],
  function (require, exports, ojbootstrap_1, ko, ArrayDataProvider) {
    function IncidentsViewModel() {

      this.guideArticles = [
        {
          name: "Malaria",
          symptoms: "High-fever , Dizziness , Body Pain , Head Reeling",
          guide: "Do Sponging"
        },
        {
          name: "Dengue",
          symptoms: "High-Fever, Diziness , Red Rashes in Skin",
          guide: "Check / Monitor Platelets"
        },
        {
          name: "Cholera",
          symptoms: "Stomach pain , Stomach upset , Weakness ",
          guide: "Take Lemon water with Salt"
        },
        {
          name: "Malaria",
          symptoms: "High-fever , Dizziness , Body Pain , Head Reeling",
          guide: "Do Sponging"
        },
        {
          name: "Dengue",
          symptoms: "High-Fever, Diziness , Red Rashes in Skin",
          guide: "Check / Monitor Platelets"
        },
        {
          name: "Cholera",
          symptoms: "Stomach pain , Stomach upset , Weakness ",
          guide: "Take Lemon water with Salt"
        },
        {
          name: "Malaria",
          symptoms: "High-fever , Dizziness , Body Pain , Head Reeling",
          guide: "Do Sponging"
        },
        {
          name: "Dengue",
          symptoms: "High-Fever, Diziness , Red Rashes in Skin",
          guide: "Check / Monitor Platelets"
        },
        {
          name: "Cholera",
          symptoms: "Stomach pain , Stomach upset , Weakness ",
          guide: "Take Lemon water with Salt"
        },
        {
          name: "Malaria",
          symptoms: "High-fever , Dizziness , Body Pain , Head Reeling",
          guide: "Do Sponging"
        },
        {
          name: "Dengue",
          symptoms: "High-Fever, Diziness , Red Rashes in Skin",
          guide: "Check / Monitor Platelets"
        },
        {
          name: "Cholera",
          symptoms: "Stomach pain , Stomach upset , Weakness ",
          guide: "Take Lemon water with Salt"
        }
      ];
      this.scrollToKey = ko.observable("capability");
      this.scrollPos = ko.observable({ y: 0 });
      this.handleScrollPositionChanged = (event) => {
        const value = event.detail.value;
        this.scrollPosDetail("x: " +
          Math.round(value.x) +
          " y: " +
          Math.round(value.y) +
          " key: " +
          value.key +
          " index: " +
          value.index +
          " offsetX: " +
          Math.round(value.offsetX) +
          " offsetY: " +
          Math.round(value.offsetY));
      };
      this.scrollToSelected = ko.pureComputed({
        read: () => {
          return this.scrollToKey() === "capability";
        },
        write: (value) => {
          this.scrollToKey(value ? "capability" : "never");
        },
        owner: this,
      });

      this.dataProvider = new ArrayDataProvider(this.guideArticles, {
        keyAttributes: "name",
      });

      this.value1 = ko.observableArray();

      this.browsers = [
        { value: "IE", label: "High Level" },
        { value: "FF", label: "Headache" },
        { value: "CH", label: "Dizziness" },
        { value: "OP", label: "Nose Sneeze" },
        { value: "SA", label: "Skin Dryness" },
    ];
      
    }

    return IncidentsViewModel;
  }
);
