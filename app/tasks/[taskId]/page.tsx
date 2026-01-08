import { ChartBarStacked } from "@/app/components/charts/barchart";
import { ChartPieDonutText } from "@/app/components/charts/piechart-donut";

type PageProps = {
    params: Promise<{
        taskId: string,
    }>
}

export default async function DecisionId({ params }: PageProps) {
    const { taskId } = await params;

    return (
        <div>
            <span className="font-bold text-2xl flex justify-center">{taskId}</span>
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="flex justify-center">
                    <ChartBarStacked />
                </div>

                <div className="flex justify-center">
                    <ChartPieDonutText />
                </div>

                <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </div>

            </div>
        </div>
    )
}