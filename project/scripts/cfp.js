const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;


const proposals = [
    {
        proposalName: "B1G Conference Proposal",
        teamCount: 24,
        automaticQualify: false,
        description: "The 23 best teams will get in, with the last slot reserved for a Group of 5 school. Conference championships will be eliminated."
    },

    {
        proposalName: "SEC Proposal",
        teamCount: 16, 
        automaticQualify: true,
        description: "The 5 Power 5 conference champions will receive an automatic bid, followed by the next 11 at-large teams."
    },

    {
        proposalName: "Michael's Proposal",
        teamCount: 24,
        automaticQualify: false,
        description: "Retain conference championships. Seeds 17-24 will have a \'Play-in\' to advance to tournament bracket. Top 16 teams will have receive bids."
    }
]

const proposalSelect = document.getElementById("formats");

if (proposalSelect) {
    proposals.forEach(function(proposal) {
        const option = document.createElement("option");
        option.value = proposal.proposalName
        option.textContent = proposal.proposalName
        proposalSelect.appendChild(option);


    });
    proposalSelect.addEventListener("change", displayProposal);
}

function displayProposal() {
    const selectedName = proposalSelect.value;
    const selectedProposal = proposals.find(function(proposal) {
        return proposal.proposalName === selectedName;
    });

    if (!selectedProposal) return;

    document.getElementById("proposal-title").textContent = selectedProposal.proposalName;
    document.getElementById("team-count").textContent = `Number of teams: ${selectedProposal.teamCount}`;
    if (selectedProposal.automaticQualify == false) {
        document.getElementById("auto-qualify").textContent = `No automatic qualifiers.`;
    }
    else {
        document.getElementById("auto-qualify").textContent = `Includes automatic qualifiers.`;
    }
    
    document.getElementById("other-format").textContent = selectedProposal.description;
}

const results = [
    {
        year: 2014,
        teamAmount: 4,
        teams: {
            seed_1 : "Alabama (12-1)",
            seed_2 : "Oregon (12-1)",
            seed_3 : "Florida State (13-0)",
            seed_4 : "Ohio State (12-1)"
        },
        champion: "Ohio State",
        runnerUp: "Oregon",
        finalScore: "42-20"
    },
    {
        year: 2015,
        teamAmount: 4,
        teams: {
            seed_1 : "Clemson (13-0)",
            seed_2 : "Alabama (12-1)",
            seed_3 : "Michigan State (12-1)",
            seed_4 : "Oklahoma (11-1)"
        },
        champion: "Alabama",
        runnerUp: "Clemson",
        finalScore: "45-40"
    },
    {
        year: 2016,
        teamAmount: 4,
        teams: {
            seed_1 : "Alabama (13-0)",
            seed_2 : "Clemson (12-1)",
            seed_3 : "Ohio State (11-1)",
            seed_4 : "Washington (12-1)"
        },
        champion: "Clemson",
        runnerUp: "Alabama",
        finalScore: "31-35"
    },
    {
        year: 2017,
        teamAmount: 4,
        teams: {
            seed_1 : "Clemson (12-1)",
            seed_2 : "Oklahoma (12-1)",
            seed_3 : "Georgia (12-1)",
            seed_4 : "Alabama (11-1)"
        },
        champion: "Alabama",
        runnerUp: "Georgia",
        finalScore: "26-23"
    },
    {
        year: 2018,
        teamAmount: 4,
        teams: {
            seed_1 : "Alabama (13-0)",
            seed_2 : "Clemson (13-0)",
            seed_3 : "Notre Dame (12-0)",
            seed_4 : "Oklahoma (12-1)"
        },
        champion: "Clemson",
        runnerUp: "Alabama",
        finalScore: "44-16"
    },
    {
        year: 2019,
        teamAmount: 4,
        teams: {
            seed_1 : "LSU (13-0)",
            seed_2 : "Ohio State (13-0)",
            seed_3 : "Clemson (13-0)",
            seed_4 : "Oklahoma (12-1)"
        },
        champion: "LSU",
        runnerUp: "Clemson",
        finalScore: "42-25"
    },
    {
        year: 2020,
        teamAmount: 4,
        teams: {
            seed_1 : "Alabama (11-0)",
            seed_2 : "Clemson (10-1)",
            seed_3 : "Ohio State (6-0)",
            seed_4 : "Notre Dame (10-1)"
        },
        champion: "Alabama",
        runnerUp: "Ohio State",
        finalScore: "52-24"
    },
    {
        year: 2021,
        teamAmount: 4,
        teams: {
            seed_1 : "Alabama (12-1)",
            seed_2 : "Michigan (12-1)",
            seed_3 : "Georgia (12-1)",
            seed_4 : "Cincinnati (13-0)"
        },
        champion: "Georgia",
        runnerUp: "Alabama",
        finalScore: "33-18"
    },
    {
        year: 2022,
        teamAmount: 4,
        teams: {
            seed_1 : "Georgia (13-0)",
            seed_2 : "Michigan (13-0)",
            seed_3 : "TCU (12-1)",
            seed_4 : "Ohio State (11-1)"
        },
        champion: "Georgia",
        runnerUp: "TCU",
        finalScore: "65-7"
    },
    {
        year: 2023,
        teamAmount: 4,
        teams: {
            seed_1 : "Michigan (13-0)",
            seed_2 : "Washington (13-0)",
            seed_3 : "Texas (12-1)",
            seed_4 : "Alabama (12-1)"
        },
        champion: "Michigan",
        runnerUp: "Washington",
        finalScore: "34-13"
    },
    {
        year: 2024,
        teamAmount: 12,
        teams: {
            seed_1: "Oregon (13-0)",
            seed_2: "Georgia (11-2)",
            seed_3: "Boise State (12-1)",
            seed_4: "Arizona State (11-2)",
            seed_5: "Texas (11-2)",
            seed_6: "Penn State (11-2)",
            seed_7: "Notre Dame (11-1)",
            seed_8: "Ohio State (10-2)",
            seed_9: "Tennessee (10-2)",
            seed_10: "Indiana (11-1)",
            seed_11: "SMU (11-2)",
            seed_12: "Clemson (10-3)"
        },
        champion: "Ohio State",
        runnerUp: "Notre Dame",
        finalScore: "34-23"
    },
    {
        year: 2025,
        teamAmount: 12,
        teams: {
            seed_1: "Indiana (13-0)",
            seed_2: "Ohio State (12-1)",
            seed_3: "Georgia (12-1)",
            seed_4: "Texas Tech (12-1)",
            seed_5: "Oregon (11-1)",
            seed_6: "Ole Miss (11-1)",
            seed_7: "Texas A&M (11-1)",
            seed_8: "Oklahoma (10-2)",
            seed_9: "Alabama (10-3)",
            seed_10: "Miami (FL) (10-2)",
            seed_11: "Tulane (11-2)",
            seed_12: "James Madison (12-1)"
        },
        champion: "Indiana",
        runnerUp: "Miami (FL)",
        finalScore: "27-21"
    }
]
const yearSelect = document.getElementById("year");
const resultYear = document.getElementById("result-year");
const teamAmount = document.getElementById("team-amount");
const teamList = document.getElementById("team-list");
const finalResult = document.getElementById("final-result");

