import { FeaturesCardsOurTeam } from "@/components/FeaturesCardsOurTeam/FeaturesCardsOurTeam";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import {DividerComponent} from "@/components/ReDesign/DividerComponent/DividerComponent";
import UsersTable from "@/components/Table/Table";
import VideoComponent from "@/components/VideoComponent/VideoComponent";
export default function About() {
    return (
        <>
            {/*<Sidebar/>*/}
            {/* <HeaderMegaMenu /> */}
            <HeroImageBackground mode={"about"} />
            <DividerComponent />
            <FeaturesCardsOurTeam mode={"about-page"} />
            <DividerComponent />
            <VideoComponent mode={"about-page"} />
            <DividerComponent />
            <UsersTable />
            <DividerComponent />
            <GetInTouch />
        </>
    );
}
