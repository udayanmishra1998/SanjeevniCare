
define(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojpagingdataproviderview", "ojs/ojarraydataprovider", "ojs/ojlistdataproviderview", "ojs/ojdataprovider", "ojs/ojknockout", "ojs/ojtable", "ojs/ojdialog", "ojs/ojbutton", "ojs/ojformlayout", "ojs/ojinputtext", "ojs/ojpagingcontrol"],
  function (require, exports, ko, Bootstrap, PagingDataProviderView, ArrayDataProvider, ListDataProviderView, ojdataprovider_1) {
    function AboutViewModel() {
      console.log('Entered about view !');
      this.filter = ko.observable('Search Here');


      // caseId , patientName , patientId , pocId , phcId , symptomsDescriptions , pastMedicalFinds , pastTestReports , 
      //isActive , caseStatus , zeroLevelConsultacy , firstLevelConsultancy , isDeleted , aditionalDescription ,createTime , createUser , updateTime , updateUser 

      this.deptArray = [
        {
          "caseId": 10,
          "patientName": "Kulamani Majhi",
          "patientId": 300,
          "pocId": 9,
          "phcId": 89,
          "symptomsDescriptions": "Chest Pain with mild head reeling. Body pain since yesterday night.",
          // "pastMedicalFinds": {"1": "https://s3-amazon-65676879.us.in/300_2022-12-09_Body_checkup.jpeg",2:"https://s3-amazon-65676879.us.in/300_2022-12-09_Body_checkup.jpeg"},
          // "pastTestReports":  {"1": "https://s3-amazon-65676879.us.in/300_2022-12-09_Body_checkup.jpeg",2:"https://s3-amazon-65676879.us.in/300_2022-12-09_Body_checkup.jpeg"},
          "isActive": true,
          "caseStatus": "LOGGED",
          "zeroLevelConsultacy": "Take Paracetamol with Antacid. Do not eat anything spicy.",
          "firstLevelConsultancy": null,
          "isDeleted": false,
          "aditionalDescription": null,
          "createTime": "2022-07-07z",
          "createUser": "tarun.a",
          "updateTime":"",
          "updateUser": "tarun.a"
        },
              ];
      this.filter = ko.observable('');
      this.dataprovider = ko.computed(function () {
        let filterCriterion = null;
        if (this.filter() && this.filter() != '') {
          filterCriterion = ojdataprovider_1.FilterFactory.getFilter({
            filterDef: { text: this.filter() }
          });
        }
        const arrayDataProvider = new ArrayDataProvider(this.deptArray, { keyAttributes: 'patientName' });
        
          return new ListDataProviderView(arrayDataProvider, { filterCriterion: filterCriterion });

      }, this);
      this.handleValueChanged = () => {
        this.filter(document.getElementById('filter').rawValue);
      };
      this.highlightingCellRenderer = (context) => {
        let field = null;
        if (context.columnIndex === 0) {
          field = 'caseId';
        }
        else if (context.columnIndex === 1) {
          field = 'patientName';
        }
        // else if (context.columnIndex === 2) {
        //   field = 'pocId';
        // }
        // else if (context.columnIndex === 3) {
        //   field = 'phcId';
        // }
        else if (context.columnIndex === 5) {
          field = 'symptomsDescriptions';
        }
        else if (context.columnIndex === 8) {
          field = 'zeroLevelConsultacy';
        }
        else if (context.columnIndex === 9) {
          field = 'firstLevelConsultancy';
        }
        else if (context.columnIndex === 11) {
          field = 'aditionalDescription';
        }
        // else if (context.columnIndex === 8) {
        //   field = 'pocId';
        // }
        // else if (context.columnIndex === 9) {
        //   field = 'phcId';
        // }
        let data = context.row[field].toString();
        const filterString = this.filter();
        let textNode;
        let spanNode = document.createElement('span');
        if (filterString && filterString.length > 0) {
          const index = data.toLowerCase().indexOf(filterString.toLowerCase());
          if (index > -1) {
            const highlightedSegment = data.substr(index, filterString.length);
            if (index !== 0) {
              textNode = document.createTextNode(data.substr(0, index));
              spanNode.appendChild(textNode);
            }
            let bold = document.createElement('b');
            textNode = document.createTextNode(highlightedSegment);
            bold.appendChild(textNode);
            spanNode.appendChild(bold);
            if (index + filterString.length !== data.length) {
              textNode = document.createTextNode(data.substr(index + filterString.length, data.length - 1));
              spanNode.appendChild(textNode);
            }
          }
          else {
            textNode = document.createTextNode(data);
            spanNode.appendChild(textNode);
          }
        }
        else {
          textNode = document.createTextNode(data);
          spanNode.appendChild(textNode);
        }
        context.parentElement.appendChild(spanNode);
      };
      this.columnArray = [
        { headerText: 'Department Id', renderer: this.highlightingCellRenderer, id: 'depId',sortable: "enabled" },
        { headerText: 'Department Name', renderer: this.highlightingCellRenderer, id: 'depName',sortable: "enabled" },
        { headerText: 'Location Id', renderer: this.highlightingCellRenderer, id: 'locId',sortable: "enabled" },
        { headerText: 'Manager Id', renderer: this.highlightingCellRenderer, id: 'manId',sortable: "enabled" }
      ];
      
      self.handleOpen = function () {
        document.querySelector("#modelessDialog1").open();
      }

      self.handleOKClose = function () {
        document.querySelector("#modelessDialog1").close();
      }

      
    }


    return AboutViewModel;
  });

