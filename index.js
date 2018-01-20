$(document).ready(function() {
    var delay = 800;

    $(".repo").hide().delay(delay).show(500);
    $(".projects").hide().delay(delay).show(500);
    $(".course").hide().delay(delay).slideDown(500);
    $("#repotitle").hide().delay(delay).show(500);

    if ($(window).width() < 800) {
        $("#Links").hide();
        $("#courses").hide();
    } else {
        $("#Links").hide().delay(delay).show();
        $("#courses").hide().delay(delay).show();
    }
   
});
$(window).on('resize', function() {
    if ($(window).width() < 800) {
        $("#Links").hide();
        $("#courses").hide();
    } else if ($(window).width() >= 800) {
        $("#Links").show();
        $("#courses").show();
    }
});

function showRepo() {
    if ($(".repo").is(":hidden")) {
        $(".repo").slideDown(300);
    } else
        $(".repo").slideUp(300);
}

function showProjects() {
    if ($("#Links").is(":hidden")) {
        $("#Links").slideDown(300);
    } else
        $("#Links").slideUp(300);
}

function showCourses() {
    if ($("#courses").is(":hidden")) {
        $("#courses").slideDown(300);
    } else
        $("#courses").slideUp(300);
}

function navmenu() {
    var x = document.getElementById('navstuff');
    if (x.className === "naviBar") {
        x.className += " responsive";
    } else {
        x.className = "naviBar";
    }
}


function repoCompress() {
    var repolist = document.getElementById("repolist");
    repolist.className = "col-sm-2";
    repolist.css += "float:right;"
}

function getCourseInfo(coursetag) {
	$("body").css("background-color", "gray");
	 $.ajax({url: "/courseInfo"}).done( function(data) {
            console.log(data);
            $(".coursetitle").text(data.title);
            $(".courseDescription").text(data.description);
            $(".prereqs").text( data.prereq);

            $("body").css("background-color", "green");
        });

}