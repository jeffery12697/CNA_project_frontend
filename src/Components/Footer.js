import { Button} from '@chakra-ui/react'
import { FaGithub , FaRegFileAlt} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <br/><br/><br/><br/>
            <hr></hr>
            <div className="footer">
                <div>
                    <b>Made with ❤️ by NTU TMD Team</b>
                        <a href='https://github.com/jeffery12697/NTU-TMD_for_public' style={{color: "inherit", textDecoration: "inherit"}}>
                            <Button colorScheme='github' leftIcon={<FaGithub />} style={{paddingLeft:"10px"}}>
                            github
                            </Button>
                        </a>
                        <a href='https://forms.gle/ZnZoTvGpk6oyvxBQ8' style={{color: "inherit", textDecoration: "inherit"}}>
                            <Button leftIcon={<FaRegFileAlt />} style={{paddingLeft:"10px"}}>
                            問題回報
                            </Button>
                        </a>

                </div>

            </div>
        </>
    )
}


export default Footer;