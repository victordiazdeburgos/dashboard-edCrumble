// DECLARATION OF COLORS TO BE USED IN THE CHARTS
var nineColors = [
    'green',
    'red',
    'blue',
    'pink',
    'brown',
    'orange',
    'skyblue',
    'plum',
    'purple'
];

// 3 CHARTS TOP
function users() {
    var totalUsers = document.getElementById("totalUsers").getContext("2d");
    var growthUsers = document.getElementById("growthUsers").getContext("2d");

    document.getElementById("numUsers").innerHTML = dataNumUsers; // Display number of Users at the moment the dashboard is being visualized

    new Chart(totalUsers, {
        type: 'line',
        data: {
            labels: dataUsersTimeLabels.slice(0, 12).reverse(), // We only want to visulize the 12 most recent months, that is what the .slice() is used for. And we reverse it because in the database the most recent month is the first one and we want to visualize it the last one
            datasets: [{
                label: 'Users',
                data: dataUsersTimeTotal.slice(0, 12).reverse(),
                borderColor: 'green',
                backgroundColor: 'red',
                pointHoverRadius: 8
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Number of users'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });

    new Chart(growthUsers, {
        type: 'bar',
        data: {
            labels: dataUsersTimeLabels.slice(0, 12).reverse(),
            datasets: [{
                label: 'Users',
                data: dataUsersTimeGrowth.slice(0, 12).reverse(),
                backgroundColor: 'lightgreen',
                barThickness: 15,
                hoverBackgroundColor: 'green'
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Number of users'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });
}

function visits() {
    var totalVisits = document.getElementById("totalVisits").getContext("2d");
    var growthVisits = document.getElementById("growthVisits").getContext("2d");

    document.getElementById("numVisits").innerHTML = dataNumVisits; // Display number of Visits at the moment the dashboard is being visualized


    new Chart(totalVisits, {
        type: 'line',
        data: {
            labels: dataVisitsTimeLabels.slice(0, 12).reverse(),
            datasets: [{
                label: 'Visits',
                data: dataVisitsTimeTotal.slice(0, 12).reverse(),
                borderColor: 'green',
                backgroundColor: 'red',
                pointHoverRadius: 8
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Number of visits'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });

    new Chart(growthVisits, {
        type: 'bar',
        data: {
            labels: dataVisitsTimeLabels.slice(0, 12).reverse(),
            datasets: [{
                label: 'Visits',
                data: dataVisitsTimeGrowth.slice(0, 12).reverse(),
                backgroundColor: 'lightgreen',
                barThickness: 15,
                hoverBackgroundColor: 'green'
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Number of visits'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });
}

function designs() {
    var totalDesigns = document.getElementById("totalDesigns").getContext("2d");
    var growthDesigns = document.getElementById("growthDesigns").getContext("2d");

    document.getElementById("numDesigns").innerHTML = dataNumDesigns; // Display number of Users at the moment the dashboard is being visualized

    new Chart(totalDesigns, {
        type: 'line',
        data: {
            labels: dataDesignsTimeLabels.slice(0, 12).reverse(),
            datasets: [{
                label: 'Designs',
                data: dataDesignsTimeTotal.slice(0, 12).reverse(),
                borderColor: 'green',
                backgroundColor: 'red',
                pointHoverRadius: 8
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Number of designs'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });

    new Chart(growthDesigns, {
        type: 'bar',
        data: {
            labels: dataDesignsTimeLabels.slice(0, 12).reverse(),
            datasets: [{
                label: 'Designs',
                data: dataDesignsTimeGrowth.slice(0, 12).reverse(),
                backgroundColor: 'lightgreen',
                barThickness: 15,
                hoverBackgroundColor: 'green'
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Number of designs'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });
}

// TYPE OF DESIGNS BY TOPIC
function designsTopicTotal() {
    var myChart = document.getElementById("designsTopicTotal").getContext("2d");

    new Chart(myChart, {
        type: 'pie',
        data: {
            labels: topics,
            datasets: [{
                label: 'Designs',
                data: dataTopicsTotal,
                backgroundColor: nineColors,
                hoverOffset: 10
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Total'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });
}

function designsTopicTime() {
    var myChart = document.getElementById("designsTopicTime").getContext("2d");

    new Chart(myChart, {
        type: 'bar',
        data: {
            labels: dataTopicsTimeLabels.slice(0, 12).reverse(), // We take the last 12 months and we reverse the data (the first month in the database is the most recent, therefore it has to be displayed the last one in the chart)
            datasets: [{
                label: topics[0],
                data: dataTopicsTime[0].slice(0, 12).reverse(),
                backgroundColor: nineColors[0]
            },
            {
                label: topics[1],
                data: dataTopicsTime[1].slice(0, 12).reverse(),
                backgroundColor: nineColors[1]
            },
            {
                label: topics[2],
                data: dataTopicsTime[2].slice(0, 12).reverse(),
                backgroundColor: nineColors[2]
            },
            {
                label: topics[3],
                data: dataTopicsTime[3].slice(0, 12).reverse(),
                backgroundColor: nineColors[3]
            },
            {
                label: topics[4],
                data: dataTopicsTime[4].slice(0, 12).reverse(),
                backgroundColor: nineColors[4]
            },
            {
                label: topics[5],
                data: dataTopicsTime[5].slice(0, 12).reverse(),
                backgroundColor: nineColors[5]
            },
            {
                label: topics[6],
                data: dataTopicsTime[6].slice(0, 12).reverse(),
                backgroundColor: nineColors[6]
            },
            {
                label: topics[7],
                data: dataTopicsTime[7].slice(0, 12).reverse(),
                backgroundColor: nineColors[7]
            },
            {
                label: topics[8],
                data: dataTopicsTime[8].slice(0, 12).reverse(),
                backgroundColor: nineColors[8]
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'By month of creation'
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        },
                        usePointStyle: true, // if true, the color of each item in the legend is displayed as a circle (point)
                        boxHeight: 9,
                        boxWidth: 9 // if point style, this is the variable for the size of the point
                    }
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: false, // by default it is true
                }
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}


function designsTopicEdLevel() {
    var canvasTopicEdLevel = document.getElementById("designsTopicEdLevel").getContext("2d");

    var selected = document.getElementById("ddEdLevels").value;

    var chartTopicEdLevel = new Chart(canvasTopicEdLevel, {
        type: 'doughnut',
        data: {
            labels: topics,
            datasets: [{
                label: 'Designs',
                data: dataTopicEdLevel[selected],
                backgroundColor: nineColors,
                hoverOffset: 10
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'By educational level'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });

    return chartTopicEdLevel;
}

function updateEdLevel(chartTopicEdLevel) {
    var selected = document.getElementById("ddEdLevels").value;
    chartTopicEdLevel.data.datasets[0].data = dataTopicEdLevel[selected];
    chartTopicEdLevel.update();
}

// TYPE OF DESIGNS BY EDUCATIONAL LEVEL
function designsEdLevelTotal() {
    var myChart = document.getElementById("designsEdLevelTotal").getContext("2d");

    new Chart(myChart, {
        type: 'pie',
        data: {
            labels: edLevels,
            datasets: [{
                label: 'Designs',
                data: dataEdLevelsTotal,
                backgroundColor: nineColors,
                hoverOffset: 10
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Total'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });
}

function designsEdLevelTime() {
    var myChart = document.getElementById("designsEdLevelTime").getContext("2d");

    new Chart(myChart, {
        type: 'bar',
        data: {
            labels: dataEdLevelsTimeLabels.slice(0, 12).reverse(), // We take the last 12 months and we reverse the data (the first month in the database is the most recent, therefore it has to be displayed the last one in the chart)
            datasets: [{
                label: edLevels[0],
                data: dataEdLevelsTime[0].slice(0, 12).reverse(),
                backgroundColor: nineColors[0]
            },
            {
                label: edLevels[1],
                data: dataEdLevelsTime[1].slice(0, 12).reverse(),
                backgroundColor: nineColors[1]
            },
            {
                label: edLevels[2],
                data: dataEdLevelsTime[2].slice(0, 12).reverse(),
                backgroundColor: nineColors[2]
            },
            {
                label: edLevels[3],
                data: dataEdLevelsTime[3].slice(0, 12).reverse(),
                backgroundColor: nineColors[3]
            },
            {
                label: edLevels[4],
                data: dataEdLevelsTime[4].slice(0, 12).reverse(),
                backgroundColor: nineColors[4]
            },
            {
                label: edLevels[5],
                data: dataEdLevelsTime[5].slice(0, 12).reverse(),
                backgroundColor: nineColors[5]
            },
            {
                label: edLevels[6],
                data: dataEdLevelsTime[6].slice(0, 12).reverse(),
                backgroundColor: nineColors[6]
            },
            {
                label: edLevels[7],
                data: dataEdLevelsTime[7].slice(0, 12).reverse(),
                backgroundColor: nineColors[7]
            },
            {
                label: edLevels[8],
                data: dataEdLevelsTime[8].slice(0, 12).reverse(),
                backgroundColor: nineColors[8]
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'By month of creation'
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        },
                        usePointStyle: true, // if true, the color of each item in the legend is displayed as a circle (point)
                        boxHeight: 9,
                        boxWidth: 9 // if point style, this is the variable for the size of the point
                    }
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: false, // by default it is true
                }
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}

function designsEdLevelTopic() {
    var canvasEdLevelTopic = document.getElementById("designsEdLevelTopic").getContext("2d");

    var chartEdLevelTopic = new Chart(canvasEdLevelTopic, {
        type: 'doughnut',
        data: {
            labels: edLevels,
            datasets: [{
                label: 'Designs',
                data: dataEdLevelTopic[4],
                backgroundColor: nineColors,
                hoverOffset: 10
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'By topic'
                },
                legend: {
                    display: false
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });

    return chartEdLevelTopic;
}

function updateTopic(chartEdLevelTopic) {
    var selected = document.getElementById("ddTopics").value;
    chartEdLevelTopic.data.datasets[0].data = dataTopicEdLevel[selected];
    chartEdLevelTopic.update();
}

// CHART TIME SPENT ON EACH MENU
function timeSessions() {
    var myChart = document.getElementById("timeSessions").getContext("2d");

    document.getElementById("totTimeSession").innerHTML = dataTotTimeSession; // Display number of Users at the moment the dashboard is being visualized

    new Chart(myChart, {
        type: 'pie',
        data: {
            labels: windows,
            datasets: [{
                label: 'Menus',
                data: dataTimeWindows,
                backgroundColor: [
                    'lightgreen',
                    'gold',
                    'skyblue',
                    'pink',
                    'deeppink'
                ],
                hoverOffset: 10
            }
            ]
        },
        options: {
            layout: {
                padding: {
                    left: 10,
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Time spent on each menu',
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 18
                        },
                        usePointStyle: true, // if true, the color of each item in the legend is displayed as a circle (point)
                        boxHeight: 9,
                        boxWidth: 9 // if point style, this is the variable for the size of the point
                    }
                },
                tooltip: { // extra information when the mouse is over the chart
                    enabled: true // by default it is true
                }
            }
        }
    });
}

// LISTS TOP USERS
function listTopContributors() {
    itemsList = 3;
    for (let i = 0; i < itemsList; i++) {
        let name = "nameContributor" + (i + 1);
        let numDesigns = "numDesigns" + (i + 1);
        document.getElementById(name).innerHTML = topUsersContributors[i].name; // Display name of the user
        document.getElementById(name).setAttribute("href", topUsersContributors[i].link); // Adds the link to the profile of the user
        document.getElementById(numDesigns).innerHTML = topUsersContributors[i].designs; // Display number of designs of the user
    }
}

function listTopCommenters() {
    itemsList = 3;
    for (let i = 0; i < itemsList; i++) {
        let name = "nameCommenter" + (i + 1);
        let numComments = "numComments" + (i + 1);
        document.getElementById(name).innerHTML = topUsersCommenters[i].name; // Display name of the user
        document.getElementById(name).setAttribute("href", topUsersCommenters[i].link); // Adds the link to the profile of the user
        document.getElementById(numComments).innerHTML = topUsersCommenters[i].comments; // Display number of comments the user have made
    }
}

// LISTS TOP DESIGNS
function listMostViewed() {
    itemsList = 3;
    for (let i = 0; i < itemsList; i++) {
        let title = "titleViews" + (i + 1);
        let views = "views" + (i + 1);
        document.getElementById(title).innerHTML = topDesignsViews[i].title; // Display title of the design
        document.getElementById(title).setAttribute("href", topDesignsViews[i].link); // Adds the link to the design
        document.getElementById(views).innerHTML = topDesignsViews[i].views; // Display number of comments the user have made
    }
}

function listMostReused() {
    itemsList = 3;
    for (let i = 0; i < itemsList; i++) {
        let title = "titleReuse" + (i + 1);
        let reuse = "reuse" + (i + 1);
        document.getElementById(title).innerHTML = topDesignsReuse[i].title; // Display title of the design
        document.getElementById(title).setAttribute("href", topDesignsReuse[i].link); // Adds the link to the design
        document.getElementById(reuse).innerHTML = topDesignsReuse[i].reuse; // Display number of comments the user have made
    }
}