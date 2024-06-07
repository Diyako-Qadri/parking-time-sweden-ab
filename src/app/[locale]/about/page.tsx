import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";

const about = () => {
    return (
        <div>
          <PageHero 
            bgImage={'bg-aboutHero-image'} 
            categoryText="About Us" 
            headline="Parking Time Sweden" 
            heroText="We are a tech startup dedicated to transforming the parking experience for all stakeholders – parkers, parking attendants, municipalities, and property owners."/>
      
        </div>
    )
};

export default about
