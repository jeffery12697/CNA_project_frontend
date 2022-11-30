import { Empty} from 'antd';
import emptyImg from "../logo/nothing.jpg"


const emptyConfig = () => (
	// <div style={ { textAlign: 'center' }}>
	// 	<image href={emptyImg}></image>
	// {/* <SmileOutlined style={{ fontSize: 20 }} /> */}
	// 	<p>Data Not Found</p>
	// </div>
	<div style={{textAlign:"center"}}>
		<img className='nothing' src={emptyImg} alt={"沒資料"}/>
		{/* <p>沒人填資料</p> */}
	</div>
);

export default emptyConfig;