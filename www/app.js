var firstUrl = "https://klikkios.id/app/", urlService = firstUrl + "services/apps.php", urlContent = firstUrl + "contents/";

function run_first(){
    var height = $(window).outerHeight(), height2 = height - 0;
    $("#main-loading").height(height).removeClass("hide");
}
run_first();
window.setTimeout(function(){
	$.getScript(urlContent+"main-v2.js");
}, 1800);