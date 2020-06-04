import React, { useState, useEffect } from 'react';
import {getSuggetionsApi} from '../api'
import { useDispatch, useSelector } from 'react-redux';
import {setLocationAction} from '../actions/index'

const AutoComplete=()=>{
  const [userInput, setUserInput] = useState({})
  const [suggestions , setSuggestions] = useState([])
  const markerLocation = useSelector(state => state.markerLocation)
  const dispatch = useDispatch()

  useEffect(()=>{
    const getSuggestions = async() => {
      if (userInput.clinicName!=undefined && userInput.clinicName != '' && userInput.clinicName.length>=3){
        console.log('userInput.clinicName', userInput.clinicName)
        const suggestions = await getSuggetionsApi(userInput.clinicName)
        console.log('suggestions', suggestions)
        setSuggestions(suggestions.data)
      }else{
        setSuggestions([])
      }
    }
    getSuggestions()
  },[userInput])

  const handleOnClick = (suggestionPassed)=>{
    console.log('suggestionPassed', suggestionPassed)
    dispatch(setLocationAction(suggestionPassed))
  }
  const suggestionListArray = suggestions.map((suggestionPassed) => {
    return(
      <li key={suggestionPassed._id} onClick={()=>handleOnClick(suggestionPassed)}>
        {suggestionPassed.name + suggestionPassed.address}
      </li>
    )
  })
  

  const handleInputChange = async (e) => {
    setUserInput({
      ...userInput,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  return(
    <div>
      <input 
      name='clinicName'
      type='text'
      onChange={handleInputChange}/>
      <ul>
        {suggestionListArray} 
      </ul>
      
    </div>
    
  )
}
export default AutoComplete
// class AutoComplete extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeSuggestion: 0,
//       filteredSuggestions: [],
//       showSuggestions: false,
//       userInput: ''
//     };
//   }
//   static defaultProperty={
//     suggestions: []
//   };

    
//   render() {
//     const {
//       onChange,
//       onClick,
//       onKeyDown,
//       state: {
//         activeSuggestion,
//         filteredSuggestions,
//         showSuggestions,
//         userInput
//       }
//     } = this;
//     let suggestionsListComponent;
//     if (showSuggestions && userInput) {
//       if (filteredSuggestions.length) {
//         suggestionsListComponent = (
//           <ul class="suggestions">
//             {filteredSuggestions.map((suggestion, index) => {
              
//               return (
//                 <li  key={suggestion} onClick={onClick}>
//                   {suggestion}
//                 </li>
//               );
//             })}
//           </ul>
//         );
//       } else {
//         suggestionsListComponent = (
//           <div class="no-suggestions">
//             <em>No suggestions!</em>
//           </div>
//         );
//       }
//     }
//     return (
//       <React.Fragment>
//         <input
//           type="text"
//           onChange={onChange}
//           onKeyDown={onKeyDown}
//           value={userInput}
//         />
//         {suggestionsListComponent}
//       </React.Fragment>
//     )
//   }
// }
// export default AutoComplete;