import React from 'react'
import AlignCard from './AlignCard'

const Header = () => {
    return (
        <>
            <div className="row full" style={{ height: "500px" }}>
                <div className="row full rowRev" >
                    <div className="col w50 flexAIC flexJCC">
                        <img src="vghhhj.webp" width="550px" alt="" />
                    </div>
                    <div className="col w50 flexAIC flexJCC">
                        <div className="col">
                            <h4>SHOPIFY CAPITAL</h4>
                            <p style={{ color: "orange", fontSize: "3.2rem", color: "black", fontWeight: "900" }}>Business funding.</p>
                            <p style={{ color: "orange", fontSize: "3.2rem", color: "black", fontWeight: "900" }}>Your way.</p>
                            <p style={{ maxWidth: "530px", fontSize: "1.2rem", marginTop: "20px" }}>Get the freedom to grow your business the way you want with fast funding and flexible payments through Shopify Capital.</p>
                            <button className="dbtn free" style={{ width: "230px", margin: "25px 0px" }}>Log in to check eligibility</button>
                            <p>Don’t have a Shopify store? <a href="#">Start a free trial.</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="Screenshot at 2022-11-01 10-47-56.png" alt="" className="w100" />

            <div className="w100 col flexAIC">
                <p style={{ color: "orange", fontSize: "2.8rem", color: "black", fontWeight: "900" }}>Your money, your moves</p>
                <p style={{ maxWidth: "60%", fontSize: "1.2rem", marginTop: "20px" }}>From buying inventory to ramping up your marketing efforts and hiring more staff, you decide how to use your business funds.</p>
            </div>

            <div className="w90 row flexSA tp">
                {
                    ["capital-funding-test-target-small-10edf975bab41cb16e9ff27b0eaa250b86017bded557745e566a45daca3e45b6.png", "capital-funding-test-box-small-71dcc6ba52b8368087d9fdebf2143afaf9c39326c2ed045ae426abb5d6c6c378.png", "capital-funding-test-handshake-small-d3254ef8a21b55df7cdc068f732b42ac3b5872fd990d8cc629edaf42993fe4c5.png"].map(x => {
                        return <div className=" col forcard flexSB">
                            <img src={x} alt="" />
                            <h4>Hire who you need</h4>
                            <p>Bring on experts or freelancers, compete for top talent, and increase your team’s productivity with the right people on board.</p>
                            <button className="dbtn free" style={{ padding: "0.8rem", borderRadius: "5px" }}>Build your dream team</button>
                        </div>
                    })
                }

            </div>
            <img src="Screenshot at 2022-11-01 11-33-17.png" alt="" className="w100" />
            <img src="Screenshot at 2022-11-01 11-48-35.png" alt="" className="w100" />
            <img src="Screenshot at 2022-11-01 11-35-40.png" alt="" className="w100" />
            <div className="w90 col funding">
                <p className='ph'>Learn more about funding </p>
                <p className='ph'>your business</p>
                <div className="row full topmargin">
                    <div className="cardf0 w20">
                        <img src="blog-4a367f693c71d46a679aa501aec59c0c08dd4f5c78423fba6dd68fdfcddf14e9.svg" alt="" className="full" />
                        <div className="col w90" style={{ padding: "5%", lineHeight: "2" }}>
                            <p>BLOG</p>
                            <a href="" style={{color:"black"}}>Learn how to recognize when your business is ready for funding.</a>
                        </div>
                    </div>
                    <div className="cardf0 w20">
                        <img src="help-docs-79e6af70c74f1639bc61bf903471c8aca0b294db0259a6d28831d0f242aec97f.svg" alt="" className="full" />
                        <div className="col w90" style={{ padding: "5%", lineHeight: "2" }}>
                            <p>Help docs</p>
                            <a href=""  style={{color:"black"}}>Learn how funding through Shopify Capital can work for your business.</a>
                        </div>
                    </div>
                </div>
                
            </div>

<div className="row full daber">
    <div className="col w50 " style={{paddingLeft:"5%"}}>
        <p className="footpara">
        Try Shopify for free, and explore all the tools and services you need to 
        <span> start, run, and grow your business.</span>
        </p>
        <div className="row full flexAIC daber2">
            <input type="text" className='sinput inpu1' placeholder='Enter your email address'/>
            <button className="dbtn hm free" style={{padding:"0.9rem"}}>Start free trial</button>
        </div>
    </div>
    <div className="col w50" style={{alignItems: "flex-end",justifyContent: "flex-end"}}>
        <img style={{width: "400px",marginTop: "118px"}} src="money-bills-signup-footer-d7b8c34f279eb924e77fdeb7670d8d2dde3f2b6db482e763244ce2665597f99a.svg" alt="" className="w90" />
    </div>
</div>



            {/* <div className='col full flexAIC' style={{ margin: "50px 0px" }}>
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "PAYROLL PROCESSING + STATUTORY", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "LEAVE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "ATTENDANCE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "EMPLOYEE LIFECYCLE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "MOBILE APP FOR EMPLOYEES", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
        </div> */}



        </>
    )
}

export default Header