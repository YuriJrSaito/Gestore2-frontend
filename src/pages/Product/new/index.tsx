import New from "@/pages/new/New";
import { productInputs} from "@/formSource";

export default function NewProduct()
{
    return (
        <New inputs={productInputs} title="Add New Product"/>
    )
}