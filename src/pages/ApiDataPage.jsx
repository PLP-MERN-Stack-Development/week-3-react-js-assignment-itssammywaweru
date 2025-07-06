import useApiData from '../hooks/useApiData';
import Card from '../components/Card';

const ApiDataPage = () => {
  const {
    loading,
    error,
    data,
    search,
    setSearch,
    page,
    setPage,
    totalPages,
  } = useApiData('https://jsonplaceholder.typicode.com/posts', 9);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">API Posts</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title..."
          className="px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApiDataPage;