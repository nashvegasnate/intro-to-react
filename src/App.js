import './App.css';
import Counter from './Counter';

const App = () => {

  const array = [
    {
      appName: "Counter 1",
      initialValue: 200
    },
    {
      appName: "Counter B",
      initialValue: 0
    },
    {
      appName: "Counter Three",
      initialValue: 100
    },
    {
      appName: "Counter Four",
      initialValue: 100
    }
  ];

  return (
    <>
    {/* key={i} is the iterator which allows react to keep track of each object in the array. You'll see in the react console. */}
    { array.map((counter, i) => <Counter key={i} appName={counter.appName}initialValue={counter.initialValue}/>)
    }  
    </>
  )
}

export default App;
