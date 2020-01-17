var componentInfo = {
    componentViewModel: (viewModel) => {

        var result = $.extend({}, viewModel);
        result.text = viewModel.text;
        result.type = "normal";
        result.onClick = function (e) {
            DevExpress.ui.notify("Acion ejecutada");

        return result;
    },
    defaults: {
        style: { /*width: "auto", height: "auto"*/ }
    }
};

DevExpress.ExpressApp.Mobile.updateComponentInfo("Save_Undo", componentInfo);