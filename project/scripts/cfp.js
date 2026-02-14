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

proposals.forEach(function(proposal) {
    const option = document.createElement("option");
    option.value = proposal.proposalName
    option.textContent = proposal.proposalName
    proposalSelect.appendChild(option);
})

proposalSelect.addEventListener("change", displayProposal);

function displayProposal() {
    const selectedName = proposalSelect.value;
    const selectedProposal = proposals.find(function(proposal) {
        return proposal.proposalName === selectedName;
    });

    if (!selectedProposal) return;

    document.getElementById("proposal-title").textContent = selectedProposal.proposalName;
    document.getElementById("team-count").textContent = `Number of teams: ${selectedProposal.teamCount}`
    document.getElementById("auto-qualify").textContent = `Automatic Qualifiers? ${selectedProposal.automaticQualify}`
    document.getElementById("other-format").textContent = selectedProposal.description
}