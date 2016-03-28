$(document).ready(function () {
    $("body").on("mouseenter", ".logged-out-wrapper", function () {
        return $("#qtip-headLoginDialog").is($(":visible")) ? $("#qtip-headLoginDialog").css('visibility','visible') : $("#qtip-headLoginDialog").css('visibility','visible')
    });
    $("body").on("click", function (a) {
        var b = $(a.target);
        return b.parents("div").is($(".logged-out-wrapper")) ? !1 : void $("#registerDialog,#loginDialog").hide()
    });
});
