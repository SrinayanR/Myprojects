import { RecoilRoot, useRecoilValue } from "recoil";
import { jocount, msgcount, nocount, nwcount } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Buttons></Buttons>
    </RecoilRoot>
  );
}

function Buttons() {
  const netwokcnt = useRecoilValue(nwcount);
  const jobcnt = useRecoilValue(jocount);
  const notcnt = useRecoilValue(nocount);
  const msgcnt = useRecoilValue(msgcount);

  return (
    <div>
      <button>home </button>
      <button>network({netwokcnt >= 100 ? "99+" : netwokcnt})</button>
      <button>jobs({jobcnt}) </button>
      <button>notification({notcnt})</button>
      <button>messaging({msgcnt})</button>
      <button>me</button>
    </div>
  );
}

export default App;
