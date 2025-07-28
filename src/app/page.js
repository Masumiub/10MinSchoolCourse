import Image from "next/image";
import IELTSCourse from "./components/IELTSCourse";

export const metadata = {
    title: 'IELTS Course - 10 Minute School',
    description: 'Best IELTS course in Bengali and English.',
}

export default function Home() {
  return (
    <div>
      <IELTSCourse></IELTSCourse>
    </div>
  );
}
