import { db } from "@/lib/db";
import { Category, Chapter, Course } from "@prisma/client";
import { getProgress } from "./get-progress";


type CourseWithProgressWithCategory = Course & {
    category : Category;
    chapters : Chapter[];
    progress : number | null;
} 

type DashboardCourses = {
    completedCourses : CourseWithProgressWithCategory[];
    coursesInProgress : CourseWithProgressWithCategory[];
}



export const getDashboardCourses = async (userId : string): Promise<DashboardCourses> => {

    try {
        const purchasedCourses = await db.purchase.findMany({
            where : {
                userId
            }, select : {
                course : {
                    include : {
                        category : true,
                        chapters : {
                            where : {
                                isPublished : true
                            }
                        }
                    }
                }
            }
        });

        const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithCategory[];

        for(let course of courses) {
            const progress = await getProgress(course.id, userId);
            course["progress"] = progress;
        }

        const completedCourses = courses.filter((course) => course.progress === 100);
        const coursesInProgress = courses.filter((course) => course.progress !== 100)
        

    } catch(error) {
        console.log("getDashboardCourses error  : ",  error)
        return {
            completedCourses : [],
            coursesInProgress : []
        }
    }

}