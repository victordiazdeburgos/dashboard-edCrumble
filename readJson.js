// READ DATA FROM THE JSON FILE
async function readJson() {
    const response = await fetch("data.json");
    const json = await response.json();
    return json;
}

// DECLARATION OF GLOBAL VARIABLES AND CONSTANTS
var dataNumUsers, dataUsersTimeLabels, dataUsersTimeTotal, dataUsersTimeGrowth;
var dataNumVisits, dataVisitsTimeLabels, dataVisitsTimeTotal, dataVisitsTimeGrowth;
var dataNumDesigns, dataDesignsTimeLabels, dataDesignsTimeTotal, dataVisitsTimeGrowth;
const topics = ['General programs',
    'Education',
    'Agriculture',
    'Services',
    'Health and welfare',
    'Humanities and art',
    'Social sciences, business and law',
    'Engineering, manufacturing and construction',
    'Science'];
const numTopics = topics.length;
const edLevels = ['Early childhood education',
    'Primary education',
    'Lower secondary education',
    'Upper secondary education',
    'Post-secondary non-tertiary education',
    'Short-cycle tertiaty education',
    'Bachelor or equivalent',
    'Master or equivalent',
    'Doctoral or equivalent'];
const numEdLevels = edLevels.length;
var dataTopicsTotal, dataTopicsTimeLabels, dataTopicsTime, dataTopicEdLevel;
var dataEdLevelsTotal, dataEdLevelsTimeLabels, dataEdLevelsTime, dataEdLevelTopic;
const windows = ['Create', 'My designs', 'Explore', 'Community', 'Analytics'];
var dataTotTimeSession, dataTimeWindows;
var topUsersContributors, topUsersCommenters;
var topDesignsViews, topDesignsReuse;


