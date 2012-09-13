WMStats.namespace("RequestModel");
WMStats.RequestModel = function() {
    var initView  = 'requestByCampaignAndDate';
    var options = {'include_docs': true};
    var reqModel = new WMStats._RequestModelBase(initView, options);
    reqModel.setVisualization(WMStats.DefaultRequestTable);
    reqModel.setTrigger('requestReady');
    return reqModel;
}()
