import {Result, Button, Space} from "antd";
import {SmileOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom"

const UnLogin = () =>{
	return(
		<div style={{paddingTop:"100px"}}>

			<Result
				icon={<SmileOutlined twoToneColor="red"/>}
				title="請登入"
				extra={

				<>
				<div style={{paddingBottom: "20px"}}>
					感謝您要分享，但要先登入喔～
				</div>
			
			{/* <Button style={{margin:"auto"}}>
				<Link to ="/statistic" style={{textDecoration:"none"}}>回上一頁</Link>
			</Button> */}
			<button  className="button-style-3" style={{padding:"5px 10px"}}>
				<Link to ="/login" style={{textDecoration:"none", color:"white"}}>登入去</Link>
			</button>
			</>
				}

				style={{width:"100%"}}
			/>	

		</div>
	)
}

export default UnLogin;