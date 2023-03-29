const { useEffect, useState } = require("react");
const { CanceledError } = require("axios");

const { default: IssueService } = require("services/IssueService");

const useIssues = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    setLoading(true);

    IssueService.getIssues({ signal })
      .then((response) => {
        setLoading(false);
        setData(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { loading, data, error };
};

export default useIssues;
