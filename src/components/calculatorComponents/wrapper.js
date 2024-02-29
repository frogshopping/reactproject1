const Wrapper=({children})=>{
    return (
        <div className="wrapper">{children}</div>
    )
}

export const CalcComponent=()=>{
    return (
        <div>
            <Wrapper>
                <h1>CalcComponent</h1>
            </Wrapper>
        </div>
    )
}