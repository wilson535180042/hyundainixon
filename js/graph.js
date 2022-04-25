$(document).ready(function () {

	var graphData = [{
			data: [ [1, 1080], [2, 1340], [3, 1510], [4, 1670], [5, 1820], [6, 2180], [7, 3410] ],
			color: '#71c73e'
		}
	];

	$.plot($('#graph-lines'), graphData, {
		series: {
			points: {
				show: true,
				radius: 5
			},
			lines: {
				show: true
			},
			shadowSize: 5
		},
		grid: {
			color: '#646464',
			borderColor: 'transparent',
			borderWidth: 20,
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0
		},
		yaxis: {
			tickSize: 250
		}
	});

	$.plot($('#graph-bars'), graphData, {
		series: {
			bars: {
				show: true,
				barWidth: .9,
				align: 'center'
			},
			shadowSize: 0
		},
		grid: {
			color: '#646464',
			borderColor: 'transparent',
			borderWidth: 20,
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
            tickDecimals: 0,
		},
		yaxis: {
			tickSize: 250
		}

	});

	$('#graph-bars').hide();

	$('#lines').on('click', function (e) {
		$('#bars').removeClass('active');
		$('#graph-bars').fadeOut();
		$(this).addClass('active');
		$('#graph-lines').fadeIn();
		e.preventDefault();
	});

	$('#bars').on('click', function (e) {
		$('#lines').removeClass('active');
		$('#graph-lines').fadeOut();
		$(this).addClass('active');
		$('#graph-bars').fadeIn().removeClass('hidden');
		e.preventDefault();
	});

	function showTooltip(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css({
			top: y - 16,
			left: x + 10
		}).appendTo('body').fadeIn();
	}

	var previousPoint = null;

	$('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$('#tooltip').remove();
				var y = item.datapoint[1];
					showTooltip(item.pageX, item.pageY, y + 'k COVID-19 Case ');
			}
		} else {
			$('#tooltip').remove();
			previousPoint = null;
		}
	});
});