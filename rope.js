(function() {
    "use strict";

    function getIMDRank(lsoa) {
        return window.data[lsoa]["IMD"]["rank"];
    }

    function meanLSOA() {
        var count;
        return Object.keys(window.data)
        .map(function (lsoa11cd) {
            count += 1;
            return window.data[lsoa11cd][indicator].raw;
        }).reduce(function (a, b) {
            return a + b;
        }) / count;
    }

    function maxLSOA() {
        return Object.keys(window.data).reduce(function (a, b) {
            return getIMDRank(a) > getIMDRank(b) ? a : b;
        });
    }

    function minLSOA() {
        return Object.keys(window.data).reduce(function (a, b) {
            return getIMDRank(a) < getIMDRank(b) ? a : b;
        });
    }

    function medianLSOA() {
        var values = Object.keys(window.data)
        .map(function (lsoa11cd) {
            return window.data[lsoa11cd][indicator].raw;
        }).sort(function (a, b) {
            return a - b;
        });

        return values[values.length() / 2];
    }

    function drawChart() {
        var indicator,
            lsoa11cd_left = PCDtoLSOA11CD($("#left_postcode_rope").get()[0].value.toUpperCase()),
            lsoa11cd_right = PCDtoLSOA11CD($("#right_postcode_rope").get()[0].value.toUpperCase());

        if (!lsoa11cd_left || !lsoa11cd_right) {
            return;
        };

        for (indicator in INDICATORS) {
            //console.log(d3.select('#compchart').style('width'));
            var margin = {top: 0, right: 10, bottom: 0, left: 10}
                , width = parseInt(d3.select('#compchart').style('width'), 10) / 3
                , width = width - margin.left - margin.right
                , barHeight = 20
                , percent = d3.format('%');

            // scales and axes
            var x = d3.scale.linear()
                .range([0, width])
                .domain([0, 10]); // hard-coding this because I know the data

            //console.log(window.data[lsoa11cd_left][indicator]["decile"]);

            var svgl = d3.select("#"+indicator+"-left").append("svg")
                .attr("width", width)
                .attr("height", barHeight)
                .append('rect')
                .attr('class', 'bar')
                .attr('style', 'fill : white')
                .attr('x', '0')
                .attr('width', x(window.data[lsoa11cd_left][indicator]["decile"]))
                .attr('y', '0')
                .attr('height', '50');

            var svgr = d3.select("#"+indicator+"-right").append("svg")
                .attr("width", width)
                .attr("height", barHeight)
                .append('rect')
                .attr('class', 'bar')
                .attr('style', 'fill : white')
                .attr('x', '0')
                .attr('width', x(window.data[lsoa11cd_right][indicator]["decile"]))
                .attr('y', '0')
                .attr('height', '50');
        }
    }
    drawChart();

    function updateChart(which) {
        var indicator,
            data,
            lsoa11cd = PCDtoLSOA11CD($("#" + which + "_postcode_rope").get()[0].value);

        if (!lsoa11cd) {
            return;
        } else {
            data = window.data[lsoa11cd];
        }

        for (indicator in INDICATORS) {
            $("#" + which + "_" + indicator).css("width", "" + 10*data[indicator]["decile"] + "%");
        }
    }

    function enablePostcode(which) {
        $("#" + which + "_postcode_rope").prop("disabled", false);
    }

    function disablePostcode(which) {
        $("#" + which + "_postcode_rope").prop("disabled", true);
    }

    function changePostcode(which, lsoa11cd) {
        var input = $("#" + which + "_postcode_rope");
        input.val(window.data[lsoa11cd]["PCD7s"][0]);
        input.change()
    }

    function onSelectChange(which) {
        switch ($("#which_" + which).val()) {
            case "max":
                disablePostcode(which);
                changePostcode(which, maxLSOA());
                break;
            case "min":
                disablePostcode(which);
                changePostcode(which, minLSOA());
                break;
            case "mean":
                disablePostcode(which);
                changePostcode(which, meanLSOA());
                break;
            case "custom":
                enablePostcode(which);
                break;
        }
    }

    $("#left_postcode_rope").change(drawChart);
    $("#right_postcode_rope").change(drawChart);
    $("#which_left").change(onSelectChange.bind(undefined, "left"));
    $("#which_right").change(onSelectChange.bind(undefined, "right"));
}());
