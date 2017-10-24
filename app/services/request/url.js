(function () {
    'use strict';

    angular
        .module('startApp')
        .factory('url', url);

    function url() {

        var proxy = "http://localhost:8080/";
        var serv = 'http://192.168.1.125:9082/XimpleReportWeb/';
        var server = proxy + serv;

        var url = {
            login: server + 'login_custom',
            initializedDataSource: server + 'report/new',
            newDataSources: server + 'dataSource/newDefault',
            dataSet: server + 'metadata/tables?schemaName=CAPWD_DTA&typeOfRelations=VIEW',
            dataSetNew: server + 'report/odaDataSet',
            createTable: server + 'report/table',
            dataSetCreate: null,
            dataSetFilters: null,
            joinDataSet: server + 'report/joinDataSet',
            tableMetadata: server + 'metadata/columns?schemaName=CAPWD_DTA&tableName=',
            saveReport: server + 'report/save',
            createLabel: server + 'report/label',
            createGrid: server + 'report/grid',
            //showReport: server + 'reportShow',

            setDataSetCreate: function (id) {
                if (!id) {
                    console.warn('no id', id);
                    return;
                }
                this.dataSetCreate = server + 'report/odaDataSet/' + id + '/fillBaseData';
                this.dataSetFilters = server + 'report/dataSet/' + id + '/filters'
            },
            showReport: function (reportName, reportType) {
                return serv + 'reportShow?reportName=' + reportName + '.rptdesign&reportFormat=' + reportType;
            }
        };
        return url;
    }
})();