import { RecoilRoot, useRecoilValue } from "recoil";
import { jocount, msgcount, nocount, nwcount, totalcount } from "./atoms";
// import { useMemo } from "react";

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

  // best way
  const totalnotcnt = useRecoilValue(totalcount);

  // not best practice to use a variable for total count

  // const totalnotcnt = useMemo(() => {
  //   return netwokcnt + jobcnt + notcnt + msgcnt;
  // }, [netwokcnt, jobcnt, notcnt, msgcnt]);

  return (
    <div>
      <button>home </button>
      <button>network({netwokcnt >= 100 ? "99+" : netwokcnt})</button>
      <button>jobs({jobcnt}) </button>
      <button>notification({notcnt})</button>
      <button>messaging({msgcnt})</button>
      <button>me({totalnotcnt})</button>
    </div>
  );
}

export default App;
