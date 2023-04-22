export const filters = [
  {
    filter: "Status",
    is: [
      {
        filters2: ["is", "is not"],
        filter3: ["Active", "Closed"],
      },
    ],
  },
  {
    filter: "Tags",
    is: [{ filters2: ["is", "is not", "is set", "is not set"], filter3: [] }],
  },
  {
    filter: "Due date",
    is: [
      {
        filters2: ["is", "is not", "is set", "is not set"],
        filter3: [
          "Today",
          "Yesterday",
          "Tommorow",
          "Next 7 days",
          "Last 7 days",
          "Last month",
          "This month",
          "Next month",
          "Last year",
          "This year",
          "Next year",
        ],
      },
    ],
  },
  {
    filter: "Priority",
    is: [
      {
        filters2: ["is", "is not", "is set", "is not set"],
        filter3: ["Urgent", "High", "Normal", "Low", "No Priority"],
      },
    ],
  },
  {
    filter: "Assignee",
    is: [
      {
        filters2: ["is", "is not", "is set", "is not set"],
        filter3: ["Me"],
      },
    ],
  },
  {
    filter: "Archived",
    is: [{ filters2: ["is archived", "is not archived"] }],
  },
  {
    filter: "Assigned comment",
    is: [
      { filters2: ["Has assigned comments", "DOesn't have assigned comments"] },
    ],
  },
  {
    filter: "Created by",
    is: [{ filters2: ["is", "is not"], filter3: ["Me"] }],
  },
  {
    filter: "Date closed",
    is: [
      {
        filters2: ["is", "is not", "is set", "is not set"],
        filter3: [
          "Today",
          "Yesterday",
          "Tommorow",
          "Next 7 days",
          "Last 7 days",
          "Last month",
          "This month",
          "Next month",
          "Last year",
          "This year",
          "Next year",
        ],
      },
    ],
  },
  {
    filter: "Date created",
    is: [
      {
        filters2: ["is", "is not"],
        filter3: [
          "Today",
          "Yesterday",
          "Tommorow",
          "Next 7 days",
          "Last 7 days",
          "Last month",
          "This month",
          "Next month",
          "Last year",
          "This year",
          "Next year",
        ],
      },
    ],
  },
  {
    filter: "Date updated",
    is: [
      {
        filters2: ["is", "is not"],
        filter3: [
          "Today",
          "Yesterday",
          "Tommorow",
          "Next 7 days",
          "Last 7 days",
          "Last month",
          "This month",
          "Next month",
          "Last year",
          "This year",
          "Next year",
        ],
      },
    ],
  },
  {
    filter: "Date done",
    is: [
      {
        filters2: ["is", "is not", "is set", "is not set"],
        filter3: [
          "Today",
          "Yesterday",
          "Tommorow",
          "Next 7 days",
          "Last 7 days",
          "Last month",
          "This month",
          "Next month",
          "Last year",
          "This year",
          "Next year",
        ],
      },
    ],
  },
  {
    filter: "Dependency",
    is: [
      {
        filters2: ["Has", "Doesn't have"],
        filter3: ["Waiting on", "Blocking", "Link", "Any"],
      },
    ],
  },
]
