const notes = document.getElementById("meetingNotes");
const summary = document.getElementById("summary");
const decisions = document.getElementById("decisions");
const actionItems = document.getElementById("actionItems");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Generate a meeting summary using AI
generateBtn.addEventListener("click", async function () {
    if (notes.value.trim() === "") {
        alert("Please enter your meeting notes first.");
        return;
    }

    generateBtn.disabled = true;
    clearBtn.disabled = true;
    generateBtn.textContent = "Generating...";

    summary.textContent = "Analyzing meeting notes...";
    decisions.textContent = "";
    actionItems.textContent = "";

    try {
        const response = await fetch("/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                notes: notes.value
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Request failed.");
        }

        summary.textContent = data.summary;
        displayList(decisions, data.decisions);
        displayList(actionItems, data.action_items);

    } catch (error) {
        summary.textContent = error.message;

    } finally {
        generateBtn.disabled = false;
        clearBtn.disabled = false;
        generateBtn.textContent = "Generate Summary";
    }
});

function displayList(container, items) {
    container.textContent = "";

    if (!Array.isArray(items) || items.length === 0) {
        container.textContent = "None identified.";
        return;
    }

    const list = document.createElement("ul");

    items.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = typeof item === "string"
            ? item
            : Object.values(item).join(" - ");
        list.appendChild(li);
    });

    container.appendChild(list);
}

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