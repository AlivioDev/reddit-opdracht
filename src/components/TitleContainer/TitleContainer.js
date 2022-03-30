import "./TitleContainer.css"

function TitleContainer() {

    const pathArray = window.location.pathname.split('/');
    console.log(pathArray);

    const title = "r/" + pathArray[2];

    return (
        <>
            <div className = "header-title">

                <h1>
                    {title}
                </h1>
                <p>
                    Subreddit specifications
                </p>
            </div>
        </>

    )
}


export default TitleContainer;