function ReviewButton({handleReview}){
    return (
        <>
            <button className="bg-white p-3 text-black hover:bg-slate-400 border rounded-2xl"
            onClick={handleReview}
            >Review</button>
        </>
    )
}

export default ReviewButton;