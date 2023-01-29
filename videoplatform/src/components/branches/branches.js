import React from "react"
import './branches-style.scss'
function Branches() {
  const[branchesData, setBranches] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "branches"]{
                title,
                slug,
                branchTitle,
                branchImage{
                    asset->{
                        _id,
                        url
                    },
                
                   
                }
            }`)
            .then((data) => setBranches(data))
            .catch(console.error);
    }, []);
  return (

    <div className="branchesWrapper">
    <section>
        <div>
            {branchesData && branchesData.map((branches, index) => (
            <article>
                <div className="branchesWrapper">
                    <img
                        src={branches.image.asset.url}
                        alt="piggy"
                        className="bild">
                    </img>
                </div>
            </article>
))}
        </div>
    </section>
</div>
    
  );
}

export default Phone;