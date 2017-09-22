(function () {
    'use strict';

    angular
        .module('startApp')
        .factory('url', url);

// createGrid: 'services/request/grid.json',
    function url() {
        var server = "http://localhost:8080/http://192.168.1.110:9082/XimpleReportWeb/";
        var url = {
            login: server + 'login_custom',
            initializedDataSource: server + 'report/new',
            newDataSources: server + 'dataSource/newDefault',
            dataSet: server + 'metadata/tables?schemaName=CAPWD_DTA&typeOfRelations=VIEW',
            dataSetNew: server + 'report/dataSet/new',
            createTable: server + 'report/table/new',
            dataSetCreate: null,
            tableMetadata: server + 'metadata/columns?schemaName=CAPWD_DTA&tableName=',
            saveReport: server + 'report/save',
            createLabel: server + '/report/label',

            createGrid: server + 'report/grid',

            setDataSetCreate: function (id) {
                if (!this.dataSetCreate) {
                    if (!id) {
                        console.warn('no id', id);
                        return;
                    }
                    this.dataSetCreate = server + 'report/dataSet/'+ id + '/fillBaseData';
                }
            }
        };
        return url;
    }}
)();