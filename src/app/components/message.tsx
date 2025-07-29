import FormComponent from "./sub-components/form";
import MapComponent from "./sub-components/map";

export default function MessageSection() {
    return (
        <div className="flex">
            <div>
                <MapComponent/>
            </div>
            <div>
                <FormComponent/>
            </div>
        </div>
    );
}