// DATA INTO VARIABLES
function readData(data) {

    console.log(data)

    //DATA FOR THE CHARTS OF NUMBER OF USERS
    const numMonthsUsers = data.numUsers.length;
    dataUsersTimeLabels = new Array(numMonthsUsers); // Names of the months of the data
    dataUsersTimeTotal = new Array(numMonthsUsers); // Sum of the total number of users
    dataUsersTimeGrowth = new Array(numMonthsUsers); // New users each month
    for (let i = numMonthsUsers - 1; i >= 0; i--) {
        dataUsersTimeLabels[i] = data.numUsers[i].month;
        dataUsersTimeGrowth[i] = data.numUsers[i].new;
        if (i == numMonthsUsers - 1)
            dataUsersTimeTotal[i] = dataUsersTimeGrowth[i];
        else
            dataUsersTimeTotal[i] = dataUsersTimeTotal[i + 1] + dataUsersTimeGrowth[i];
    }
    dataNumUsers = dataUsersTimeTotal[0]; // number of new users signed up to edCrumbel until the moment the data is being visualized

    //DATA FOR THE CHARTS OF NUMBER OF VISITS 
    const numMonthsVisits = data.numVisits.length;
    dataVisitsTimeLabels = new Array(numMonthsVisits); // Names of the months of the data
    dataVisitsTimeTotal = new Array(numMonthsVisits); // Sum of the total number of visits
    dataVisitsTimeGrowth = new Array(numMonthsVisits); // New visits each month
    for (let i = numMonthsVisits - 1; i >= 0; i--) {
        dataVisitsTimeLabels[i] = data.numVisits[i].month;
        dataVisitsTimeGrowth[i] = data.numVisits[i].new;
        if (i == numMonthsVisits - 1)
            dataVisitsTimeTotal[i] = dataVisitsTimeGrowth[i];
        else
            dataVisitsTimeTotal[i] = dataVisitsTimeTotal[i + 1] + dataVisitsTimeGrowth[i];
    }

    dataNumVisits = dataVisitsTimeTotal[0]; // number of visits done to edCrumbel the moment the data is being visualized

    //DATA FOR THE CHARTS OF NUMBER OF DESIGNS 
    const numMonthsDesigns = data.numDesigns.length;
    dataDesignsTimeLabels = new Array(numMonthsDesigns); // Names of the months of the data
    dataDesignsTimeTotal = new Array(numMonthsDesigns); // Sum of the total number of designs
    dataDesignsTimeGrowth = new Array(numMonthsDesigns); // New designs each month
    for (let i = numMonthsDesigns - 1; i >= 0; i--) {
        dataDesignsTimeLabels[i] = data.numDesigns[i].month;
        dataDesignsTimeGrowth[i] = data.numDesigns[i].new;
        if (i == numMonthsDesigns - 1)
            dataDesignsTimeTotal[i] = dataDesignsTimeGrowth[i];
        else
            dataDesignsTimeTotal[i] = dataDesignsTimeTotal[i + 1] + dataDesignsTimeGrowth[i];
    }

    dataNumDesigns = dataDesignsTimeTotal[0]; // number of designs created in edCrumble until the momoent the data is being visualized

    // DATA FOR THE CHARTS OF THE TYPES OF DESIGN BY TOPIC
    dataTopicsTotal = new Array(numTopics); // Number of designs of each topic
    const numMonthTopics = data.designsTopic.topicMonth[topics[0]].length; // the number of months with data has to be the same for all topics
    dataTopicsTimeLabels = new Array(numMonthTopics); // Names of the months of the data
    dataTopicsTime = new Array(numTopics); // Number of designs of each topic created each month
    for (let i = 0; i < numTopics; i++) {
        dataTopicsTime[i] = new Array(numMonthTopics);
        for (let j = numMonthTopics - 1; j >= 0; j--) {
            dataTopicsTimeLabels[j] = data.designsTopic.topicMonth[topics[i]][j].month;
            dataTopicsTime[i][j] = data.designsTopic.topicMonth[topics[i]][j].new;
            if (j == numMonthTopics - 1)
                dataTopicsTotal[i] = dataTopicsTime[i][j];
            else
                dataTopicsTotal[i] = dataTopicsTotal[i] + dataTopicsTime[i][j];
        }
    }

    dataTopicEdLevel = new Array(numTopics);
    for (let i = 0; i < numTopics; i++) {
        dataTopicEdLevel[i] = new Array(numEdLevels);
        for (let j = 0; j < numEdLevels; j++) {
            dataTopicEdLevel[i][j] = data.designsTopic.topicEdLevel[edLevels[i]][topics[j]];
        }
    }

    // DATA FOR THE CHARTS OF THE TYPES OF DESIGN BY EDUCATIONAL LEVEL
    dataEdLevelsTotal = new Array(numEdLevels); // Number of designs of each educational level
    const numMonthEdLevels = data.designsEdLevel.edLevelMonth[edLevels[0]].length; // the number of months with data has to be the same for all educational levels
    dataEdLevelsTimeLabels = new Array(numMonthEdLevels); // Names of the months of the data
    dataEdLevelsTime = new Array(numEdLevels); // Number of designs of each educational level created each month
    for (let i = 0; i < numEdLevels; i++) {
        dataEdLevelsTime[i] = new Array(numMonthEdLevels);
        for (let j = numMonthEdLevels - 1; j >= 0; j--) {
            dataEdLevelsTimeLabels[j] = data.designsEdLevel.edLevelMonth[edLevels[i]][j].month;
            dataEdLevelsTime[i][j] = data.designsEdLevel.edLevelMonth[edLevels[i]][j].new;
            if (j == numMonthEdLevels - 1)
                dataEdLevelsTotal[i] = dataEdLevelsTime[i][j];
            else
                dataEdLevelsTotal[i] = dataEdLevelsTotal[i] + dataEdLevelsTime[i][j];
        }
    }

    dataEdLevelTopic = new Array(numEdLevels);
    for (let i = 0; i < numEdLevels; i++) {
        dataEdLevelTopic[i] = new Array(numTopics);
        for (let j = 0; j < numTopics; j++) {
            dataEdLevelTopic[i][j] = data.designsEdLevel.edLevelTopic[topics[i]][edLevels[j]];
        }
    }


    // DATA FOR THE CHART OF THE TIME SPENT ON EACH WINDOW
    const numWindows = windows.length;
    dataTimeWindows = new Array(numWindows); // Time spent on each window
    dataTotTimeSession = 0; // Total duration of the session
    for (let i = 0; i < numWindows; i++) {
        dataTimeWindows[i] = data.averageSession[windows[i]];
        dataTotTimeSession += dataTimeWindows[i];
    }

    // DATA FOR THE LIST OF TOP USERS
    topUsersContributors = data.listUsers.slice().sort(function (a, b) { return b.designs - a.designs }); // Users sorted by number of designs created
    topUsersCommenters = data.listUsers.slice().sort(function (a, b) { return b.comments - a.comments }); // Users sorted by number of comments made

    // DATA FOR THE LIST OF TOP DESIGNS
    topDesignsViews = data.listDesigns.slice().sort(function (a, b) { return b.views - a.views }); // Designs sorted by views received
    topDesignsReuse = data.listDesigns.slice().sort(function (a, b) { return b.reuse - a.reuse }); // Designs sorted by times reused
}

