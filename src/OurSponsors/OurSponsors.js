
const OurSponsors = () => {
/* 
    OurSponsors Page
    REQUIRES:
        Nothing
    PROMISES:
        HTML tags and functionality
    Develop in part by: Brock
    Contact: darkicewolf50@gmail.com
    */
   const getSponsors = () => {
    /* 
    Gets the list of sponsors from the synology drive (not implemented), converts the json file into a dictionary
    REQUIRES:
        constant html link to synology drive
    PROMISES:
       returns Dictionary list of all our sponsors 
    Develop in part by: Brock
    Contact: darkicewolf50@gmail.com
    */
   const tempListOfSponsors = {
    "Main Tier": {
        "Name":"",
        "LogoUrl":"",
        "Url":"",
        "DescriptionAboutSponsor":"this has text i dont care",
        "DecriptionOnHelp":"this has text i dont care"
    },
    "Platnum Tier": { 
        1:{
            "Name":"Schulich School of Engineering",
            "LogoUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9L3ZGK6WtOmJbzxmCzRxwLXYKGC5SDcAKHb0ScfbUmbtG0IujQt6eQDaI_Pm9g4DZvc&usqp=CAU",
            "Url":"https://schulich.ucalgary.ca/",
            "DescriptionAboutSponsor":"this has text i dont care",
            "DecriptionOnHelp":"this has text i dont care"
        },
        2:{
            "Name":"",
            "LogoUrl":"",
            "Url":"",
            "DescriptionAboutSponsor":"this has text i dont care",
            "DecriptionOnHelp":"this has text i dont care"
        }
    },
    "Gold Tier":{
        1:{
            "Name":"",
            "LogoUrl":"",
            "Url":"",
            "DescriptionAboutSponsor":"this has text i dont care"
        },
        2:{
            "Name":"",
            "LogoUrl":"",
            "Url":"",
            "DescriptionAboutSponsorAboutSponsor":"this has text i dont care",
            "DecriptionOnHelp":"this has text i dont care"
        }
    },
    "Silver Tier": {
        1:{
            "Name":"",
            "LogoUrl":"",
            "Url":"",
            "DescriptionAboutSponsorAboutSponsor":"Dont get this",
            "DecriptionOnHelp":"Dont get this"
        },
        2:{
            "Name":"",
            "LogoUrl":"",
            "Url":"",
            "DescriptionAboutSponsorAboutSponsor":"Dont get this",
            "DecriptionOnHelp":"Dont get this"
        }
    },
    "Bronze Tier":{
        1:{
            "Name":"",
            "LogoUrl":"Dont get this",
            "Url":"",
            "DescriptionAboutSponsorAboutSponsor":"Dont get this",
            "DecriptionOnHelp":"Dont get this"
        },
        2:{
            "Name":"",
            "LogoUrl":"Dont get this",
            "Url":"",
            "DescriptionAboutSponsorAboutSponsor":"Dont get this",
            "DecriptionOnHelp":"Dont get this"
        }
    }
   };
   return tempListOfSponsors;
   }
   const dictOfSponsors = getSponsors();

   //to fix make each of these a function and return the proper
   return <>
        {if (dictOfSponsors["Main Tier"] != null) {
                <>
                    <h2>Main Tier</h2>
                    <a href={dictOfSponsors["Main Tier"]["Url"]}><img src={dictOfSponsors["Main Tier"]["LogoUrl"]}></img></a>
                    <h3>{dictOfSponsors["Main Tier"]["Name"]}</h3>
                    <p>{dictOfSponsors["Main Tier"]["DescriptionAboutSponsor"]}</p>
                    <p>{dictOfSponsors["Main Tier"]["DecriptionOnHelp"]}</p>
                </>
            }
        }
        {for(let i = 0; i < Object.keys(dictOfSponsors).length; i++) {
            <>
                <h2>{Object.keys(dictOfSponsors)[i]}</h2>
            </>
            {for(let j = 0; j < Object.keys(dictOfSponsors[i]).length): j++){ 
            <>
                <a href={dictOfSponsors[i][j]["Url"]}><img src={dictOfSponsors[i][j]["LogoUrl"]}></img></a>
                <h3>{dictOfSponsors[i][j]["Name"]}</h3>
                <p>{dictOfSponsors[i][j]["DescriptionAboutSponsor"]}</p>
                <p>{dictOfSponsors[i][j]["DecriptionOnHelp"]}</p>
            </>
            }}
        }}
   </>;

};

export default OurSponsors;