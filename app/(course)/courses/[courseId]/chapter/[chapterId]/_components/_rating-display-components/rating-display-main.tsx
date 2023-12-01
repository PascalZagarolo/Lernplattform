import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";

import { StarHalf } from "lucide-react";
import ProgressBar from "./progress-bar";
import { on } from "events";

interface DisplayRatingProps {
    courseId: string
}

const DisplayRating: React.FC<DisplayRatingProps> = async ({
    courseId
}) => {


    const ratings = await db.ratings.findMany({
        where: {
            courseId
        }
    })

    const fiveStars = ratings.filter(rating => rating.score === 5);
    const fourStars = ratings.filter(rating => rating.score === 4)
    const threeStars = ratings.filter(rating => rating.score === 3)
    const twoStars = ratings.filter(rating => rating.score === 2)
    const oneStars = ratings.filter(rating => rating.score === 1)

    return (
        <div className="ml-8 w-full">
            <div>
                <h3 className="font-semibold text-xl mb-4">
                    <StarHalf className="text-yellow-400 w-8 h-8" /> Rezensionen ({ratings.length})
                </h3>

                <div className="text-lg font-semibold mb-1 flex justify-start items-center">
                    5 Sterne
                    
                    <span className="ml-auto flex justify-evenly items-center">
                        <ProgressBar
                            length={Math.round((ratings.length / fiveStars.length )) * 100 }
                            starLength = {fiveStars.length}
                    />
                    <p className="text-xs ml-2">({fiveStars.length})</p>
                    </span>
                </div>

                <div className="text-base font-semibold mb-1 flex justify-start items-center">
                    4 Sterne
                    
                    <span className="ml-auto flex justify-evenly items-center">
                        <ProgressBar
                            length={Math.round((ratings.length / fourStars.length )) * 100 }
                            starLength = {fourStars.length}
                    />
                    <p className="text-xs ml-2">({fourStars.length})</p>
                    </span>
                </div>

                <div className="text-medium font-semibold mb-1 flex justify-start items-center">
                    3 Sterne
                    <span className="ml-auto flex justify-evenly items-center">
                        <ProgressBar
                            length={Math.round((ratings.length / threeStars.length )) * 100 }
                            starLength = {threeStars.length}
                    />
                    <p className="text-xs ml-2">({threeStars.length})</p>
                    </span>
                </div>

                <div className="text-medium font-semibold mb-1 flex justify-start items-center">
                    2 Sterne
                    <span className="ml-auto flex justify-evenly items-center">
                        <ProgressBar
                            length={Math.round((ratings.length / twoStars.length )) * 100 }
                            starLength = {twoStars.length}
                    />
                    <p className="text-xs ml-2">({twoStars.length})</p>
                    </span>
                </div>

                <div className="text-medium font-semibold mb-1 flex justify-start items-center">
                    1 Stern
                    <span className="ml-auto flex justify-evenly items-center">
                        <ProgressBar
                            length={Math.round((ratings.length / oneStars.length )) * 100 }
                            starLength = {oneStars.length}
                    />
                    <p className="text-xs ml-2">({oneStars.length})</p>
                    </span>
                </div>


            </div>
        </div>
    );
}

export default DisplayRating;