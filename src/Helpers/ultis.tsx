
const Utils = {
    convertFileToBase64(file: any) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
        });
    },
    getBase64FromConvertFunc(result:any) {
        const newData = result.replace(/,/gi, "").split("base64");
        return newData[1]
    }
}

export default Utils;