const Content = ({tweet}) => {

    return (
        <div className="content my-4">
            {tweet.textContent && <p className="">{tweet.textContent}</p>}

            {tweet.imageContent &&
                <img className='max-h-[400px] w-full rounded object-cover my-2'
                     src={tweet.imageContent}
                     alt=""
                />}
        </div>
    );
};

export default Content;
