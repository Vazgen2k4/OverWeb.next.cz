import { onSnapshot } from "firebase/firestore";
import { collections } from "./collections";
import Project, { ProjectData } from "@/models/project/project";
import Paragraph, { ParagraphData } from "@/models/paragraph/paragraph";
import Skill from "@/models/skill/skill";
import Work, { WorkData } from "@/models/work/work";


export function subscribeToWorks(callback: (works: Work[]) => void) {
    const unsubscribe = onSnapshot(collections.works, (snapshot) => {
        const works: Work[] = snapshot.docs.map(doc => {
            return Work.fromJSON((doc.data() as WorkData));
        });

        callback(works);
    });

    return unsubscribe;
}

