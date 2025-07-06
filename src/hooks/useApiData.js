import { useState, useEffect } from 'react';

const useApiData = (endpoint, limit = 10) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('Failed to fetch');
        const result = await res.json();
        setData(result);
        setFiltered(result);
        setError('');
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [endpoint]);

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredResults);
    setPage(1);
  }, [search, data]);

  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return {
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    totalPages: Math.ceil(filtered.length / limit),
    data: paginated,
  };
};

export default useApiData;