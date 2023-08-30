import { createEdgeRouter } from "next-connect"
import dbConnect from "@/backend/config/dbConnect"
import { newAppointment} from "@/backend/controllers/appointmentController"
dbConnect();
const router = createEdgeRouter()
    .post(newAppointment)

export default router; 