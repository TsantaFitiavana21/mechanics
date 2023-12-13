export const useData = () => {
    const job_types = [
        {
            label: "One time",
            value: "onetime",
        },
        {
            label: "Recurring",
            value: "recurring",
        },
    ]

    const job_status = [
        {
            label: "Pending",
            value: "pending",
        },
    ]

    const job_schedules = [
        {
            label: "Morning",
            value: "morning",
        },
        {
            label: "Evening",
            value: "evening",
        },
        {
            label: "Night",
            value: "night",
        },
    ]

    const job_priorities = [
        {
            label: "Low",
            value: "low",
        },
        {
            label: "Medium",
            value: "medium",
        },
        {
            label: "High",
            value: "high",
        },
    ]

    const job_categories = [
        {
            label: "Category 1",
            value: "category1",
        },
        {
            label: "Category 2",
            value: "category2",
        },
        {
            label: "Category 3",
            value: "category3",
        },
    ]

    return {
        job_types,
        job_priorities,
        job_schedules,
        job_status,
        job_categories,
    }
}
