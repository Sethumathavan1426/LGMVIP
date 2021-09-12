// external js: flickity.pkgd.js

var imageCarousel = {
    zippyImages: [
        "/image/zippylife1.png",
        "/image/zippylife2.png",
        "/image/zippylife3.png",
        "/image/zippylife4.png",
        "/image/zippylife5.png",
        "/image/zippylife6.png",
        "/image/zippylife7.png",
        "/image/zippylife8.png"
    ],
    initView: function(){
        var content = document.getElementById("main-view");
        var imgContent = document.createElement("img");
        imgContent.src = this.zippyImages[0];
        content.appendChild(imgContent);

        this.initScroll(0);
        document.getElementById("scroll-prev").setAttribute("pgNum", Number(0));
        document.getElementById("scroll-next").setAttribute("pgNum", 3);
    },
    renderView: function(ele){
        var img = ele.children[0];
        document.getElementById("main-view").children[0].src = img.src;
    },
    scrollView: function(scroll){
        var inc = Number(scroll);
        var left = Number(document.getElementById("scroll-prev").getAttribute("pgNum"));
        var right = Number(document.getElementById("scroll-next").getAttribute("pgNum"));
        if (inc == 1 && left < 4 && right < 8) {
            document.getElementById("scroll-prev").setAttribute("pgNum", left + inc);
            document.getElementById("scroll-next").setAttribute("pgNum", right + inc);

            this.initScroll(left + inc);
        }
        if (inc == -1 && right > 3 && left > 0) {
            document.getElementById("scroll-prev").setAttribute("pgNum", left + inc);
            document.getElementById("scroll-next").setAttribute("pgNum", right + inc);

            this.initScroll(left + inc);
        }
    },
    initScroll: function (startIdx) {
        var idx = Number(startIdx);
        var scrollContents = document.getElementById("main-view-scroll").children;
        for (let i = 0; i < scrollContents.length; i++, idx++) {
            var scrollBox = scrollContents[i];
            var img = document.createElement("img");
            img.src = this.zippyImages[idx];
            img.width = "70", img.height = "75";
            scrollBox.innerHTML = "";
            scrollBox.appendChild(img);
        }
    }
};

imageCarousel.initView();
