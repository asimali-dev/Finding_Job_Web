import axios from "axios";
import { toast } from "sonner";
const useApplyJob = ()=>{

    const applyJob = async (jobId)=>{
        try {
            const res = await axios.post(`https://finding-job-web.vercel.app/api/v1/applicants/apply/${jobId}`,
            {},   
            {
                withCredentials: true,
            },
            )
            console.log("click hua")
            if(res.data.success){
                toast.success(res.data.message)
            }
            
        } catch (error) {
            toast.error(error.response?.data?.message);
            
        }
    }
    return {applyJob}
}
export default useApplyJob;