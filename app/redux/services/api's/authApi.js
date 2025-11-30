// src/features/auth/authApi.js
import { api } from "../Apislice.js";

export const authApi = api.injectEndpoints({
  tagTypes: ["Projects", "Project", "Subscribers"], // ✅ Add 'Subscribers' tag
  endpoints: (builder) => ({
    // 🔹 LOGIN
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // 🔹 LOGOUT
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    }),

    // 🔹 GET ALL PROJECTS
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      providesTags: ["Projects"],
    }),

    // 🔹 ADD PROJECT
    addProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Projects"],
    }),

    // 🔹 UPDATE PROJECT
    updateProject: builder.mutation({
      query: ({ id, body }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Projects",
        { type: "Projects", id },
      ],
    }),

    // 🔹 READ SINGLE PROJECT
    readProject: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Projects"],
    }),

    // 🔹 DELETE PROJECT
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),

    // 🔹 GET ALL SUBSCRIBERS
    getSubscribers: builder.query({
      query: () => ({
        url: "/subscribers",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      providesTags: (result) => {
        const data = result?.data || result; // adapt to your API response
        return data && Array.isArray(data)
          ? [
              ...data.map((sub) => ({ type: "Subscribers", id: sub.id })),
              { type: "Subscribers", id: "LIST" },
            ]
          : [{ type: "Subscribers", id: "LIST" }];
      },
    }),

    // 🔹 DELETE SUBSCRIBER
    deleteSubscriber: builder.mutation({
      query: (id) => ({
        url: `/subscribers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Subscribers", id: "LIST" }],
    }),
    // 🔹 ADD PROJECT
    addSubscriber: builder.mutation({
      query: (data) => ({
        url: "/subscribers",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subscribers"],
    }),
    // 🔹 GET ALL SERVICES
    getServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      providesTags: ["Services"],
    }),
    // 🔹 DELETE SUBSCRIBER
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Services", id: "LIST" }],
    }),
    // 🔹 ADD SERVICE
    addService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    // 🔹 UPDATE SERVICE
    updateService: builder.mutation({
      query: ({ id, body }) => ({
        url: `/services/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Services"],
    }),

    // 🔹 READ SINGLE SERVICE
    getService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Services"],
    }),
    // 🔹 GET ALL Experiences
    getExperiences: builder.query({
      query: () => ({
        url: "/experiences",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      providesTags: ["Experiences"],
    }),
    // 🔹 DELETE EXPERIENCE
    deleteExperience: builder.mutation({
      query: (id) => ({
        url: `/experiences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Experiences" }],
    }),
    // 🔹 ADD EXPERIENCE
    addExperience: builder.mutation({
      query: (data) => ({
        url: "/experiences",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Experiences"],
    }),
    // 🔹 UPDATE EXPERIENCE
    updateExperience: builder.mutation({
      query: ({ id, body }) => ({
        url: `/experiences/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Experiences"],
    }),

    // 🔹 READ SINGLE EXPERIENCE
    getExperience: builder.query({
      query: (id) => ({
        url: `/experiences/${id}`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Experiences"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useReadProjectQuery,
  useDeleteProjectMutation,
  useGetSubscribersQuery,
  useDeleteSubscriberMutation,
  useAddSubscriberMutation,
  useGetServicesQuery,
  useDeleteServiceMutation,
  useAddServiceMutation,
  useGetServiceQuery,
  useUpdateServiceMutation,
  useGetExperiencesQuery,
  useAddExperienceMutation,
  useDeleteExperienceMutation,
  useUpdateExperienceMutation,
  useGetExperienceQuery,
} = authApi;
