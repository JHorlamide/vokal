import fetch from "auth/apiClient";

const IssueService = {};

IssueService.createIssue = function (data) {
  return fetch({
    url: "/issues",
    method: "post",
    data: data,
  });
};

IssueService.getIssues = function () {
  return fetch({
    url: "/issues",
    method: "get",
  });
};

export default IssueService;
