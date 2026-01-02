export const structure = (S, context) => {
  const { currentUser } = context;
  const userEmail = currentUser?.email;

  // Branch Admin (Editor)
  if (currentUser?.roles?.some(role => role.name === "editor")) {
    return S.list()
      .title("My Branch")
      .items([
        S.listItem()
          .title("My Assigned Branch")
          .child(
            S.documentList("branch")
              .title("Assigned Branch")
              .filter('_type == "branch" && $email in branchAdmins')
              .params({ email: userEmail })
          ),
      ]);
  }

  // Super Admin (Administrator)
  return S.list()
    .title("All Branches")
    .items([
      S.documentTypeListItem("branch").title("Assemblies & Fellowships"),
    ]);
};
