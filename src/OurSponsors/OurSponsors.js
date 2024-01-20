import { useEffect } from 'react';
import { useState } from 'react';
import './OurSponsors.css'
//can be removed later
import fakeDelay from '../TestingTools/fakeDelay';
import { useNavigate } from 'react-router-dom';

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Our Sponsors Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add link to become a sponsor at top, and thank you message
 */
const OurSponsors = () => {
    
   const [sponsorsDict, setSponsorsDict] = useState();  //variable states for the dictionary of sponsors

   useEffect(() => { //get sponsors on startup of page not optimized
    getSponsors();
   }, []);

   const OpenPage = (arg) => {    
        const navigate = useNavigate();
        navigate(arg);
        console.log(arg);
    };

    /**
     * @param {null} null - requires nothing (link)
     * @returns {Object} sponsorsDict - gets a Dictionary of our sponsors from synology drive
     * @description Gets the list of sponsors from the synology drive (not implemented), converts the json file into a dictionary
     * @author Brock <darkicewolf50@gmail.com>
     * @todo add gPRC to backend and front end
    */
    const getSponsors = async () => {
        const tempListOfSponsors = {
            "Main Tier": {
                1:{
                    "Name":"Hello",
                    "LogoUrl":"",
                    "Url":"",
                    "DescriptionAboutSponsor":"this has text i dont care",
                    "DecriptionOnHelp":"this has text i dont care"
                }
            },
            "Platnum Tier": { 
                1:{
                    "Name":"Schulich School of Engineering",
                    "LogoUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9L3ZGK6WtOmJbzxmCzRxwLXYKGC5SDcAKHb0ScfbUmbtG0IujQt6eQDaI_Pm9g4DZvc&usqp=CAU",
                    "Url":"https://schulich.ucalgary.ca/",
                    "DescriptionAboutSponsor":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu magna in diam consectetur rhoncus vel nec turpis. Sed finibus mi eu sem varius faucibus. Donec semper erat et bibendum pharetra. Suspendisse cursus lorem sed nisi semper, a rutrum nunc luctus. Nunc ullamcorper enim id orci interdum ultrices. Donec vestibulum nunc vel nisl pretium tempus. Morbi quis ante et ligula eleifend eleifend. Proin bibendum maximus elit vitae congue. Vivamus egestas, ex in tempor posuere, ligula nunc iaculis massa, in imperdiet dui justo eu dolor. Nullam placerat velit quis sem mattis, laoreet pharetra elit tempor.    ",
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
                    "DescriptionAboutSponsor":"this has text i dont care",
                    "DecriptionOnHelp":"this has text i dont care"
                },
                2:{
                    "Name":"",
                    "LogoUrl":"data:image/png;base64,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",
                    "Url":"",
                    "DescriptionAboutSponsor":"1this has text i dont care",
                    "DecriptionOnHelp":"2this has text i dont care"
                }
            },
            "Silver Tier": {
                1:{
                    "Name":"Father",
                    "LogoUrl":"",
                    "Url":""
                    //"DescriptionAboutSponsor":"", //Dont get this
                    //"DecriptionOnHelp":"" //Dont get this
                },
                2:{
                    "Name":"Help",
                    "LogoUrl":"",
                    "Url":""
                    //"DescriptionAboutSponsor":"", //Dont get this
                    //"DecriptionOnHelp":"" //Dont get this
                }
            },
            "Bronze Tier":{
                1:{
                    "Name":"I'm",
                    //"LogoUrl":"", //Dont get this
                    "Url":""
                    //"DescriptionAboutSponsor":"", //Dont get this
                    //"DecriptionOnHelp":"" //Dont get this
                },
                2:{
                    "Name":"Stuck to a cactus",
                    //"LogoUrl":"", //Dont get this
                    "Url":""
                    //"DescriptionAboutSponsor":"", //Dont get this
                    //"DecriptionOnHelp":"" //Dont get this
                }
            }
        };
        try {
            await fakeDelay(1000);
            console.log("It ran");
            let res = tempListOfSponsors;
            setSponsorsDict(res);
        } catch (error) {   //error checking
            console.error('Error sending data to server:', error);
        }
    }


    if (!sponsorsDict) {    //awaiting for a resposne from the backend
            return <p>Loading...</p>
    }
    if(sponsorsDict) {  //maps out the dictionary and displays the content
            return (<div id='OurSponsors'>
                    <div id='BecomeASponsors'>
                        <button onClick={() => OpenPage('/BecomeASponsor')}>Become A Sponsor</button>
                    </div>
                    {Object.keys(sponsorsDict).map((sponsorTier) => (
                        <div key={sponsorTier} className={sponsorTier}>
                            <h2>{sponsorTier}</h2>
                            {Object.keys(sponsorsDict[sponsorTier]).map((sponsorKey) => {
                            const sponsor = sponsorsDict[sponsorTier][sponsorKey];
                            return (
                                <div key={sponsorKey}>
                                <div>
                                    <div>
                                    {sponsor.Name && <h3>{sponsor.Name}</h3>}
                                    {sponsor.LogoUrl && <a href={sponsor.Url}><img src={sponsor.LogoUrl} alt="Sponsor Logo" /></a>}
                                    </div>
                                    {(sponsor.DescriptionAboutSponsor !== undefined && sponsor.DecriptionOnHelp !== undefined) && <p>Another Element</p>}
                                </div>
                                {sponsor.DescriptionAboutSponsor !== undefined && <p>{sponsor.DescriptionAboutSponsor}</p>}
                                {sponsor.DecriptionOnHelp !== undefined && <p>{sponsor.DecriptionOnHelp}</p>}
                                </div>
                            );
                            })}
                        </div>
                    ))}
            </div>);
    }

};

export default OurSponsors;