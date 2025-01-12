interface Event {
    date: string;
    title: string;
    details: string;
    time: string;
}

const eventsData: Event[] = [
    {
        date: "05",
        title: "UX/UI workshop",
        details: "8 of 12 sessions, Mrs. Wilson",
        time: "14:00-14:45",
    },
    {
        date: "06",
        title: "Interaction design", 
        details: "8 of 12 sessions, Mrs. Wilson",
        time: "11:00-14:45",
    },
    {
        date: "07",
        title: "Team Meeting",
        details: "4 of 20 meetings, Design team",
        time: "12:00-12:35",
    },
    {
        date: "08",
        title: "User interview",
        details: "1 of 2, Zoom Meeting",
        time: "16:00-17:00",
    },
    {
        date: "09",
        title: "User interview",
        details: "2 of 2, Zoom Meeting",
        time: "16:00-16:30",
    },
];

export default eventsData;
