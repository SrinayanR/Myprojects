import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <Button></Button>
      <CountRen></CountRen>
    </div>
  );
}

function CountRen() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <Typeof></Typeof>
      <b>{count}</b>
    </div>
  );
}
function Typeof() {
  const count = useRecoilValue(countAtom);
  if (count % 2 == 0) {
    return (
      <div>
        <b>this is even</b>
      </div>
    );
  }
  return <div></div>;
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increace
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decreace
      </button>
    </div>
  );
}
export default App;
