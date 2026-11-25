const notes = document.getElementById("meetingNotes");
const summary = document.getElementById("summary");
const decisions = document.getElementById("decisions");
const actionItems = document.getElementById("actionItems");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Temporary summary generation for testing
generateBtn.addEventListener("click", function () {
    if (notes.value.trim() === "") {
        alert("Please enter your meeting notes first.");
        return;
    }

    summary.textContent = "AI integration has not been connected yet.";
    decisions.textContent = "No decisions generated yet.";
    actionItems.textContent = "No action items generated yet.";
});

// Clear the input and results
clearBtn.addEventListener("click", function () {
    notes.value = "";
    summary.textContent = "Your summary will appear here.";
    decisions.textContent = "";
    actionItems.textContent = "";
});

// Combine the results into one document
function getSummaryText() {
    return "Meeting Summary\n\n" +
        summary.innerText +
        "\n\nKey Decisions\n\n" +
        decisions.innerText +
        "\n\nAction Items\n\n" +
        actionItems.innerText;
}

// Copy the results to the clipboard
copyBtn.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText(getSummaryText());
        alert("Summary copied!");
    } catch (error) {
        alert("Unable to copy the summary.");
    }
});

// Download the results as a text file
downloadBtn.addEventListener("click", function () {
    const file = new Blob([getSummaryText()], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = "meeting-summary.txt";
    link.click();

    URL.revokeObjectURL(url);
});