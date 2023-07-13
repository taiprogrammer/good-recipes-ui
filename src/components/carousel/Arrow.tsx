import { ArrowRight, ArrowLeft } from "@/app/styles/components/Arrow";

interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}

export default function Arrow({ disabled, left, onClick }: ArrowProps) {
  return (
    <>
      <svg
        onClick={onClick}
        className={`arrow ${left ? "arrow-left" : "arrow-right"} ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {left && (
          <ArrowLeft d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!left && (
          <ArrowRight d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </>
  );
}
