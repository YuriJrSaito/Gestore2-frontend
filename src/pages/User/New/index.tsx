import New from "@/pages/new";
import { userInputs } from "@/formSource";

export default function NewUser()
{
    return (
        <New inputs={userInputs} title="Add New User"/>
    )
}