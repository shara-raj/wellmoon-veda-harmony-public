const requests = [
  {
    id: 1,
    type: "Add Page",
    page: "Our Philosophy",
    requestedBy: "Editor",
    status: "Pending",
    date: "Sep 14, 2025",
  },
  {
    id: 2,
    type: "Delete Page",
    page: "Contact",
    requestedBy: "Editor",
    status: "Pending",
    date: "Sep 13, 2025",
  },
  {
    id: 3,
    type: "Update Page Content",
    page: "About Us",
    requestedBy: "Editor",
    status: "Pending",
    date: "Sep 12, 2025",
  },
];

const ApprovalRequests = () => {
  const handleApprove = (id: number) => {
    alert(`Request ${id} approved`);
  };

  const handleReject = (id: number) => {
    alert(`Request ${id} rejected`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif">Approval Requests</h1>
        <p className="text-muted-foreground">
          Review and manage editor requests
        </p>
      </div>

      {/* Requests table */}
      <div className="bg-white rounded-2xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground border-b">
              <th className="px-6 py-4">Request</th>
              <th className="px-6 py-4">Page</th>
              <th className="px-6 py-4">Requested By</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                className="border-b last:border-0 hover:bg-muted/40 transition"
              >
                <td className="px-6 py-4 font-medium">{req.type}</td>

                <td className="px-6 py-4">{req.page}</td>

                <td className="px-6 py-4">{req.requestedBy}</td>

                <td className="px-6 py-4 text-muted-foreground">{req.date}</td>

                <td className="px-6 py-4 text-right space-x-3">
                  <button
                    onClick={() => handleApprove(req.id)}
                    className="text-sm px-4 py-1 rounded-full 
                               bg-green-100 text-green-700 hover:bg-green-200"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(req.id)}
                    className="text-sm px-4 py-1 rounded-full 
                               bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Helper note */}
      <p className="text-xs text-muted-foreground">
        Approved requests will immediately apply changes. Rejected requests will
        notify the editor.
      </p>
    </div>
  );
};

export default ApprovalRequests;
