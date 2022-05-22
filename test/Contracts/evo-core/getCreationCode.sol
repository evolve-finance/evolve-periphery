pragma solidity =0.5.16;

import "./Borrowable.sol";

contract Code {
    function getBorrowableCode() public pure returns (bytes memory) {
        return type(Borrowable).creationCode;
    }
}