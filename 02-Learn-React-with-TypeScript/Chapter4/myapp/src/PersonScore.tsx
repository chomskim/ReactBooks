import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getThePerson() {
      const person = await getPerson();
      console.log(person);
      setLoading(false);
      setName(person.name);
    }
    getThePerson();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button onClick={() => setScore(score + 1)}>Add</button>
      <button onClick={() => setScore(score - 1)}>Subtract</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}
