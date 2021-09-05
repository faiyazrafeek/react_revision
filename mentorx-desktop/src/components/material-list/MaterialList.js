import './MaterialList.css';
import Material from '../material/Material';

const MaterialList = ({clickMaterial}) => {
    return ( 
        <div className="material-list">
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
            <Material clickMaterial = {clickMaterial} />
        </div>
     );
}
 
export default MaterialList;