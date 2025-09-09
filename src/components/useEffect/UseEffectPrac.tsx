import { useEffect, useState } from 'react';

type userType = {
  id: string,
  login: string
}

const UseEffectPrac = () => {
  const url = 'https://api.github.com/users';
  const [users, setUsers] = useState<userType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // start loading
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: userType[] = await response.json();

        // simulate delay
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false); // ✅ stop loading *after* data is set
        }, 5000);

      } catch (error) {
        setIsError(true);
        setIsLoading(false); // ✅ stop loading even on error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>There was an error while fetching data. Please check.</div>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectPrac;
