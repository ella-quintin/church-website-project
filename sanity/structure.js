export const structure = (S, context) => {
  const { currentUser } = context;
  const userEmail = currentUser?.email;

  const isEditor = currentUser?.roles?.some(
    (role) => role.name === "editor"
  );

  /* ===========================
     BRANCH ADMIN (EDITOR)
  ============================ */
  if (isEditor) {
    return S.list()
      .title("My Branch")
      .items([
        // Assigned Branch
        S.listItem()
          .title("My Assigned Branch")
          .child(
            S.documentList("branch")
              .title("Assigned Branch")
              .filter('_type == "branch" && $email in branchAdmins')
              .params({ email: userEmail })
          ),

        S.divider(),

        // Blog posts for assigned branch only
        S.listItem()
          .title("My Branch Blog Posts")
          .child(
            S.documentList("branchBlog")
              .title("Blog Posts")
              .filter(
                '_type == "branchBlog" && branch->branchAdmins match $email'
              )
              .params({ email: userEmail })
          ),
      ]);
  }

  /* ===========================
     SUPER ADMIN
  ============================ */
  return S.list()
    .title("MDM CMS")
    .items([
      S.documentTypeListItem("branch")
        .title("Assemblies & Fellowships"),

      S.divider(),

      S.documentTypeListItem("branchBlog")
        .title("Branch Blog Posts"),
    ]);
};