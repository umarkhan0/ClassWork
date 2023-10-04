import ComboBox from "../componenets/seachSelect"
const dropDownConsole = () =>{
    const handleSelectionChange = (selectedValue) => {
        console.log(selectedValue); // Log the selected value to the console
      };
    return(
<ComboBox onSelectionChange={handleSelectionChange}/>
    )
}
export default dropDownConsole