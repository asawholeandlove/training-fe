import { Demo1 } from "./Demo1";
import { Demo2 } from "./Demo2";
import { Demo2Full } from "./Demo2-full";

export default function MediaQueries() {
  return (
    <div className="">
      {/* <Demo1 /> */}
      <Demo2Full />

      {/* Responsive trong một khoảng */}
      <div className="sm:max-md:text-red-300">That I between in some range</div>
    </div>
  );
}
