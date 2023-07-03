import { ClerkCatchBoundary } from "@clerk/remix";
import Presentation from "~/components/Presentation";


export const CatchBoundary = ClerkCatchBoundary();

export default function Index() {
  return (
    <div className="flex justify-center items-center">
      <Presentation />
    </div>
  );
}
