// =====================================
// ALL SYMPTOMS
// =====================================

const allSymptoms = [

    "itching",
    "skin_rash",
    "continuous_sneezing",
    "shivering",
    "chills",
    "joint_pain",
    "stomach_pain",
    "acidity",
    "vomiting",
    "fatigue",
    "anxiety",
    "weight_loss",
    "cough",
    "high_fever",
    "breathlessness",
    "sweating",
    "dehydration",
    "headache",
    "nausea",
    "back_pain",
    "abdominal_pain",
    "diarrhoea",
    "throat_irritation",
    "runny_nose",
    "congestion",
    "chest_pain",
    "neck_pain",
    "dizziness",
    "cramps",
    "obesity",
    "depression",
    "irritability",
    "muscle_pain",
    "loss_of_balance",
    "skin_peeling",
    "blister",
    "red_spots",
    "body_pain",
    "cold_hands_and_feets",
    "mood_swings",
    "restlessness",
    "lethargy",
    "indigestion",
    "loss_of_appetite",
    "constipation",
    "mild_fever",
    "yellow_urine",
    "phlegm",
    "fast_heart_rate",
    "muscle_weakness"

];

// =====================================
// PAGINATION VARIABLES
// =====================================

const symptomsGrid =
    document.getElementById("symptoms-grid");

const pageNumber =
    document.getElementById("page-number");

const prevPageBtn =
    document.getElementById("prev-page");

const nextPageBtn =
    document.getElementById("next-page");

let currentPage = 1;

let selectedSymptoms = [];

const symptomsPerPage = 12;

// =====================================
// RENDER SYMPTOMS
// =====================================

function renderSymptoms() {

    symptomsGrid.innerHTML = "";

    const start =
        (currentPage - 1) * symptomsPerPage;

    const end =
        start + symptomsPerPage;

    const paginatedSymptoms =
        allSymptoms.slice(start, end);

    paginatedSymptoms.forEach(symptom => {

        let formattedSymptom = symptom
            .replaceAll("_", " ")
            .replace(/\b\w/g, c => c.toUpperCase());

        const label =
            document.createElement("label");

        label.classList.add("symptom-item");

        // CHECK IF SELECTED
        const isChecked =
            selectedSymptoms.includes(symptom);

        label.innerHTML = `
            <input
                type="checkbox"
                value="${symptom}"
                ${isChecked ? "checked" : ""}
            >
            ${formattedSymptom}
        `;

        symptomsGrid.appendChild(label);

    });

    pageNumber.innerText =
        `Page ${currentPage} of ${
            Math.ceil(allSymptoms.length / symptomsPerPage)
        }`;

    addCheckboxListeners();

}

// =====================================
// PAGINATION BUTTONS
// =====================================

nextPageBtn.addEventListener("click", () => {

    if (
        currentPage <
        Math.ceil(allSymptoms.length / symptomsPerPage)
    ) {

        currentPage++;

        renderSymptoms();

    }

});

prevPageBtn.addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        renderSymptoms();

    }

});

// =====================================
// UPDATE SELECTED SYMPTOMS
// =====================================

function updateSelectedSymptoms() {

    const selectedTags =
        document.getElementById("selected-tags");

    // GET CURRENT PAGE CHECKBOXES
    const checkboxes =
        document.querySelectorAll(
            '#symptoms-grid input[type="checkbox"]'
        );

    // UPDATE ARRAY
    checkboxes.forEach((checkbox) => {

        if (
            checkbox.checked &&
            !selectedSymptoms.includes(
                checkbox.value
            )
        ) {

            selectedSymptoms.push(
                checkbox.value
            );

        }

        else if (
            !checkbox.checked &&
            selectedSymptoms.includes(
                checkbox.value
            )
        ) {

            selectedSymptoms =
                selectedSymptoms.filter(
                    symptom =>
                    symptom !== checkbox.value
                );

        }

    });

    // CLEAR TAGS
    selectedTags.innerHTML = "";

    // DISPLAY TAGS
    selectedSymptoms.forEach((symptom) => {

        let formattedSymptom = symptom
            .replaceAll("_", " ")
            .replace(/\b\w/g, c => c.toUpperCase());

        const tag =
            document.createElement("span");

        tag.innerHTML = `
            ${formattedSymptom}
            <span class="remove-tag">×</span>
        `;

        // REMOVE TAG
        tag.querySelector(".remove-tag")
        .addEventListener("click", () => {

            // REMOVE FROM ARRAY
            selectedSymptoms =
                selectedSymptoms.filter(
                    item => item !== symptom
                );

            renderSymptoms();

            updateSelectedSymptoms();

        });

        selectedTags.appendChild(tag);

    });

}

// =====================================
// CHECKBOX LISTENERS
// =====================================

function addCheckboxListeners() {

    const checkboxes =
        document.querySelectorAll(
            '#symptoms-grid input[type="checkbox"]'
        );

    checkboxes.forEach((checkbox) => {

        checkbox.addEventListener(
            "change",
            updateSelectedSymptoms
        );

    });

}

// =====================================
// SEARCH FUNCTION
// =====================================

const searchInput =
    document.getElementById("symptom-search");

const suggestionsBox =
    document.getElementById("search-suggestions");

searchInput.addEventListener("keyup", function () {

    const value =
        searchInput.value.toLowerCase();

    suggestionsBox.innerHTML = "";

    if (value.length === 0) {

        return;

    }

    const filteredSymptoms =
        allSymptoms.filter(symptom =>

            symptom.includes(value)

        );

    filteredSymptoms.slice(0, 8)
    .forEach(symptom => {

        const div =
            document.createElement("div");

        div.classList.add("suggestion-item");

        let formattedSymptom = symptom
            .replaceAll("_", " ")
            .replace(/\b\w/g, c => c.toUpperCase());

        div.innerText = formattedSymptom;

        div.addEventListener("click", () => {

            // ADD TO SELECTED ARRAY
            if (
                !selectedSymptoms.includes(symptom)
            ) {

                selectedSymptoms.push(symptom);

            }

            // FIND PAGE
            currentPage =
                Math.floor(
                    allSymptoms.indexOf(symptom)
                    / symptomsPerPage
                ) + 1;

            // RERENDER PAGE
            renderSymptoms();

            // UPDATE TAGS
            updateSelectedSymptoms();

            // CLEAR SEARCH
            searchInput.value = "";

            suggestionsBox.innerHTML = "";

        });

        suggestionsBox.appendChild(div);

    });

});

// =====================================
// PREDICT BUTTON
// =====================================

const predictButton =
    document.querySelector(".predict-btn");

predictButton.addEventListener("click", async () => {

    const spinner =
        document.getElementById("loading-spinner");

    // USE SELECTED ARRAY
    let symptoms = selectedSymptoms;

    if (symptoms.length === 0) {

        alert("Please select symptoms.");

        return;

    }

    const predictionText =
        document.getElementById(
            "prediction-result"
        );

    spinner.style.display = "block";

    predictionText.innerText =
        "Analyzing...";

    try {

        const response =
            await fetch("/predict", {

                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    symptoms: symptoms
                })

            });

        const data =
            await response.json();

        spinner.style.display = "none";

        predictionText.innerText =
            data.prediction;

    }

    catch (error) {

        spinner.style.display = "none";

        predictionText.innerText =
            "Error connecting to AI model.";

        console.error(error);

    }

});

// =====================================
// INITIAL LOAD
// =====================================

renderSymptoms();