if (yearSelect) {
    yearSelect.innerHTML += results.map(result => `<option value="${result.year}">${result.year}</option>`).join("");

    yearSelect.addEventListener("change", displayResults);
}

function displayResults() {
    if (!yearSelect || !resultYear) return;
    const selectedYear = yearSelect.value;
    
    if (!selectedYear) {
        resultYear.textContent = "Choose a year above.";
        teamAmount.textContent = "";
        teamList.innerHTML = "";
        finalResult.textContent = "";
        return;
    }

    const selectedResult = results.find(
        result => result.year == selectedYear
    );

    resultYear.textContent = `College Football Playoff ${selectedResult.year}`;
    teamAmount.textContent = `${selectedResult.teamAmount} team playoff`
    teamList.innerHTML = Object.entries(selectedResult.teams).map(([seed, team]) => 
    `<li>${seed.replace("_", " ").toUpperCase()}: ${team}</li>`).join("");
    finalResult.innerHTML = `Championship game:<br> ${selectedResult.champion} ${selectedResult.finalScore} ${selectedResult.runnerUp}<br>${selectedResult.champion} wins the ${selectedResult.year} College Football Playoff`
}

const proposalForm = document.querySelector(".user-proposal");

if (proposalForm) {
    let submissionCount = localStorage.getItem("cfpSubmissionCount");

    if (submissionCount === null) {
        localStorage.setItem("cfpSubmissionCount", "0");
    }

    proposalForm.addEventListener("submit", function () {

        let count = Number(localStorage.getItem("cfpSubmissionCount"));

        count++;

        localStorage.setItem("cfpSubmissionCount", count.toString());
    });
}
const submissionDisplay = document.getElementById("review-total");

if (submissionDisplay) {
    const count = localStorage.getItem("cfpSubmissionCount") || 0;
    submissionDisplay.textContent = `Proposals submitted: ${count}`;
}