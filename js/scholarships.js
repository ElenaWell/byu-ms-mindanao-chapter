
const scholarshipFilters = document.querySelectorAll(".scholarship-filter");
const scholarshipCards = document.querySelectorAll(".scholarship-card");
const resultsStatus = document.querySelector("#scholarship-results-status");

function filterScholarships(category) {
    let visibleCount = 0;

    scholarshipCards.forEach((card) => {
        const matches =
            category === "all" ||
            card.dataset.category === category;

        card.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    });

    scholarshipFilters.forEach((filter) => {
        const isActive = filter.dataset.filter === category;

        filter.classList.toggle("is-active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
    });

    if (resultsStatus) {
        const categoryName = {
            all: "all scholarship resources",
            church: "Church-sponsored resources",
            government: "government scholarship resources",
            international: "international opportunities",
            directory: "scholarship directories",
        }[category];

        resultsStatus.textContent =
            `Showing ${visibleCount} ${categoryName}.`;
    }
}

scholarshipFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
        filterScholarships(filter.dataset.filter);
    });
});
