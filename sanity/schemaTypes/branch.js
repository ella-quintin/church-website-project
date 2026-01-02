export default {
    name: "branch",
    title: "Assemblies & Fellowships",
    type: "document",

    fields: [

        {
            name: "branchAdmins",
            title: "Branch Admin(s)",
            type: "array",
            of: [{ type: "string" }],
            description: "Email address(es) of admins allowed to manage this branch",
            validation: Rule =>
                Rule.required().min(1).error("At least one branch admin email is required"),
        },

        {
            name: "name",
            title: "Branch Name",
            type: "string",
            validation: Rule => Rule.required()
        },

        {
            name: "slug",
            title: "URL Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },

        {
            name: "branchType",
            title: "Branch Type",
            type: "string",
            options: {
                list: [
                    { title: "Assembly", value: "assembly" },
                    { title: "Fellowship", value: "fellowship" }
                ],
                layout: "radio"
            },
            validation: Rule => Rule.required()
        },

        {
            name: "heroDescription",
            title: "Hero Description",
            type: "text"
        },

        {
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true }
        },

        {
            name: "serviceTimes",
            title: "Service Times",
            type: "string"
        },

        {
            name: "location",
            title: "Location",
            type: "string"
        },

        {
            name: "programs",
            title: "Children & Youth / Programs",
            type: "string"
        },

        {
            name: "events",
            title: "Upcoming Events",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", title: "Event Title", type: "string" },
                        {
                            name: "date",
                            title: "Event Date & Time",
                            type: "datetime",
                            options: {
                                dateFormat: "YYYY-MM-DD",
                                timeFormat: "HH:mm",
                                timeStep: 15,
                                calendarTodayLabel: "Today"
                            }
                        },

                        { name: "location", title: "Location", type: "string" },
                        {
                            name: "image",
                            title: "Event Image",
                            type: "image",
                            options: { hotspot: true }
                        },
                        { name: "description", title: "Description", type: "text" }
                    ]
                }
            ]
        }
    ]
};
