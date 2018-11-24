let definitionParser = async (data) => {
    try {
        await console.log(data);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    definitionParser
};