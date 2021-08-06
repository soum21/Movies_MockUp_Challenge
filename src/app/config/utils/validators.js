const spacesAndCharecterReplacer = (data, replaceWith) => {
    var pattern = /[^A-Z0-9]/ig;
    var isMatch = pattern.test(cleanUp);
    if (isMatch) {
        var cleanUp = data.replace(/ /g, "");
        var final = cleanUp.replace(pattern, "-")
        if (final.charAt(final.length - 1) === "-") {
            var returnValue = final.slice(0, -1);
            return returnValue;
        }
        else{
            return final;
        }
    }
    else {
        return data.split(" ").join("-")
    }

}

const removeDuplicates = (array) =>{
    const cleanedArray = array.reduce((acc, current) => {
        const match = acc.find(item => item.id === current.id);
        if (!match) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      return cleanedArray
}

export { spacesAndCharecterReplacer,removeDuplicates }