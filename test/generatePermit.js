const { getPermitData } = require('./Utils/TarotPeriphery');


const main = async () => {
    const token = ""
    const owner = ""
    const spender = ""
    const value = ""
    const deadline = ""
    const borrowPermit = false;
    const pd = await getPermitData(
        token, 
        owner, 
        spender, 
        value, 
        deadline, 
        borrowPermit
    );
    console.log(pd);
}

main().catch(e => console.log(e))