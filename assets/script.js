// create the planner
$("#currentDay").text(moment().format("MMMM Do, YYYY"));
// show current day
// show different timeblocks for each hour
// when clicking on each block you can enter an event
// add save button
let text = $('.text');
let save = $('.saveBtn');
let hour = moment().hour();

console.log(hour);
// when clicking save it saves the page
text.each(function () {
    let timeBlocks = parseInt($(this).attr('id'));

    if (timeBlocks === hour) {
        $(this).addClass('now');
        $(this).removeClass('future');
        $(this).removeClass('past');
    }

    else if (timeBlocks < hour) {
        $(this).addClass('past');
        $(this).removeClass('now');
        $(this).removeClass('future');
    }

    else {
        $(this).addClass('future');
        $(this).removeClass('now');
        $(this).removeClass('past');
    }
});
// try refresh to check if working
