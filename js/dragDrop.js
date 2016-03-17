var dragDropOps = {
    dragOps: function () {
        $(".product").draggable({
            helper: "clone",
            revert: "invalid"
        });
    },
    dropOps: function () {

        $(".cart").droppable({
            activeClass: "ui-state-highlight",
            hoverClass: "ui-state-hover",
            accept: '.product:not(".clones")',
            drop: this.onDropToCart

        });
    },
    binOps: function () {
        $(".bin").droppable({
            activeClass: "ui-state-highlight",
            hoverClass: "ui-state-hover",
            accept: ".clones",
            drop: this.onDropToBin
        });
    },
    onDropToCart: function (event, ui) {
        $(this).append($(ui.draggable).clone().addClass('clones'));
        $('.clones').draggable({
            revert: "invalid"
        });
        $(ui.draggable).remove();
    },
    onDropToBin: function (event, ui) {
        $(ui.draggable).remove();
    }
};